import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import style from '../../style.css';
export default function Header() {
  return (
      <AppBar sx={{backgroundColor:"#A51C30", alignItems:"left", height: 70}} position="fixed" >
       
          {/*Inside the IconButton, we 
           can render various icons*/}
          
            {/*This is a simple Menu 
             Icon wrapped in Icon */}
          
         
          {/* The Typography component applies 
           default font weights and sizes */}
          <div className="header">
          <span><a href='/'>HOME  </a>
          <a href='/ranking'>  RANKING</a></span>
          <Typography variant="h3" 
            component="div" sx={{ fontWeight: 500, marginLeft:'35.5%', marginTop:'432' }}>
            HEROSMASH
          </Typography></div>
          
        
      </AppBar>
  );
}