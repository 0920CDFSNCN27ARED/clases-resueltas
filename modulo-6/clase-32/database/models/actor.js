module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        "Actor",
        {
            firstName: DataTypes.STRING(500),
            lastName: DataTypes.STRING(500),
            rating: DataTypes.DECIMAL,
            profilePic: DataTypes.STRING,
        },
        {}
    );

    Actor.associate = ({ Movie }) => {
        Actor.belongsToMany(Movie, {
            through: "actor_movie",
        });
    };

    return Actor;
};
