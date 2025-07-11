import { Router } from "express";
import {
    getAllLanguages,
    getLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage
} from "../controllers/language.controllers.js";
import languages from "../models/language.model.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const language = await languages.findAll();
        res.json(language);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/:id', getLanguageById);
router.post('/', createLanguage);
router.put('/:id', updateLanguage);
router.delete('/:id', deleteLanguage);

export default router;