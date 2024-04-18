'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static hashPassword(password) {
      return bcrypt.hash(password, saltRounds);
    }

    static associate(models) {
      User.hasOne(models.Shop, { foreignKey: 'user_id', as: 'shop' });
    }
  }

  User.init({
    username: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
  })

  async function hashUserPassword(user) {
    user.password = await User.hashPassword(user.password);
  }

  User.beforeCreate(async (user, options) => {
    await hashUserPassword(user);
  });

  User.beforeUpdate(async (user, options) => {
    if (user.changed('password')) {
      await hashUserPassword(user);
    }
  });

  return User;
};
