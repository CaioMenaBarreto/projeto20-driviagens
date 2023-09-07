import Joi from "joi";
import JoiDate from "@joi/date";

const JoiWithDate = Joi.extend(JoiDate);

const flightsSchema = JoiWithDate.object({
    origin: Joi.number().required(),
	destination: Joi.number().required(),
	date: JoiWithDate.format("DD-MM-YYYY").min("now").trim().required()
});

export default flightsSchema;