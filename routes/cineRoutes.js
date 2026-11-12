import express from "express";

import {
    getAllGenres,
    getGenreById,
    addGenre
} from "../controller/cinecontroller.js";

const router = express.Router();



router.get("/", getAllGenres);


router.get("/:id", getGenreById);


router.post("/", addGenre);


export default router;