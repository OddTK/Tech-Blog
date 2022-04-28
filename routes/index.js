const router = require('express').Router();
const apiRoutes = require('./api');
const myPostRoutes = require('./api/myPostRoutes');
const { getComments, createComment } = require('../controllers/commentController');

router.use('/', apiRoutes);
router.use('/myPosts', myPostRoutes);
router.route('/posts/:postId')
    .get(getComments)
    .post(createComment);

module.exports = router;
