const UserReviews = require("./reviews");

async function init() {
  await Promise(
    UserReviews.sync()
      );
}
init();

module.exports = {
  UserReviews
};
