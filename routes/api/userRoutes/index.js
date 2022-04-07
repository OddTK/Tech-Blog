const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    login,
    logout,
} = require('../../../controllers/UserController');

router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/login')
    .post(login);

router.route('/register')
    .post(createUser);

router.route('/:userId')
    .get(getUserById)

router.route('/logout')
    .post(logout)

module.exports = router;
