import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import postRouter from "./src/routes/route_post.js";
import db from "./src/models/sequelize/index.js";
// import path from "path";

const app = express();
// const __dirname = path.resolve();

// app.use("/", express.static(`${__dirname}/src/public`));

app.set("port", process.env.PORT || 5000);

try {
  await db.sequelize.sync();

  console.log("데이터베이스 연결됨.");
} catch (err) {
  console.log(err);
}

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router
app.use("/board", postRouter);

app.listen(app.get("port"), () => {
  console.log("Server On");
});
