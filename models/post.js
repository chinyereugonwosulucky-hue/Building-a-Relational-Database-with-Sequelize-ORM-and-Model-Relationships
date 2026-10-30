'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.user,{
        foreignKey: "userId"
      })
    }
  }
  Post.init({
     id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      body: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "id"
        }
      
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    

  }, {
    sequelize,
    modelName: 'post',
    timestamps: true
  });
  return Post;
};