const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class City extends Model {
    }

    City.init({
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stateId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'city',
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        paranoid: true,
    });

    return City;
};
