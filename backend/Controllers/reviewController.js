import Review from '../models/ReviewSchema.js';
import Doctor from '../models/DoctorSchema.js';
import asyncHandler from 'express-async-handler';

// Get all reviews
export const getAllReviews = asyncHandler(async (req, res) => {
    const reviews = await Review.find();

    // Check if there are no reviews found
    if (!reviews || reviews.length === 0) {
        return res.status(404).json({ success: false, message: "Not found", data: [] });
    }

    // Return reviews
    return res.status(200).json({ success: true, message: "Successful", data: reviews });
});

// Create a review
export const createReview = asyncHandler(async (req, res) => {
    const { doctor, user, content } = req.body;

    // Check if content is provided
    if (!content) {
        return res.status(400).json({ success: false, message: "Content is required" });
    }

    // Assign doctor ID if not provided
    if (!doctor) {
        req.body.doctor = req.params.doctorId;
    }

    // Assign user ID if not provided
    if (!user) {
        req.body.user = req.userId;
    }

    // Create a new review
    const newReview = new Review({
        doctor: req.body.doctor,
        user: req.body.user,
        content
    });

    try {
        // Save the review
        const savedReview = await newReview.save();

        // Update the doctor's review list
        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id }  
        });

        return res.status(201).json({ success: true, message: "Review created successfully", data: savedReview });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
});
