
import UserModel from "../model/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../config.js';
import otpGenerator from 'otp-generator';


//middleware 
export async function verifyUser(req, res, next){

    try{

        const {username} = req.method == "GET" ? req.query : req.body;

        //check the user existence
        let exist = await UserModel.findOne({username});
        if(!exist) return res.status(404).send({error: "Can't fint the user"});
        next();


    }catch(error){
        return res.status(404).send({error: "Authentication error"})
    }

}



export async function register(req,res){
    try{

        const { username, password, profile, email} = req.body;

        //checking user existence   
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username })
            .then((err,user)=>{
                if(err) reject(new Error(err))
                if(user) reject ({error : 'Please use unique  username'})
                resolve();
            
            })
        });

        //checking email existence
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }).then((err,email)=>{
                if(err) reject(new Error(err))
                if(email) reject ({error : 'Please use unique  email'})

                resolve();
            })
                            
            })

        Promise.all([existUsername, existEmail])
            .then(() => {
                if(password){
                    bcrypt.hash(password, 10)
                        .then(hashedPassword => {

                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || "",
                                email
                            });

                            //return  save result as response
                            user.save()
                                .then(result => res.status(201).send({msg: "User register successfully"}))
                                .catch(error => res.status(500).send({error}) )


                        }).catch(error => {
                            return res.status(500).send({
                                error : "Enable to hashed passsword"
                            })
                        })
                }

            }).catch(error => {
                console.log(error);
                return res.status(500).send({ error });   
            })
            
        
    }catch(error){
        return res.status(500).send(error);
    }
}

export async function login(req, res){
    const {username, password} = req.body;

    try{

        UserModel.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if(!passwordCheck) return res.status(400).send({error : "Dont have password "})

                        //jwt token for authentication
                        const token = jwt.sign({
                                        userId : user._id,
                                        username : user.username
                                    }, ENV.JWT_SECRET ,{expiresIn : '24h'})
                        return res.status(200).send({
                            msg: "Login Successful",
                            username: user.username,
                            token
                        })

                    })
                    .catch(error => {
                        return res.status(400).send({error : "Password doesnot match"})
                    })
            })
            .catch(error => {
                return res.status(404).send({error : "username not found"});
            })

    }catch(error){
        return res.status(500).send({error});
    }
}

export async function getUser(req,res){
    
    const { username } = req.params;

    try {
        
        if(!username) return res.status(501).send({ error: "Invalid Username"});

        UserModel.findOne({ username })
            .then((err, user)=> {
                if(err) return res.status(500).send({ err });
                if(!user) return res.status(501).send({ error : "Couldn't Find the User"});

                /** remove password from user */
              
                const { password, ...rest } = Object.assign({}, user.toJSON());

                return res.status(201).send(rest);
            })

    } catch (error) {
        return res.status(404).send({ error : "Cannot Find User Data"});
    }

}

export async function updateUser(req,res){
    try{
        const userId = req.query.id

        if(userId){
            const body= req.body

            UserModel.updateOne({_id : userId}, body)
                .then((err,data) => {
                    if(err) throw err;

                    return res.status(201).send({msg: "Record Updated"});
                })

        }else{
            return res.status(401).send({error: "User not found"})
        }
    }catch(error){
        return res.status(401).send({error});
    }
}

export async function generateOTP(req, res){
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
    res.status(201).send({code : req.app.locals.OTP})
}


export async function verifyOTP(req, res){
    const {code} = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null;// reset OTP
        req.app.locals.resetSession = true;// start session
        return res.status(201).send({msg : "verify successfully"})

    }
    return res.status(400).send({error: "Invalid OTP"})
}


export async function createResetSession(req, res){
    if(req.app.locals.resetSession){

        return res.status(201).send({ flag: req.app.locals.resetSession})


    }
    return res.status(440).send({error : " Session expired"})
}

export async function resetPassword(req, res){
    try{

        if(!req.app.locals.resetSession) return res.status(440).send({error : " Session expired"});

        const {username, password} = req.body;

        try{

            UserModel.findOne({username})
                .then(user => {
                    bcrypt.hash(password, 10)
                        .then(hashedPassword => {
                            UserModel.updateOne({ username : user.username}, {password: hashedPassword})
                            .then(err,data => {
                                if(err) throw err;
                                req.app.locals.resetSession = false;
                                return res.status(201).send({msg : "Record Updated"})
                            })
                        })
                        .catch(e => {
                            return res.status(500).send({error : "enable to hashed password"})
                        })
                })
                .catch(error => {
                    return res.status(404).send({error: "Username not found"})
                })
            
        }catch(error){
            return res.status(500).send({error})
        }

    }catch(error){
        return res.status(401).send({error});
    }
}