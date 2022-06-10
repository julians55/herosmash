import { getMovies } from "../../services";
import { useEffect, useState } from "react";
import {Card, Grid} from '@mui/material';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { Typography, CardMedia, CardContent } from "@mui/material";
import PropTypes from'prop-types';
import './MovieCard.css';
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
      marginRight: "40px",
      width: "350px"
    },
    button: {
        marginLeft: "32%",
    }
    
  });
function MovieCard({title, elo, image}){
    
      const classes = useStyles();
  return(
    
    <Card sx={{ maxWidth: 345 }}>
     
        <CardMedia
            className={classes.media}
          component="img"
          image={image}
          alt="Pelicula"
        />
    </Card>

  )
}

MovieCard.propTypes = {
    title: PropTypes.string,
    elo: PropTypes.number
}
MovieCard.defaultProps  = {
    title: '',
    elo: 0
}

export default MovieCard;
