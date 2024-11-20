export const validate = (schema, data) => {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) throw error;
  return value;
};
