import React, {useState} from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DatePickerValue() {
  const [value, setValue] = useState(dayjs());


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/*  Use Theme Style to overide API blue and red color on the border*/}
        <DateTimePicker
          label="Completion Date" 
          disablePast
          color="success"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
    </LocalizationProvider>
  );
}