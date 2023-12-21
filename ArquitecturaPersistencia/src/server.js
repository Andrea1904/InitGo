import express from "express";
import ENV_CONFIG from "./config/env.config.js";
import appRouters from "./routers/app.routers.js";

const { PORT } = ENV_CONFIG;
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api', appRouters);

// Listen
app.listen(+PORT, () => {
  console.log("Ready on port => ", +PORT);
});