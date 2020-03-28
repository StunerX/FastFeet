'use strict'

const bcrypt = require('bcryptjs')
const uuid = require('uuid-random')

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users', [
        {
          id: uuid(),
          name: 'Distribuidora FastFeet',
          email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('admin', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  },

  down: () => {}
}
