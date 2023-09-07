import Joi from "joi";

const passengersSchema = Joi.object({
    firstName: Joi.string().min(2).max(100).trim().required(),
	lastName: Joi.string().min(2).max(100).trim().required()
})

export default passengersSchema;