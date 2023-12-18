const Sequelize = require('sequelize');
const database = require('../dbConfig/db');

const notes = database.define('notes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

// notes.associate = (models) => {
//     notes.belongsTo(models.user,
//       { foreignKey: 'user_id', as: 'user' });
//   };

notes.sync({force: true}).then(() => {
  console.log('Modelo sincronizado com o banco de dados.');
});
 
module.exports = notes;
