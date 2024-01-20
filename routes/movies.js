import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createMovie ,getMovies ,getMovie,deleteMovies,updateMovie} from "../controllers/movies.js";
//import { readFileSync } from "fs";

const router = express.Router();
// const movies = JSON.parse(readFileSync("./movies.json", "utf-8"));

//get all movies
router.get("/", getMovies);


//get movies by id
router.get("/:id", getMovie);


//the post method
router.post("/", createMovie);


//delete method 
router.delete("/:id", deleteMovies);

// update the movies with the especific method
router.patch("/:id",updateMovie);

export default router;
