module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Brew', {
    beans: {
      type: DataTypes.STRING,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coffeeGrams: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    waterGrams: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  })
}