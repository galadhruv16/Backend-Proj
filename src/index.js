import connect_db from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connect_db()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!", error);
  });
