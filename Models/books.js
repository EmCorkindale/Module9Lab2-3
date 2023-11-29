// const { DataTypes, Model } = require("sequelize");
// let dbConnect = require("../dbConnect");
// const sequelizeInstance = dbConnect.Sequelize;

// class Book extends Model {}
// Book.init(
//   {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     author: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // ... other attributes
//   },
//   {
//     sequelize: sequelizeInstance,
//     modelName: "books", //use lowercase plural format
//     timestamps: true,
//     freezeTableName: true,
//   }
// );

// module.exports = Book;

const axios = require("axios");

const getBooks = (res) => {
  return axios.get("https://gutendex.com/books/");
};

module.exports = { getBooks };
