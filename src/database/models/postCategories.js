const sequelize = require('sequelize');
const blogPost = require('./blogPost');
const category = require('./category');

const createPostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: blogPost,
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: category,
        key: 'id'
      }
    },
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });
  return postCategory;
};

module.exports = createPostCategory;