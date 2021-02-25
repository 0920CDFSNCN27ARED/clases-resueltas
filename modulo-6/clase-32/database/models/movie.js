module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        "Movie",
        {
            title: DataTypes.STRING(500),
            awards: DataTypes.INTEGER,
            revenue: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
            length: DataTypes.INTEGER(10).UNSIGNED,
            coverArt: DataTypes.STRING,
        },
        {}
    );

    Movie.ACTOR_LIST_ALIAS = "actors";
    Movie.GENRE_ALIAS = "genre";

    Movie.associate = ({ Actor, Genre }) => {
        Movie.belongsToMany(Actor, {
            through: "actor_movie",
            as: Movie.ACTOR_LIST_ALIAS,
        });
        Movie.belongsTo(Genre, {
            as: Movie.GENRE_ALIAS,
        });
    };

    return Movie;
};
