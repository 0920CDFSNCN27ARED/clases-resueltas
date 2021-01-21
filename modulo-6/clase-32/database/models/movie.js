module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        "Movie",
        {
            title: DataTypes.STRING(500),
            awards: DataTypes.INTEGER,
            revenue: DataTypes.STRING,
            length: DataTypes.INTEGER(10).UNSIGNED,
            coverArt: DataTypes.STRING,
        },
        {}
    );

    return Movie;
};
