import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '40px 0 0'
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeFilter({
    setSelected,
    label
}) {
  let min = 1890;
  let max = 2020;

  const classes = useStyles();
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelected(newValue);
  };

  return (
    <div className={classes.root}>
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            aria-labelledby={label + '-label'}
            id={label}
            getAriaValueText={valuetext}
            min={min}
            max={max}
        />
        <InputLabel id={label + '-label'}>{label}</InputLabel>
    </div>
  );
}