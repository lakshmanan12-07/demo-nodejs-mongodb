import express from "express";
import { required, string } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phoneNo: {type: String, required: true, unique: true}
})

const userModel = mongoose.model('User', userSchema)

export default userModel