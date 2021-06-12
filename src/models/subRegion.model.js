const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class SubRegion extends Model {
    }

    SubRegion.init({
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
        regionId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },

    }, {
        sequelize,
        modelName: 'sub_region',
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        paranoid: true,
    });

    return SubRegion;
};
