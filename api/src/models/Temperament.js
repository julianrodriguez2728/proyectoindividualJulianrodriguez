const { DataTypes } = require('sequelize');


module.exports = (sequelize)=>{
    sequelize.define("Temperament",{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
          type: DataTypes.STRING,
     
        }
      },{
        timestamps: false
      });
}
