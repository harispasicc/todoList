import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";

app.listen(config.port, error => {
  if (error) console.log(error);
  console.log(`Server is listening on port ${config.port}`);
});

mongoose
  .connect(config.mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Error connecting to database"));
