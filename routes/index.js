const router = require('express').Router();
const apiRoutes = require('./api');
const myPostRoutes = require('./api/myPostRoutes');

router.use('/', apiRoutes);
router.use('/myPosts', myPostRoutes);

module.exports = router;
