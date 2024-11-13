import express from 'express'
import {getAllDoctors, getDoctor,updateDoctor,deleteDoctor} from '../Controllers/doctorController.js'
import {protect,restrict} from '../middleware/authMiddleware.js'
import reviewRouter from './review.js'


const doctorRouter = express.Router()


doctorRouter.use("/:doctorId/reviews",reviewRouter)


doctorRouter.get('/', getAllDoctors)
doctorRouter.get('/:id', getDoctor)
doctorRouter.put('/:id',protect, restrict(["doctor"]),updateDoctor)
doctorRouter.delete('/:id', protect, restrict(["doctor"]),deleteDoctor)

export default doctorRouter;