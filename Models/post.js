const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Posts extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    postDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    postImage: {
        type: DataTypes.STRING,
        allowNull: true,
        required: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Posts;
