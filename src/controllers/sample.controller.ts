import { Request, Response } from "express";
import { taskModel, userModel } from "../models";
import tokenUtils from "../config/token.utils";
import jwt from 'jsonwebtoken'

const userLoginOrRegister = async function (req: Request, res: Response) {
const findUser = await userModel.findOne({
  phoneNo: req.body.phoneNo
})
let user = findUser
if(!findUser) {
user = await userModel.create({
  phoneNo: req.body.phoneNo
})
}
if(!user) return res.status(400).send({
  message:'Error While creating user'
})
const tokens = tokenUtils.generateAuthToken(user.id)

  res.status(200).send({
    code: 200,
    data: {
      user ,
      tokens
    },
  });
};

const createTask = async function (req: Request, res: Response) {
try {

  const task = await taskModel.create(req.body)
   return res.status(200).send({message:'success', data : task})
} catch (error:any) {
  return res.status(500).send({message:error.message})
}
};

const upateTask = async function (req: Request, res: Response) {
try {

  const checkTask = await taskModel.findById(req.params.id)
  if(!checkTask) return res.status(404).send({message:'task not found' })

  const task = await taskModel.findByIdAndUpdate(checkTask.id, req.body)
   return res.status(200).send({message:'success', data : task})
} catch (error:any) {
  return res.status(500).send({message:error.message})
}
};

const fetchTask = async function (req: Request, res: Response) {
try {

  const task = await taskModel.find({
    deleted: false,
    ...req.body.filter ? req.body.filter :{}
  }).limit(req.body.limit).skip((req.body.page - 1)*req.body.limit)
   return res.status(200).send({message:'success', data : task})
} catch (error:any) {
  return res.status(500).send({message:error.message})
}
};


const generateAuthToken = async function (req: Request, res: Response) {
try {

    const token = req.headers.authorization?.replace('Bearer ', '')
if(!token) return res.status(401).send({message:'unauthorized'})

    const decoded = jwt.verify(token, process.env.JWT_SECRET!)

    const tokens = tokenUtils.generateAuthToken((decoded as any).userId)

   return res.status(200).send({message:'success', data : {
tokens
   }})
} catch (error:any) {
  return res.status(401).send({message:error.message})
}
};

export default {
  userLoginOrRegister,
  createTask,
  upateTask,
  fetchTask,
  generateAuthToken
};
