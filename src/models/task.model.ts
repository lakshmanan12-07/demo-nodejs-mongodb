import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {type: String, required: true},
  status: {type: String, required: true, enum: ['pending', 'approved', 'rejected']},
  deleted: {type: Boolean, required: true, default: false},
},{timestamps: true})

const taskModel = mongoose.model('Task', taskSchema)

export default taskModel