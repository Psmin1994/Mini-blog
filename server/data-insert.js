import mysql from "mysql2/promise";
import data from "./data.json" assert { type: "json" };
import "dotenv/config";

const pool = await mysql.createPool({
  host: process.env.DB_HOST, //실제로 연결할 데이터베이스의 위치
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE, //데이터베이스 이름
  port: 3306,
  connectionLimit: 30,
});

const conn = await pool.getConnection(async (conn) => conn);

await data.forEach(async (post, i) => {
  let { id: post_id, title, content: post_content, comments } = post;

  try {
    let [rows] = await conn.query("INSERT INTO posts (post_id, title, content) VALUES (?, ?, ?)", [post_id, title, post_content]);

    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    conn.release();
  }

  comments.forEach(async (comment, i) => {
    let { id: comment_id, content: comment_content } = comment;

    console.log(comment_id, comment_content, post_id);

    try {
      let [rows] = await conn.query("INSERT INTO comments (comment_id, content, post_id) VALUES (?, ?, ?)", [
        comment_id,
        comment_content,
        post_id,
      ]);

      console.log(rows);

      return rows;
    } catch (err) {
      console.log(err);
    } finally {
      conn.release();
    }
  });
});

conn.release();
