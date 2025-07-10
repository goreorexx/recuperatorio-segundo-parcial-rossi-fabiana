import { Router } from "express";
import {
    getAllLanguages,
    getLanguageById,
    createLanguage,
    updateLanguage,
    deleteLanguage
} from "../controllers/language.controllers.js";

const router = Router();

router.get('/api/languages', getAllLanguages);
router.get('/api/languages/:id', getLanguageById);
router.post('/api/languages', createLanguage);
router.put('/api/languages/:id', updateLanguage);
router.delete('/api/languages/:id', deleteLanguage);