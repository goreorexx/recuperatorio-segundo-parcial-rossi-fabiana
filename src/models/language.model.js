import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const models = sequelize.define("Language", {
    name: { type: DataTypes.STRING, allowNull: false },
    paradigm: { type: DataTypes.STRING, allowNull: false },
    release_year: { type: DataTypes.INTEGER, allownull: false }
})

export default models;