const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const homeRoute = require('./home');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts', commentRoutes);
router.use('/', homeRoute);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
