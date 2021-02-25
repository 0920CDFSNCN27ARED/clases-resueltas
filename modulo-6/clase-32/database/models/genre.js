module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
        "Genre",
        {
            name: DataTypes.STRING(500),
        },
        {}
    );

    Genre.associate = ({ Movie }) => {
        Genre.hasMany(Movie, {
            as: "movies",
        });
    };

    return Genre;
};
