import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

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

    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select
                multiple
                value={selected ?? []}
                onChange={handleChangeMultiple}
                input={<Input/>}
                renderValue={(selected) => (
                    <div>
                    {selected.map((value) => (
                        <Chip key={value} label={value}/>
                    ))}
                    </div>
                )}
                >
                {items.map((item, index) => (
                    <MenuItem key={item+index} value={item}>
                    {item}
                    </MenuItem>
                ))}
            </Select>
      </FormControl>
    )
}


export default Filter;