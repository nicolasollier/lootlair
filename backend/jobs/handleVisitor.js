const cron = require('node-cron');
const { eventEmitter } = require('../eventEmitter');

let visitorPresent = false;

const generateVisitor = () => {
  const arrivalChance = 0.3;
  const departureChance = 0.5;
  const randomChance = Math.random();

  if (!visitorPresent) {
    visitorPresent = randomChance < arrivalChance;
    eventEmitter.emit('visitorUpdate', 'A visitor arrived!');
  } else {
    visitorPresent = !(randomChance < departureChance);
    eventEmitter.emit('visitorUpdate', 'The visitor leaves. Cya!');
  }
};

const scheduleVisitor = () => {
  cron.schedule('* * * * *', generateVisitor);
}

module.exports.scheduleVisitor = scheduleVisitor
