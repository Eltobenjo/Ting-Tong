import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    fontSize: "1.5em",
    textAlign:"center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 500,
    fontSize: "1.5em",
    
  },
 

  
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [city, setCity] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="selector">
      <div className="search-title">
        <Button className={classes.button} onClick={handleOpen}>
          <h1>Choose Your Location</h1>
        </Button>
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city}
          onChange={handleChange}
        >
          <div className="menu">
            <MenuItem value={city}>
              <a href="/Berlin">
                <h3>Berlin</h3>
              </a>
            </MenuItem>
            <MenuItem value={city}>
              <a href="/Frankfurt">
                <h3>Frankfurt</h3>
              </a>
            </MenuItem>
            <MenuItem value={city}>
              <a href="/Munich">
                <h3>Munich</h3>
              </a>
            </MenuItem>
            <MenuItem value={city}>
              <a href="/Dresden">
                <h3>Dresden</h3>
              </a>
            </MenuItem>
          </div>
        </Select>
      </FormControl>
      <div className='wms'>
        <img src="../Images/WorldMapSpices.jpg" alt=" WMS"></img>
      </div>
    </div>
  );
}
