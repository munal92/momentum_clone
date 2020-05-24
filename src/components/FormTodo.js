import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  textArea: {
    margin: theme.spacing(1),
  },
  checkbx: {
    marginLeft: 15,
    marginTop: 10,
  },

  formControl: {
    margin: theme.spacing(5),
  },
  button: {
    margin: theme.spacing(1),
  },
  resize: {
    fontSize: 25,
  },
}));

const FormTodo = () => {
  const classes = useStyles();
  const [todoData, setTodoData] = useState([
  
  ]);

  const [inputTemp, setInputTemp] = useState({
    input: "",
  });

  const [vibrate, setVibrate] = useState({
    clsName: "",
  });

  useEffect(() => {
    const dta = window.localStorage.getItem("todoData");
    if(dta !== null){
    
      setTodoData(JSON.parse(dta));
    }else{
    
    }
   
  }, []);

  useEffect(() => {
    
      window.localStorage.setItem(
        "todoCount",
        todoData.filter((item) => {
          if (!item.isComplete) {
            return item;
          }
        }).length
      );
  
      window.localStorage.setItem("todoData", JSON.stringify(todoData));
   
   
  });

  const handleInputChange = (e) => {
    setInputTemp({ ...inputTemp, input: e.target.value });
  };
  const handleCheckboxChange = (e) => {
    const a = todoData.map((item) => {
      if (item.todo === e.target.value) {
        return {
          isComplete: item.isComplete ? false : true,
          todo: e.target.value,
        };
      } else return item;
    });

    setTodoData(a);
  };
  const handleSubmitTodo = (e) => {
    e.preventDefault();

    if (inputTemp.input) {
      setTodoData([...todoData, { isComplete: false, todo: inputTemp.input }]);
    } else {
      setVibrate({ clsName: "error" });

      setTimeout(() => {
        setVibrate({ clsName: "" });
        setInputTemp({ ...inputTemp, input: "" });
      }, 1000);
    }

    setInputTemp({ input: "" });
  };

  const handleClearTodo = (e) => {
    e.preventDefault();
    const a = todoData.filter((item) => {
      return item.isComplete !== true;
    });

    setTodoData(a);
  };


  ///////////

  

  return (
    <div className="formCnt">
      <FormGroup>
        <form
          className={vibrate.clsName}
          onSubmit={handleSubmitTodo}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textArea}
            id="standard-basic"
            label="Add a task"
            name="input"
            onChange={handleInputChange}
            value={inputTemp.input}
          />
        </form>

        {(todoData.length > 0 && todoData != null)
          ? todoData.map((item, index) => (
              <FormControlLabel
                className={classes.checkbx}
                key={index}
                control={
                  <Checkbox
                    style={{ color: " #4fce5d" }}
                    value={item.todo}
                    checked={item.isComplete}
                    onChange={handleCheckboxChange}
                  />
                }
                label={<span style={{ fontSize: "1.2rem" }}>{item.todo}</span>}
              />
            ))
          : null}
      </FormGroup>
      <Button
        size="medium"
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={handleClearTodo}
      >
        Clear
      </Button>
      <Button
        variant="contained"
        size="medium"
        style={{ backgroundColor: " #4fce5d", color: "white" }}
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleSubmitTodo}
      >
        Add
      </Button>
    </div>
  );
};

export default FormTodo;
