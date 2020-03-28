module.exports = (Sequelize) => {
  return {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
  }
}
