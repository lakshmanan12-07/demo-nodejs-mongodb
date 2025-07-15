import Joi from 'joi'

const createTask = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        status: Joi.string().valid('pending', 'approved', 'rejected').required(),
    })
}

const updateTask = {
  params: Joi.object().keys({
        id: Joi.string().required(),
  }),
    body: Joi.object().keys({
        name: Joi.string().optional(),
        status: Joi.string().valid('pending', 'approved', 'rejected').optional(),
    }).min(1)
}

const fetchTask = {
    body: Joi.object().keys({
        filter: Joi.object().optional(),
        limit: Joi.number().required(),
        page: Joi.number().required(),
    })
}


export default {
    createTask,
    updateTask,
    fetchTask
}