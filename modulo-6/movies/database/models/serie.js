"use strict";
module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: DataTypes.STRING,
            genreId: DataTypes.NUMBER,
            releaseDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
        },
        {}
    );
    Serie.associate = (models) => {
        Serie.belongsTo(models.Genre, {
            as: "genre",
        });
        Serie.hasMany(models.Season, {
            as: "seasons",
        });
    };
    return Serie;
};
