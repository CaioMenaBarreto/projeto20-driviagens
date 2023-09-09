import Joi from "joi";
import JoiDate from "@joi/date";

const JoiWithDate = Joi.extend(JoiDate);

const querySchema = Joi.object({
    biggerDate: JoiWithDate.date().format('DD-MM-YYYY').required(),
    smallerDate: JoiWithDate.date().format('DD-MM-YYYY').required(),
});

export default querySchema;