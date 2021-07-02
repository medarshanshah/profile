const {Router} = require('express')
const adminController = require('../controllers/adminController')
const { requireAuth } = require('../middleware/authmiddleware')

adminRouter = Router()

/**
 * @swagger
 * /admin/users:
 *  get:
 *      summary: Request for getting profile page
 *      tags: [Admin]
 *      responses:
 *          '200':
 *              description: A successful response. User profile received
 *          '400':
 *              description: Bad Request. Error in getting user profile
 */
adminRouter.get('/users', requireAuth, adminController.get_allUsers)

/**
 * @swagger
 * /admin/carts:
 *  get:
 *      summary: Request for getting profile page
 *      tags: [Admin]
 *      responses:
 *          '200':
 *              description: A successful response. User profile received
 *          '400':
 *              description: Bad Request. Error in getting user profile
 */
adminRouter.get('/carts', requireAuth, adminController.get_allCarts)

/**
 * @swagger
 * /admin/orders:
 *  get:
 *      summary: Request for getting profile page
 *      tags: [Admin]
 *      responses:
 *          '200':
 *              description: A successful response. User profile received
 *          '400':
 *              description: Bad Request. Error in getting user profile
 */
adminRouter.get('/orders', requireAuth, adminController.get_allOrders)

module.exports = adminRouter