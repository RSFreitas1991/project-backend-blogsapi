const sequelize = require('sequelize');
const blogPosts = require('./blogPosts');
const categories = require('./categories');

const createPostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: blogPosts,
        key: 'id'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: categories,
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