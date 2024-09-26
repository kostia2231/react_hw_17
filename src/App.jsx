import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: white;
  margin-top: 20px;
  padding: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

function App() {
  const [mode, setMode] = useState("light");

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <div>
        <span>
          <Typography>
            Using {mode === "dark" ? "Dark Theme" : "Light Theme"}
          </Typography>
        </span>
        <StyledButton
          onClick={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {mode === "light" ? "change to dark" : "change to light"}
        </StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
