import crypto from "crypto";

const password = () => {
  return `${crypto.randomBytes(3).toString("hex")}`;
};

const record = () => {
  return `${Math.floor(10000000 + Math.random() * 90000000)}`;
};

const otp = async () => {
  return `${Math.floor(100000 + Math.random() * 900000)}`;
};

export const generate = { password, record, otp };
