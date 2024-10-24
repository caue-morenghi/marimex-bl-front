import {
  Box,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { Outlet } from "react-router-dom";
import { ListItemLink } from "./ListItemLink";

export const MenuLateral = () => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        onClose={toggleDrawerOpen}
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        anchor="left"
      >
        <Box
          marginTop={theme.spacing(8)}
          width={theme.spacing(12)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            padding: "2em 0",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <ListItemLink label="Mais" icon="more_horiz" onClick={toggleDrawerOpen} to="/usuarios" />
          <ListItemLink label="Busca" icon="search" onClick={toggleDrawerOpen} to="/" />
          <ListItemLink label="Navios" icon="directions_boat" onClick={toggleDrawerOpen} to="/usuarios" />
          <ListItemLink label="Conciliação de Bl's" icon="storefront" onClick={toggleDrawerOpen} to="/conciliacaobls" />
          <ListItemLink label="Mapa" icon="map" onClick={toggleDrawerOpen} to="/usuarios" />

          {/* <ToggleThemeButton /> */}
        </Box>
      </Drawer>

      <Box marginLeft={smDown ? 0 : theme.spacing(12)} marginTop={theme.spacing(8)}>
        <Outlet />
      </Box>
    </>
  );
};