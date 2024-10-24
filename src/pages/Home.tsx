import { Box, Typography, useTheme } from "@mui/material";
import Header from "../layout/Header";

export const Home = () => {
  
  const theme = useTheme()

  return (
    <Box minHeight="100vh">
      <Header titulo="Home"/>
      <Typography color={theme.palette.primary.contrastText}></Typography>
    </Box>
  );
};
