const router = require('express').Router();
const {
    createPost,
    getAllPosts,
    getSinglePost,
    createPostView
} = require('../../../controllers/postController');

router.route('/')
    .get(getAllPosts);

router.route('/create')
    .get(createPostView)
    .post(createPost);

router.route('/:postId')
    .get(getSinglePost);

module.exports = router;
