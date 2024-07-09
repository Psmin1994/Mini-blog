import Sequelize from "sequelize";

// 클래스를 불러옵니다.
import Post from "./posts.js";
import Comment from "./comments.js";

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false, // Query log ON/OFF
};

const db = {};

// new Sequelize를 통해 MySQL 연결 객체를 생성합니다.
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 연결객체를 나중에 재사용하기 위해 db.sequelize에 넣어줍니다.
db.sequelize = sequelize;

// 모델 클래스를 넣어줍니다.
db.Post = Post;
db.Comment = Comment;

// 모델 정의
Post.init(sequelize);
Comment.init(sequelize);

// 모델간의 관계 정의
Post.associate(db);
Comment.associate(db);

export default db;
