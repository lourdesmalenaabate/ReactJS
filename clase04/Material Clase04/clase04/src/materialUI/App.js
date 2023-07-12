import React, { useState } from "react";
//Fuente
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//Componentes - https://mui.com/material-ui/api/accordion/
import Button from "@mui/material/Button";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

//Layout
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//Iconos - https://mui.com/material-ui/material-icons
import SaveIcon from "@mui/icons-material/Save";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

//Theme - https://mui.com/material-ui/customization/theming/
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

//Colors - https://mui.com/material-ui/customization/color/
import { red, green } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    h1: {
      color: "blue",
    },
  },
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
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
        <Grid item xs={12} md={6} style={{ padding: 10 }}>
          <TextField
            variant="filled"
            type="text"
            label="Un Texto"
            placeholder="Un texto"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 10 }}>
          <TextField variant="filled" type="date" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} style={{ padding: 10 }} alignSelf="flex-end">
          <FormControlLabel
            control={
              <CheckBox
                checked={checked}
                icon={<CheckCircleOutlineTwoToneIcon />}
                checkedIcon={<CheckCircleTwoToneIcon />}
                onChange={(e) => setChecked(e.target.checked)}
                inputProps={{ "aria-label": "secoondary checkbox" }}
              />
            }
            label="Testing Checkbox"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Typography variant="h1" component={"h2"}>
          Elemento h2 que se ve como h1
        </Typography>
        <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          variant="contained"
          color="secondary"
          size="large"
          style={{ fontSize: 24, margin: "1rem" }}>
          Un Boton
        </Button>
        <Form />
      </Container>
    </ThemeProvider>
  );
};

export default App;
