import Joi from "joi";

const travelSchema = Joi.object({
    passengerId: Joi.number().positive().required(),
    flightId: Joi.number().positive().required()
});

export default travelSchema;