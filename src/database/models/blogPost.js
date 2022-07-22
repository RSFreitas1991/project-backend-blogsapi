const sequelize = require('sequelize');

const createBlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });
  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { as: 'users', foreignKey: 'userId'})
  }
  return blogPost;
};

module.exports = createBlogPost;