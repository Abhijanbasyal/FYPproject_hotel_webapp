import {Router} from "express";
const router = Router();

//import all controllers
import * as controller from '../controllers/appControllers.js';
import Auth, {localVariables} from "../middleware/auth.js";

import {registerMail} from '../controllers/mailer.js';



// post methods
router.route('/register').post(controller.register); //register user
router.route('/registerMail').post(registerMail); //send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); //authenticate the user
router.route('/login').post(controller.verifyUser, controller.login); //login in app



//get methods
router.route('/user/:username').get(controller.getUser); //user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP); //random otp generate
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP); //verify  generated otp
router.route('/createResetSession').get(controller.createResetSession); // reset all the variables


//put methods
router.route('/updateuser').put(Auth, controller.updateUser); //is to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset the password

export default router;