import { Schema, model } from "mongoose";
import pkg from 'bcryptjs';
const { hash } = pkg;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


export default model("User", userSchema);
