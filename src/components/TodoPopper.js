import React from 'react';
import FormTodo from './FormTodo'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "black",
    width: 400,
  },
}));

const TodoPopper = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div  className="popoverTodoBtn">
            <Badge badgeContent={window.localStorage.getItem('todoCount')} color="error">
        <PlaylistAddCheckIcon color="primary" type="button" onClick={handleOpen} />
      </Badge>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div  className={classes.paper}>
            <FormTodo/>
          </div>
        </Fade>
      </Modal>
        </div>
    );
};

export default TodoPopper;