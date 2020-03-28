import Recipient from '../models/Recipient'

class RecipientController {
  async store (req, res) {
    const { name, street, number, complement, state, city, cep } = req.body

    const foundRecipient = await Recipient.findOne({
      where: {
        name
      }
    })

    if (foundRecipient) return res.status(400).json('Recipent is already registered')

    const recipient = await Recipient.create({
      name,
      street,
      number,
      complement,
      state,
      city,
      cep
    })

    return res.status(200).json(recipient)
  }

  async list (req, res) {
    const recipients = await Recipient.findAll()

    return res.json({ recipients })
  }
}

export default new RecipientController()
