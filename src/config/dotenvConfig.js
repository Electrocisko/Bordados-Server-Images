import dotenv from "dotenv";

dotenv.config();

export default {
  app: {
    PORT: process.env.PORT || 3000,
  },
  database: {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  },
  session: {
    ADMIN: process.env.ADMIN,
    PASS: process.env.PASS,
    SECRET_JWT: process.env.SECRET_JWT,
  },
  cloudinary: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.CLOUD_API_SECRET,
  },
};
