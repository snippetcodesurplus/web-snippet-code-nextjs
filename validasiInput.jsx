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

  /* fungsi ini untuk user hanya bisa input alphabet */
  const handleInputNama = (e) => {
      const inputValue = e.target.value;
      const filteredValue = inputValue.replace(
          /[^a-zA-Z\s']/g, ''
      );
      e.target.value = filteredValue;
  }
  /* Akhir fungsi input alphabet */
  
  return (
    <div style={{
      padding : '8px';
    }}>
      <TextField
        label="Hanya Angka"
        variant="outlined"
        onInput={handleInputHanyaAngka}
      />
      <TextField
        label="Hanya Alphabet"
        variant="outlined"
        onInput={handleInputNama}
      />
    </div>
    
  )
}

export default LoginForm
