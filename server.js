import "dotenv/config";
import express from "express";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";

import imdb from "./imdb.js";
import proxy from "./proxy.js";

const { PORT = 4000 } = process.env;

console.log("Setting shotit-meta-service...");

const app = express();

app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, x-trace-secret");
  next();
});

app.use(
  rateLimit({
    max: 100, // limit each IP to 100 requests
    windowMs: 1000, // per second
    delayMs: 0, // disable delaying - full speed until the max limit is reached
  })
);

app.use(
  bodyParser.raw({
    type: ["image/jpeg", "image/png"],
    limit: "25mb",
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  const startTime = performance.now();
  console.log("=>", new Date().toISOString(), req.ip, req.path);
  res.on("finish", () => {
    console.log(
      "<=",
      new Date().toISOString(),
      req.ip,
      req.path,
      res.statusCode,
      `${(performance.now() - startTime).toFixed(0)}ms`
    );
  });
  next();
});

app.get("/", (req, res) => {
  return res.send(`OK`);
});

app.post("/imdb", imdb);

app.get("/proxy", proxy);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`server listening on port ${PORT}`)
);
