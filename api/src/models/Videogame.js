const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull:false
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    released:{
      type: DataTypes.STRING,
    },
    rating:{
      type: DataTypes.STRING,
    },
    platform:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    genrs:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    }

  });
  sequelize.define('genre', {
   
    name:{
      type:DataTypes.STRING
    }
  })
 
};
