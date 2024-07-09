import postStorage from "../models/model_post.js";

export default {
  getPost: async (req, res) => {
    const data = await postStorage.getPosts();

    res.json(data);
  },
  getPostById: async (req, res) => {
    let postId = req.params.id;

    const data = await postStorage.getPostById(postId);

    res.json(data);
  },
  addPost: async (req, res) => {
    let { title, content } = req.body;

    const data = await postStorage.addPost(title, content);

    res.json(data);
  },
  deletePostById: async (req, res) => {
    let postId = req.params.id;

    const data = await postStorage.deletePostById(postId);

    res.json(data);
  },

  getComment: async (req, res) => {
    let postId = req.params.id;

    const data = await postStorage.getComments(postId);

    res.json(data);
  },
  addComment: async (req, res) => {
    let postId = req.params.id;
    let content = req.body.content;

    const data = await postStorage.addComment(postId, content);

    res.json(data);
  },
};
