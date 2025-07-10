import sequelize from "../recuperatorio-segundo-parcial/src/config/database.js";

const db = async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log("Servidor conectado a la base de datos correctamente.");
        await sequelize.sync();
    } catch (error) {
        console.error("No se pudo conectar a la base de datos.",error);
    };
};

export default db;