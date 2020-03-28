import { Model, Sequelize, DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'

class User extends Model {
  static init (sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING
    }, {
      sequelize
    })

    this.addHook('beforeSave', async (user) => {
      console.log('user', user)
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    })

    return this
  }

  checkPassword (password) {
    return bcrypt.compare(password, this.password_hash)
  }
}

export default User
