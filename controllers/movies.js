import { v4 as uuidv4 } from "uuid";

let movies = [];

export const getMovies = (req, res) => {
    //   res.send("Hello movies");
    //   res.send(movies);
    res.send(movies);
}

export const getMovie = (req, res) => {
    const foundMovie = movies.find((movie) => movie.id === req.params.id);
    // res.send( `the id ${req.params.id}` );
    res.send(foundMovie);
  //   console.log(req.params.id);
    //   const { id } = req.params;
    //   const foundMovie = movies.find((movie) => movie.id === id);
    //   res.send(foundMovie);
}

// router.post("/", (req, res) => {
//   //   console.log("Post request received");
//   //uiidv4(); // to generate unique id
//   const movie = { ...req.body, id: uuidv4() };
//   movies.push(movie);
//   res.send(`${movie.Name} added to the database`);
//   //   console.log(req.body);
//   //   res.send("Message post sucessfully");
// });

export const createMovie = (req, res) => {
    const movie = { ...req.body, id: uuidv4() };
    movies.push(movie);
    res.send(`${movie.Name} added to the database`);
};

export const deleteMovies =(req, res) => {
    //Write the logic to delete a movie from the array
    movies = movies.filter((movie) => movie.id !== req.params.id);
    res.send(`Movie with the id ${req.params.id} deleted from the database`);
};
export const updateMovie = (req,res)=>{
    const foundMovie = movies.find((movie) => movie.id === req.params.id);
    const{Name, director ,genre,releaseYear} = req.body;
    if(Name) foundMovie.Name = Name; //update the movie name
    if(director) foundMovie.director = director; //update the director
    if(genre) foundMovie.genre = genre; //update the genre
    if (releaseYear) foundMovie.releaseYear = releaseYear; //update the release year
    res.send(`Movie with the id ${req.params.id} has been updated`);
}