// import asyncHandler from "express-async-handler";
// import addUser from "../models/users.js";

// export const registerUser = asyncHandler(async (req, res) => {
//     const {email, password} = req.body;
  
//     const userExists = await User.findOne({ email });
  
//     if (userExists) {
//       res.status(404);
//       throw new Error("User already exists");
//     }
    
  
//     const user = await addUser.create({
//       email,
//       password
//     });
  
//     if (user) {
//       res.status(200).json({
//         _id: user._id,
//         email: user.email,
//       });
//     } else {
//       res.status(400);
//       throw new Error("User not found");
//     }
//   });