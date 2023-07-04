const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://qwimik:qwe123@cluster0.kadyqc9.mongodb.net/contactsDB?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => console.log(error.message));