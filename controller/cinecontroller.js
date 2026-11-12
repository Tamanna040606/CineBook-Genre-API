import { genres } from "../data/store.js";


export const getAllGenres = (req, res) => {
    res.status(200).json({
        success: true,
        count: genres.length,
        data: genres
    });
};



export const getGenreById = (req, res) => {
    const id = Number(req.params.id);

    const genre = genres.find((g) => g.id === id);

    if (!genre) {
        return res.status(404).json({
            success: false,
            message: "Genre not found"
        });
    }

    res.status(200).json({
        success: true,
        data: genre
    });
};



export const addGenre = (req, res) => {
    const { name, classics } = req.body;

    if (!name || !Array.isArray(classics)) {
        return res.status(400).json({
            success: false,
            message: "Name and classics array are required"
        });
    }

    const newId =
        genres.length > 0
            ? Math.max(...genres.map((g) => g.id)) + 1
            : 1;

    const newGenre = {
        id: newId,
        name,
        classics
    };

    genres.push(newGenre);

    res.status(201).json({
        success: true,
        message: "Genre added successfully",
        data: newGenre
    });
};