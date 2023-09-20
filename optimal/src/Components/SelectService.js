import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectService() {
  const [service, setService] = useState('');

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
      <FormControl fullWidth>
        {/* Fix Label crossed by border line */}
        <InputLabel id="select-service-label" color='success'>Service Category</InputLabel>
        <Select
          labelId="select-service-id"
          id="select-service"
          color='success'
          required
          value={service}
          label="service"
          onChange={handleChange}
        >
          <MenuItem value={'furniture'}>Furniture Assembly</MenuItem>
          <MenuItem value={'wallmounting'}>Wall Mounting</MenuItem>
          <MenuItem value={'minor'}>Minor Repair and Maintenance</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
    // </Box>
  );
}