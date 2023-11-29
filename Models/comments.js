const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Comment: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    postID: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    createdAt: {
      type: DataTypes.TIME,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comment;
