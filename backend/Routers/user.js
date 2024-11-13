import express from 'express'
import {getAllUsers, getUser,updateUser,deleteUser} from '../Controllers/userController.js'
import {protect,restrict} from '../middleware/authMiddleware.js'

const userRouter = express.Router()

userRouter.get('/',protect,restrict(['patient']), getAllUsers)
userRouter.get('/:id',protect,restrict(['admin']), getUser)
userRouter.put('/:id', restrict(['patient']),updateUser)
userRouter.delete('/:id', restrict(['patient']),deleteUser)

export default userRouter;