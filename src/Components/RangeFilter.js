import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '80%',
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
  const classes = useStyles();
  const [value, setValue] = React.useState([1925, 2021]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelected(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {label}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={items.length ? parseInt(items[0].split('-')[0]) : 1900}
        max={items.length ? parseInt(items[items.length - 1].split('-')[1]): 2021}
      />
    </div>
  );
}