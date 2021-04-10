import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    root: {
      marginBottom: 15,
      width: '100%'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
      chip: {
      margin: 2,
    },
  });

function Filter({
    items,
    label,
    setSelected,
    selected
}) {

    const handleChangeMultiple = (event) => {
        const { value } = event.target;
        setSelected(value);
    };

    const classes = useStyles();

    return (
        <FormControl className={classes.root}>
            <InputLabel id={label + '-label'}>{label}</InputLabel>
            <Select
                multiple
                value={selected ?? []}
                onChange={handleChangeMultiple}
                input={<Input/>}
                labelId={label + '-label'}
                id={label}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip}/>
                    ))}
                    </div>
                )}
                >
                {items.map((item, index) => (
                    <MenuItem key={`${item}-${index}`} value={item}>
                    {item}
                    </MenuItem>
                ))}
            </Select>
      </FormControl>
    )
}


export default Filter;