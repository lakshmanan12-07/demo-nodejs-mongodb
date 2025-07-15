import Joi from 'joi'

const loginUser = {
    body: Joi.object().keys({
        phoneNo: Joi.string() .pattern(/^\+\d{1,4}\d{10}$/).required(),
    })
}

export default {
    loginUser
}