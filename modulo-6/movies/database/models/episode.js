"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define(
        {
            seasonId: DataTypes.INTEGER,
            index: DataTypes.INTEGER,
            title: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Episode",
        }
    );

    Episode.associate = (models) => {
        Episode.belongsTo(models.Season, {
            as: "season",
        });
    };

    return Episode;
};
