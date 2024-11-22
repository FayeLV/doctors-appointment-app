
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'


export const protect = asyncHandler(async (req, res, next) => {
  console.log("User in protect middleware:", req.user);


  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export const restrict = (roles) => async (req, res, next) => {
    const userId = req.userId; 

    let user;

    // Check if the user exists as a patient or doctor
    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;
    } else if (doctor) {
        user = doctor;
    }

    // If user doesn't exist or the user's role is not in the allowed roles, return 401 Unauthorized
    if (!user || !roles.includes(user.role)) {
        return res.status(401).json({ message: "You are not authorized" });
    }

    next();
};


