
require("dotenv").config();
require("dotenv").config({ path: ".env.local" });

const app = require("./app");
const connectDB = require("./DB/conn");

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
