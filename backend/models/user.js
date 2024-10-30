import { Schema, model } from "mongoose";
import { hash } from "bcryptjs";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Encrypt password before saving using a hash function within the mongoose pre hook
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hash(this.password, 10);
  next();
});

export default model("User", userSchema);
