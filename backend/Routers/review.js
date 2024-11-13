import express from 'express'
import {getAllReviews,createReview} from '../Controllers/reviewController.js'
import {protect, restrict} from '../middleware/authMiddleware.js'

const reviewRouter = express.Router({mergeParams:true})

reviewRouter.route('/').get(getAllReviews).post(protect, restrict(["patient"]),createReview);

export default reviewRouter;
