import mongoose, { Schema } from "mongoose";
import { hashPassword } from "../utils/passwordManager.js";

const userInfoSchema = new Schema(
  {
    avatar: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
    role: {
      type: String,
      enum: ["incharge", "core-member", "member"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userInfoSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    this.password = await hashPassword(this.password);
    console.log(this.password);
    next();
  } catch (error) {
    console.log(error);
    return next();
  }
});

export const UserInfo = mongoose.model("UserInfo", userInfoSchema);
