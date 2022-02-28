import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
      marginBottom: 15,
      width: '100%',
      textAlign: 'left'
    }
  });

function Filter({
    items,
    label,
    setSelected,
    selected
}) {

    const handleChange = (event) => {
        const { value } = event.target;
        setSelected(value);
    };

    const classes = useStyles();

    return (
        <FormControl className={classes.root}>
            <InputLabel id={label + '-label'}>{label}</InputLabel>
            <Select
                value={selected ?? ''}
                onChange={handleChange}
                input={<Input/>}
                labelId={label + '-label'}
                id={label}
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