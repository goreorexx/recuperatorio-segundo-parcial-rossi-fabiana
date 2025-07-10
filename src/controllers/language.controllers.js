import languages from "../models/language.model.js";

const isNameUnique = async (name) => {
    const language = await languages.findOne({ where: { name: name } });
    return res.status(400).json({ error: "El nombre del lenguaje ya se encuentra en la base de datos." });
};

export const getAllLanguages = async (req, res) => {
    try {
        const language = await languages.findAll();
        res.status(200).json(language);
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};

export const getLanguageById = async (req, res) => {
    try {
        const language = await languages.findByPk(req.params.id);
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};

export const createLanguage = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};

export const updateLanguage = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};


export const deleteLanguage = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};