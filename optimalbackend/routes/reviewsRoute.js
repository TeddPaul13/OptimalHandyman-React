const express = require("express");
const router = express.Router();
const Controllers = require("../controllers")

router.post("/create", (req, res) =>{
    Controllers.reviewsController.createReview(req.body, res);
});
router.get("/getreview", (req, res) => {
    Controllers.reviewsController.getReviews(res)
})
module.exports = router;