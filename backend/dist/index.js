import express from "express";
import { config } from "dotenv";
config();
const app = express();
//middlewares
app.use(express.json);
//connctions and listeners
app.listen(5000, () => console.log("server open"));
//# sourceMappingURL=index.js.map