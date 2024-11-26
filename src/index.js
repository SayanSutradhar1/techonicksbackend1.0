import { app } from "./app.js";
import connectDb from "./config/db/db.config.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDb()
  .then(() => {
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
