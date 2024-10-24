import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../data/assets/18-removebg-preview.png';
import { Typography } from '@mui/material';

type HeaderProps = {
    titulo: string;
}

function Header({titulo}: HeaderProps) {
  const theme = useTheme();
//   const smDown = useMediaQuery(theme.breakpoints.down('sm'));

//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        width: '100%',
        height: theme.spacing(8),
        backgroundColor: theme.palette.background.default,
        padding: "0 1em"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <img src={logo} alt='logo' height={theme.spacing(5)}/>
          <Typography sx={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '1.5rem' }}>{titulo}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;