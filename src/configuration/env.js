import dotenv from "dotenv";

dotenv.config();

const ENV = {
    PORT: process.env.PORT || 8080,
};

export default ENV;
