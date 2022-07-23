const sequelize = require('sequelize');

const createPostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });
  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: postCategory,
      foreignKey: 'id',
      OtherKey: 'id'
    })
    models.BlogPost.belongsToMany(models.Category, {
      as: 'Category',
      through: postCategory,
      foreignKey: 'id',
      OtherKey: 'id'
    })
  };
  return postCategory;
};

module.exports = createPostCategory;