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
    items,
    setSelected,
    label
}) {
  const min = items.length ? parseInt(items[0].split('-')[0]) : 1900;
  const max = items.length ? parseInt(items[items.length - 1].split('-')[1]): 2021;

  const classes = useStyles();
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelected(newValue);
  };

  return (
    <div className={classes.root}>
        <InputLabel>{label}</InputLabel>
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={min}
            max={max}
        />
    </div>
  );
}