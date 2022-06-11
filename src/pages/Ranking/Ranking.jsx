import { useState, useEffect } from 'react';
import  {getMovies, updateMovie, getRanking}  from '../../services';
import RankingComponent from '../../components/Ranking/Ranking';
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
function Ranking() {
  const classes = useStyles();

  const [movies, setMovies] = useState([{title:'Cargando'},{title:'Cargando'}]);
  const [movie1, setMovie1] = useState(null);
  const [movie2, setMovie2] = useState(null);
  const [reload, setReload] = useState(true);
  const showMovies = async () => {
    const data = await getRanking();
    setMovies(data);
    setMovie1(data[0]);
    setMovie2(data[1]);
  };
  useEffect(() => {
    showMovies();
  }, []);
  
  return(
    <><div className='container'>
      <Header />
      <div className='row'>
        <Typography variant='h4'>RANKING</Typography>
      </div>
      <div className='rankingcard'>
        {movies.map((movie) => (
          <div><RankingComponent
            title={movie.title}
            elo={movie.elo}
            image={movie.image}
            posicion={"Posicion: "+(movies.indexOf(movie)+1)} /></div>
        ))}
      </div>
    </div></>
  )
}



export default Ranking;
