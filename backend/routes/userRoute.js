import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController';


const userRouter = express.Router();

userRouter('/register', registerUser);
userRouter('/login', loginUser);
userRouter('/admin', adminLogin);

export default userRouter;