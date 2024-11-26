import { UserInfo } from "../models/userInfo.model.js";

export async function createUser(req, res) {
  let user = await UserInfo.findOne({ email: req.body.email });

  if (user) {
    return res.json({
      success: false,
      status: "F",
      message: "Email is already in use",
    });
  }

  // image upload

  const image = "images/upload";

  const newUserInfo = await UserInfo.create({
    // avatar
    avatar: image,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  if (newUserInfo) {
    console.log(newUserInfo);
    return res.status(200).json({
      success: true,
      status: "S",
      message: "User created successfully",
      response: newUserInfo,
    });
  } else {
    return res.json({
      success: false,
      status: "F",
      message: "Failed to create user",
    });
  }
}