import express from 'express'

import HelloController from './app/controllers/HelloController'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

import authMiddleware from './app/middlewares/auth'
import RecipientController from './app/controllers/RecipientController'

const router = express.Router()

router.get('/hello', authMiddleware, HelloController)
router.post('/sessions', SessionController.store)

router.get('/users', authMiddleware, UserController.list)
router.post('/users', authMiddleware, UserController.store)

router.post('/recipients', RecipientController.store)
router.get('/recipients', authMiddleware, RecipientController.list)

export default router
