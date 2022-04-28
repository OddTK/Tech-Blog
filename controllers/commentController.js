const {
    User,
    Comment
} = require('../models');

module.exports = {
    createComment: async(req, res) => {
        if (!req.session.user) {
            res.redirect("/");
        }
        const { text, postId } = req.body;
        if (!text) {
            return res.status(400).json({ error: "You must provide comment text." });
        }
        try {
            const comment = await Comment.create({
                text,
                postId,
                userId: req.session.user.id,
            });
            res.json(comment);
        } catch (error) {
            res.json(error);
        }
    },
    getComments: async(req, res) => {
        try {
            if (!req.session.user) {
                res.redirect('/');
            }
            const { postId } = req.body;
            console.log(postId);
            const commentData = await Comment.findAll({
                where: {
                    postId,
                },
                include: [{
                    model: User,
                }],
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            const comments = commentData.map(comment => comment.get({ plain: true }));
            return res.render('comments', {
                comments,
                loggedInUser: req.session.user || null,
            });
        } catch (error) {
            res.json(error);
        }
    },
};
