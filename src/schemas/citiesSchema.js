import Joi from "joi";

const citiesSchema = Joi.object({
    name: Joi.string().min(2).max(50).trim().required()
});

export default citiesSchema;