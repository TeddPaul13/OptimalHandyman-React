const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class userReviews extends Model {}

userReviews.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true,
    required: false,
  },
  suburb: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  serviceprovided: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  dateofservice: {
    type: DataTypes.DATE,
    allowNull: false,
    required: true,
  },

  review: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
},
{
    sequelize: sequelizeInstance,
    modelName: "userReviews",
    timestamps: true,
    freezeTableName: true,
  });

module.exports = userReviews;
