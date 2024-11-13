import User from "../models/UserSchema.js"; // Ensure this path is correct
import asyncHandler from 'express-async-handler';

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find()

  res.status(200).json({success:true, data:users})
})

export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({success:true,data:user})
})

export const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    console.log("Updating user with data:", req.body);

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,{ new: true });

    res.status(200).json({
        success: true,
        data: updatedUser,
    });
});


export const deleteUser = asyncHandler(async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id);


    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
    });
});
