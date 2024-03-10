import nodemailer from  'nodemailer';
import Mailgen from 'mailgen';
import ENV from '../config.js';


let nodeConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: ENV.EMAIL,
        pass: ENV.PASSWORD,
    }
}

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
    theme: "default",
    product: {
        name : "Mailgen",
        link : "https://mailgen.js/"
    }
})

export const registerMail = async (req,res) => {
    const {username, userEmail, text, subject} = req.body;

    //body of the email
    var email = {
        body : {
            name: username,
            intro: text || "DEfault text",
            outro: "need help bla bla"
        }
    }

    var emailBody = MailGenerator.generate(email);

    let message = {
        from: ENV.EMAIL,
        to: userEmail,
        subject: subject || "default signup successfuly",
        html: emailBody
    }

    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({msg : " You should recieve  an email for us"})
        })
        .catch(error => res.status(500).send({error}))

}
