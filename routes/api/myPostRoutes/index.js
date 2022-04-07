const router = require('express').Router();
const {
    createPost,
    editPost,
    createPostView,
    getMyPosts,
    getSinglePost,
    deletePost,
    editPostView,
} = require('../../../controllers/postController');

router.route('/')
    .get(getMyPosts);

router.route('/create')
    .get(createPostView)
    .post(createPost);

router.route('/:postId')
    .get(getSinglePost)
    .delete(deletePost);

router.route('/:postId/edit')
    .put(editPost)
    .get(editPostView);
