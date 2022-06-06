import { Schema, model } from "mongoose";
import UserInterface from "@/interfaces/userInterface";

const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

const User = model<UserInterface>("User", userSchema);

export default User;
