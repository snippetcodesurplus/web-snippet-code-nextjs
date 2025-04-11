/* disini saya menggunakan library material UI*/

import React from 'react'
import { TextField } from "@mui/material";

const LoginForm = () => {
  
  /* const dibawah ini berfungsi untuk user hanya bisa input angka */
  const handleInputHanyaAngka = (e) => {
        // Get the input value
        const inputValue = e.target.value;
        const filteredValue = inputValue.replace(
            /[^0-9]/g, ''
        );

        e.target.value = filteredValue;
        // Set the filtered value as the input value
    };
  /* Akhir code const fungsi user hanya bisa input angka */
  
  return (
    <TextField
      label="Hanya Angka"
      variant="outlined"
      onInput={handleInputHanyaAngka}
    />
  )
}

export default LoginForm
