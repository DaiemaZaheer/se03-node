const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class State extends Model {
    }

    State.init({
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
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        countryId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'state',
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        paranoid: true,
    });

    return State;
};
