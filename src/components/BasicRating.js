import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";

export default function BasicRating() {
  const [value, setValue] = React.useState(1);
  console.log(value);
  return (
    <Box
      sx={{
        '& > legend': { mt: 4 },
      }}
    >
      <input type="text" id="selected_rate" value={value} hidden/>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
