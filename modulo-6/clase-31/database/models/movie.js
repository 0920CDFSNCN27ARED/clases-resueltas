module.exports = (sequelize, DataTypes) => {
    const movie = sequelize.define(
        "Movie",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(500),
            },
            rating: {
                type: DataTypes.DECIMAL,
            },
            awards: {
                type: DataTypes.INTEGER,
            },
        },
        {}
    );

    return movie;
};
