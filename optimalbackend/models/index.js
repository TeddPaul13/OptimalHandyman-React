const UserReviews = require("./reviews");

async function init() {
  await Promise.all([
    UserReviews.sync()
   ] );
}
init();

module.exports = {
  UserReviews
};
