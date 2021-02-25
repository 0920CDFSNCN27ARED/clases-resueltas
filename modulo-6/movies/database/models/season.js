"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Season = sequelize.define(
        {
            index: DataTypes.NUMBER,
            releaseDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
        },
        {}
    );
    Season.associate = (models) => {
        Season.belongsTo(models.Serie, {
            as: "serie",
        });
        Season.hasMany(models.Episode, {
            as: "episodes",
        });
    };
    return Season;
};
