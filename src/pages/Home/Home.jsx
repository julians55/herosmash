

import { useState, useEffect } from 'react';
import  {getMovies, updateMovie}  from '../../services';
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from '../../components/Header/Header';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import '../../style.css';
const useStyles = makeStyles({
  root: {
     
    maxWidth: 345,
    border: "1px solid",
  padding: "10px",
  boxShadow: "5px 10px ", display: "grid",
  margin: "10px",
  },
  media: {
    height: "450px",
    marginRight: "10px",
    width: "350px"
  },
  button: {
      marginRight: "32%",
  },
  title: {
    marginTop: "-40%",
    
  },
  titleo: {
    marginTop: "60%",
  },
  
});
function Home() {
  const classes = useStyles();

  const [movies, setMovies] = useState([{title:'Cargando'},{title:'Cargando'}]);
  const [movie1, setMovie1] = useState(null);
  const [movie2, setMovie2] = useState(null);
  const [reload, setReload] = useState(true);
  const showMovies = async () => {
    const data = await getMovies();
    setMovies(data);
    setMovie1(data[0]);
    setMovie2(data[1]);
  };
  useEffect(() => {
    showMovies();
  }, []);
  
  const handleUpdate = async () => {
    const data = {
        winner: movie1.movieId,
        loser: movie2.movieId
      }
    
    try{
        const response = await updateMovie(data);
        showMovies();
        console.log(response);
    }catch(error){
        throw new Error(error);
    }
  }
  const handleUpdate2 = async () => {
    const data = {
        loser: movie1.movieId,
        winner: movie2.movieId
      }
    
    try{
        const response = await updateMovie(data);
        showMovies();
        console.log(response);
    }catch(error){
        throw new Error(error);
    }
  }
  return(
    <><div className='container'>
      <Header />
      <div className='row'>
        <Typography variant='h4'>Elige una pelicula!</Typography>
      </div>
      <div className='productscard'>
        {movies.map((movie) => (
          <div><MovieCard
            title={movie.title}
            elo={movie.elo}
            image={movie.image} /></div>
        ))}
      </div>
      <div className='buttonsmovie'>
        <Button className={classes.Button} onClick={handleUpdate}>{movies[0].title}</Button>
        <Button onClick={handleUpdate2}>{movies[1].title}</Button>
      </div>
    </div></>
  )
}



export default Home;
