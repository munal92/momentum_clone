import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import InfoIcon from '@material-ui/icons/InfoOutlined';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
   
  },
}));


const PopperBtn = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (

      <div className="popoverBtn" >
      <IconButton  aria-describedby={id} variant="contained" color="primary" onClick={handleClick} >
      <InfoIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
        
        <Typography className={classes.typography}>
        <div className="socialMed_cont">
          <a
            
            href="mailto:fatihissf0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i style={{ margin: "1rem" }} className="fas fa-envelope"></i>
          </a>

          


          <a
            
            href="https://www.linkedin.com/in/munal92/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i style={{ margin: "1rem" }} className="fab fa-linkedin"></i>
          </a>
          <a
            
            href="https://github.com/munal92?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i style={{ margin: "1rem" }} className="fab fa-github"></i>
          </a>
        </div>
        </Typography>
      </Popover>
    </div>
    );
};

export default PopperBtn;