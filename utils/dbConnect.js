const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);
async function dbConnect() {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  mongoose.connection
    .once("open", function () {
      console.log("Database Conection Established!");
    })
    .on("error", function (error) {
      console.log("Error is: ", error);
    });
}

export default dbConnect;
