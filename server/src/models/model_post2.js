import getConnection from "../config/db_pool.js";

class postStorage {
  static async getPosts() {
    try {
      const conn = await getConnection();

      const [rows] = await conn.query("SELECT * FROM posts");

      conn.release();

      return rows;
    } catch (err) {
      console.log(err);
    }
  }

  static async getPostById(postId) {
    try {
      const conn = await getConnection();

      const [rows] = await conn.query("SELECT * FROM posts WHERE post_id = ?", [postId]);

      conn.release();

      return rows;
    } catch (err) {
      console.log(err);
    }
  }

  static async addPost(title, content) {
    try {
      const conn = await getConnection();

      const [rows] = await conn.query("INSERT INTO posts (title, content) VALUE (?,?)", [title, content]);

      conn.release();

      return rows;
    } catch (err) {
      console.log(err);
    }
  }

  static async deletePostById(postId) {
    try {
      const conn = await getConnection();

      const [rows] = await conn.query("DELETE FROM posts WHERE post_id = ?", [postId]);

      conn.release();

      return rows;
    } catch (err) {
      console.log(err);
    }
  }

  static async getComments(postId) {
    try {
      const conn = await getConnection();

      const [rows] = await conn.query("SELECT comment_id, content FROM comments WHERE post_id = ?", [postId]);

      conn.release();

      return rows;
    } catch (err) {
      console.log(err);
    }
  }

  static async addComment(postId, content) {
    try {
      const conn = await getConnection();

      const [rows] = await conn.query("INSERT INTO comments (content, post_id) VALUE (?, ?)  ", [content, postId]);

      conn.release();

      return rows;
    } catch (err) {
      console.log(err);
    }
  }
}

export default postStorage;
