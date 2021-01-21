module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
        "Genre",
        {
            name: DataTypes.STRING(500),
        },
        {}
    );

    return Genre;
};
