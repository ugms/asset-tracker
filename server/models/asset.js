const asset = (sequelize, DataTypes) => {
  const Asset = sequelize.define("asset", {
    chassie: {
      type: DataTypes.STRING
    },
    current_user: {
      type: DataTypes.STRING
    },
    previous_user: {
      type: DataTypes.STRING
    },
    name2: {
      type: DataTypes.STRING
    },
    manufacturer: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    os: {
      type: DataTypes.STRING
    },
    serial_number: {
      type: DataTypes.STRING
    },
    purchase_date: {
      type: DataTypes.DATE
    },
    notes: {
      type: DataTypes.STRING
    }
  });
  return Asset;
};
export default asset;
