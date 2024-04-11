import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectService({onServiceSelectionChange, name}) {
  const [service, setService] = useState('');

  const handleChange = (event) => {
    setService(event.target.value);
// calling onchange function and passing it a prop to review form component.
    if (onServiceSelectionChange){
      onServiceSelectionChange(event)
    }
  };

  return (
      <FormControl fullWidth>
        {/* Fix Label crossed by border line */}
        <InputLabel id="select-service-label" color='success'>Service Category</InputLabel>
        <Select
          labelId="select-service-id"
          name={name}
          id="select-service"
          color='success'
          required
          value={service}
          label="service"
          onChange={handleChange}
        >
          <MenuItem value={'furniture assembly'}>Furniture Assembly</MenuItem>
          <MenuItem value={'wallmounting'}>Wall Mounting</MenuItem>
          <MenuItem value={'rubbish removal'}>Rubbish Removal    </MenuItem>
          <MenuItem value={'general maintenance'}>General Maintenance</MenuItem>
        </Select>
      </FormControl>
    // </Box>
  );
}