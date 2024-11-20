import Joi from "joi";

const StudentEntryScheme = Joi.object({
  firstName: Joi.string().required(),
  secondName: Joi.string().required(),
  birthdate: Joi.date().iso().required(),
});

export { StudentEntryScheme };
