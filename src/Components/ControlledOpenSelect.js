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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width:500,
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
    <div className='selector'>
      <Button className={classes.button} onClick={handleOpen}>Choose Location</Button>
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
          <MenuItem value="">
           
          </MenuItem>
          <MenuItem value={city}>
            <a href="/Berlin">Berlin</a>
          </MenuItem>
          <MenuItem value={city}>
            <a href="/Frankfurt">Frankfurt</a>
          </MenuItem>
          <MenuItem value={city}><a href='/Munich'>Munich</a></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
