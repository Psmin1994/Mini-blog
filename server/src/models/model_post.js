import db from "./sequelize/index.js";

const Post = db.Post,
  Comment = db.Comment;

class postStorage {
  static async getPosts() {
    try {
      const rows = await Post.findAll({});

      return rows;
    } catch (err) {
      console.log("에러 발생!!", err);
    }
  }

  static async getPostById(postId) {
    try {
      const rows = await Post.findAll({
        where: {
          post_id: postId,
        },
      });

      return rows;
    } catch (err) {
      console.log("에러 발생!!", err);
    }
  }

  static async addPost(title, content) {
    try {
      const rows = Post.create({
        title,
        content,
      });

      return rows;
    } catch (err) {
      console.log("에러 발생!!", err);
    }
  }

  static async deletePostById(postId) {
    try {
      const rows = Post.destroy({
        where: {
          post_id: postId,
        },
      });

      return rows;
    } catch (err) {
      console.log("에러 발생!!", err);
    }
  }

  static async getComments(postId) {
    try {
      const rows = Comment.findAll({
        where: {
          post_id: postId,
        },
      });

      return rows;
    } catch (err) {
      console.log("에러 발생!!", err);
    }
  }

  static async addComment(postId, content) {
    try {
      const rows = Comment.create({
        content,
        post_id: postId,
      });

      return rows;
    } catch (err) {
      console.log("에러 발생!!", err);
    }
  }
}

export default postStorage;
