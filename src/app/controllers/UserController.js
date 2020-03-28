import User from '../models/User'

class UserController {
  async store (req, res) {
    const { name, email, password } = req.body

    const exists = await User.findOne({ where: { email } })

    if (exists) {
      return res.json({ error: 'User already exists' })
    }

    const user = await User.create({
      name,
      email,
      password
    })

    return res.json(user)
  }

  async list (req, res) {
    const users = await User.findAll()

    return res.json(users)
  }
}

export default new UserController()
