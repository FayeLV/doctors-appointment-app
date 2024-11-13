import Doctor from "../models/DoctorSchema.js";
import asyncHandler from 'express-async-handler';

export const getAllDoctors = asyncHandler(async (req, res) => {

    const { query } = req.query;
    let doctors;

    if (query) {
        
        doctors = await Doctor.find({
        $or: [
            { name: { $regex: query, $options: "i" } },
            { specialization: { $regex: query, $options: "i" } } 
        ]
        });
    } else {
        doctors = await Doctor.find();
    
    res.status(200).json({success:true, data:doctors})
    }
})

export const getDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);

  if (!doctor) {
    res.status(404);
    throw new Error("doctor not found");
  }

  res.status(200).json({success:true,data:doctor})
})

export const updateDoctor = asyncHandler(async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
        res.status(404);
        throw new Error("doctor not found");
    }

    console.log("Updating doctor with data:", req.body);

    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body,{ new: true });

    res.status(200).json({
        success: true,
        data: updatedDoctor,
    });
});


export const deleteDoctor = asyncHandler(async (req, res) => {

    const doctor = await Doctor.findByIdAndDelete(req.params.id);


    if (!doctor) {
        res.status(404);
        throw new Error("Doctor not found");
    }

    res.status(200).json({
        success: true,
        message: "Doctor deleted successfully",
    });
});
