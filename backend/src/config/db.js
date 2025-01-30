import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/eventos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.log("Error al conectar a la base de datos", error);
    process.exit(1);
  }
};

module.exports = connectDB;
