const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();


/**
 * @swagger
 * /user/profile:
 *  get:
 *      summary: Request for getting profile page
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: A successful response. User profile received
 *          '400':
 *              description: Bad Request. Error in getting user profile
 */
userRouter.get('/', userController.get_profile);

/**
 * @swagger
 * /user/profile:
 *  post:
 *      summary: Request for adding additional details in profile
 *      tags: [User]
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                             name:
 *                                  type: string
 *                             address:
 *                                  type: object
 *                                  
 *      parameters:
 *            - in: body
 *              name: Complete profile
 *              required: true
 *              description: Enter additaional details 
 *      responses:
 *          '200':
 *              description: Profile complete
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                             email:
 *                                  type: string
 *                             password:
 *                                  type: string
 *          '400':
 *              description: Unable to complete profile
 */
userRouter.post('/', userController.complete_profile);

module.exports = userRouter;