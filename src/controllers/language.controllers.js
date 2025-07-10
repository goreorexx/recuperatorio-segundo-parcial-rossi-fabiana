import languages from "../models/language.model.js";

const isNameUnique = async (name) => {
    const language = await languages.findOne({ where: { name: name } });
    return character === null;
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
        if (!language){
            return res.status(404).json({ error: "El id no se encuentra en la base de datos." });
        };
        const language = await languages.findByPk(req.params.id);
        res.status(200).json(language);
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};

export const createLanguage = async (req, res) => {
    try {
        const { name, paradigm, release_year } = req.body;
        if (!name || !paradigm || !release_year){
            return res.status(400).json({ error: "Faltan datos obligatorios." });
        };
        if (!(await isNameUnique(name))){
            return res.status(400).json({ error: "El nombre del lenguaje ya existe en la base de datos." });
        };
        const language = await languages.create({ name, paradigm, release_year });
        res.status(201).json(language);
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};

export const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, paradigm, release_year } = req.body;
        const language = await languages.findByPk(id);
        if (!name || !paradigm || !release_year){
            return res.status(400).json({ error: "Faltan datos obligatorios." });
        };
        if (!(await isNameUnique(name))){
            return res.status(400).json({ error: "El nombre del lenguaje ya existe en la base de datos." });
        };
        if (!language){
            return res.status(404).json({ error: "El id no se encuentra en la base de datos." });
        };
        await languages.update(req.body);
        res.status(200).json({ message: "El lenguaje se actualizó con éxito:" },language);
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};


export const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        const language = await languages.findByPk(id);
        if (!language){
            return res.status(404).json({ error: "No existe ese id en la base de datos." });
        }
        await languages.destroy();
        res.status(200).json({ message: "El personaje se eliminó con éxito." });
    } catch (error) {
        res.status(500).json({ error: "Error interno en el servidor." });
        console.log("-------------------------------------------------");
        console.error(error);
    };
};