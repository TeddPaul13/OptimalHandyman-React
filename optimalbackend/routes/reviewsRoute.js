const express = require("express");
const router = express.Router();
const Controllers = require("../controllers")

const addCorsHeaders = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update this with your frontend URL in production
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
};

// Apply CORS middleware to all routes in this router
router.use(addCorsHeaders);

router.post("/create", (req, res) =>{
    Controllers.reviewsController.createReview(req.body, res);
});
router.get("/getreview", (req, res) => {
    Controllers.reviewsController.getReviews(res)
})
module.exports = router;