'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate(models) {
      Shop.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }
  
  Shop.init({
    name: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Shop',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    userId: 'user_id',
    underscored: true,
  });
  
  return Shop;
};

