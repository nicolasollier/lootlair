'use strict';
const models = require("../models");
const User = models.User;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return User.bulkCreate([
      {
        username: "sampleUser",
        mail: 'sampleUser@mail.com',
        password: 'password123',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
