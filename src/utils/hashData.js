import bcrypt from "bcrypt";

const hash = async (data, saltRounds = 10) => {
  try {
    const hashedData = await bcrypt.hash(data, saltRounds);
    return hashedData;
  } catch (error) {
    throw error;
  }
};

const verify = async (unhasedPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(unhasedPassword, hashedPassword);
    return match;
  } catch (error) {
    throw error;
  }
};

export const hashUtil = { hash, verify };
