import React, { useState } from "react";
//Componentes
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

//Componentes Layout
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//Iconos
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

//Theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

//Colores
import { indigo, pink } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    h2: {
      color: "blue",
    },
  },
  palette: {
    primary: {
      main: indigo[400],
    },
    secondary: {
      main: pink[900],
    },
  },
});

const Form = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignContent="center"
        style={{ border: "1px solid black", padding: 20, marginTop: 20 }}>
        <Grid item xs={12} md={6}>
          <TextField
            type="text"
            label="Un texto"
            placeholder="Un texto"
            variant="filled"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField type="date" variant="filled" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <CheckBox
                checked={checked}
                icon={<CheckCircleOutlineTwoToneIcon />}
                checkedIcon={<CheckCircleTwoToneIcon />}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label="Aceptar terminos y condiciones"
            style={{ width: "50%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const Tema = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography componente="h6" variant="h2">
        Texto que simula ser un h2
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ fontSize: 24, margin: "1rem" }}
        startIcon={<SaveIcon />}
        endIcon={<SaveIcon />}>
        Botón
      </Button>
    </ThemeProvider>
  );
};

const MaterialUI = () => {
  return (
    <div>
      <h2>Materia UI</h2>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ fontSize: 24, margin: "1rem" }}
        startIcon={<SaveIcon />}
        endIcon={<SaveIcon />}>
        Botón
      </Button>
      <Tema />
      <h2>Formularios</h2>
      <Form />
    </div>
  );
};

export default MaterialUI;
