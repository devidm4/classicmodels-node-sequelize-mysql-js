const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const officesModel = sequelize.define('offices',{
    officecode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    addressline1: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    addressline2: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    country: {	
        type: DataTypes.STRING(50),
        allowNull: false
    },
    postalCode: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    territory: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
},{
    tableName: 'offices',
    timestamps: false
});

module.exports = officesModel;