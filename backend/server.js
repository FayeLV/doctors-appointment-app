import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routers/auth.js"
import userRouter from './Routers/user.js'
import doctorRouter from "./Routers/doctor.js";
import reviewRouter from "./Routers/review.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is .....");
});

//database connection
mongoose.set('strictQuery',false)
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    })

    console.log('MongoDB database is connected')
  } catch (error) {
    console.log('MongoDB database is connection failed!')
  }
}

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/api/v1/auth',router);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/doctors',doctorRouter);
app.use('/api/v1/reviews',reviewRouter);


app.listen(port, () => {
  connectDb();
  console.log("Server is running on port " + port);
});
