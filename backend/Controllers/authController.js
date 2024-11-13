import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import asyncHandler from 'express-async-handler'; 


// Generate JWT
const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '30d' }
    );
}

// Register a user
export const register = asyncHandler(async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    let user = null;

    // Check if the user already exists
    if (role === 'patient') {
        user = await User.findOne({ email });
    } else if (role === 'doctor') {
        user = await Doctor.findOne({ email });
    }

    // If user exists, return an error message
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    if (role === 'patient') {
        user = await User.create({
            name,
            email,
            password: hashedPassword,
            photo,
            gender,
            role
        });
    }

    if (role === 'doctor') {
        user = await Doctor.create({ // Create a Doctor user
            name,
            email,
            password: hashedPassword,
            photo,
            gender,
            role
        });
    }

    res.status(200).json({ success: true, message: 'User successfully created' });
});

// Login a user
export const login = asyncHandler(async (req, res) => {
    const { email } = req.body;

    let user = null;

    // Check for user by email (either patient or doctor)
    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
        user = patient;
    }

    if (doctor) {
        user = doctor;
    }

    // If user not found, return an error message
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
        return res.status(400).json({ status: false, message: "Invalid credentials" });
    }

    // Generate and return token
    const token = generateToken(user);
    const { password, role, appointments, ...rest } = user._doc;

    // Respond with success message and user data
    res.status(200).json({
        status: true,
        message: "Successfully logged in",
        token,
        data: { ...rest },
        role
    });
});
