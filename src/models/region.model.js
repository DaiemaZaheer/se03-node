const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Region extends Model {
    }

    Region.init({
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

    }, {
        sequelize,
        modelName: 'region',
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        paranoid: true,
    });

    return Region;
};
