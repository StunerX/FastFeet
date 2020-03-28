import { Model, Sequelize, DataTypes } from 'sequelize'

class Recipient extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: Sequelize.STRING,
      street: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      state: Sequelize.STRING,
      city: Sequelize.STRING,
      cep: Sequelize.STRING

    }, {
      sequelize
    })

    return this
  }
}

export default Recipient
