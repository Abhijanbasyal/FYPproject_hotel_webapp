
import toast from "react-hot-toast";
import { authenticate } from "./helper";


// validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    if(values.username){
        //user exist or not
        const {status} = await authenticate(values.username);

        if(status !== 200){
            errors.exist = toast.error('user doesnot exist')
        }

    }

    return errors;
}

//validate password page 
export async function passwordValidate(values){
    const errors = passwordVerify({},values);

    return errors;
}


//validate reset password
export async function resetPasswordValidation(values){
    const errors = passwordVerify({},values);

    if(values.password != values.confirm_pwd){
        errors.exist = toast.error("Password not match")
    }

    return errors;
}

//validate register form
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

// validate profile page
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}


/***************************************************************************************** */

//validate password
function passwordVerify(errors ={}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error('password required');

    }else if(values.password.includes(" ")){
        errors.password = toast.error("wrong password ");

    }else if(values.password.length < 4){
        errors.password = toast.error("password must be more than 4 character ");

    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("password must have special character");
    }

    return errors;

    
}

// validate user name
function usernameVerify(error ={}, values){
    if(!values.username){
        error.username = toast.error('username required');

    }else if(values.username.includes(" ")){
        error.username = toast.error("Invalid username");
    }

    return error;
}

//validate email
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong email")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address")
    }

    return error;
}
