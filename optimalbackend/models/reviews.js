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
  // TO DO 
  // Change datatype to date and test the input coming from frontend
  dateofservice: {
    type: DataTypes.STRING,
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
