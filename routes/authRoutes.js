
const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

/**
 * @swagger
 * /signup:
 *  get:
 *      summary: Request for signup page
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Bad Request. Error in Retrieving products
 */
router.get('/signup', authController.signup_get);


/**
 * @swagger
 * /signup:
 *  post:
 *      summary: Request for posting data for signup
 *      tags: [User]
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                             email:
 *                                  type: string
 *                             password:
 *                                  type: string
 *      parameters:
 *            - in: body
 *              name: Signup
 *              required: true
 *              description: Enter email and password 
 *      responses:
 *          '200':
 *              description: Successfully signed up
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
 *              description: Sign Up failed
 */
router.post('/signup', authController.signup_post);

/**
 * @swagger
 * /login:
 *  get:
 *      summary: Request to get login page
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Bad Request. Error in Retrieving products
 */
router.get('/login', authController.login_get);


/**
 * @swagger
 * /login:
 *  post:
 *      summary: Request to login account
 *      tags: [User]
 *      requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                             email:
 *                                  type: string
 *                             password:
 *                                  type: string
 *      parameters:
 *            - in: body
 *              name: Login
 *              required: true
 *              description: Enter email and password 
 *      responses:
 *          '200':
 *              description: Successfully logged in
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
 *              description: Login failed
 */
router.post('/login', authController.login_post);

/**
 * @swagger
 * /logout:
 *  get:
 *      summary: Request to log out
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Bad Request. Error in Retrieving products
 */
router.get('/logout', authController.logout_get)

module.exports = router;
