import * as React from 'react';
import { AppBar, Avatar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import TemporaryDrawer from './Drawer';
import Perfil from './../../../assets/eu.png';
import Logo from './../../../assets/dg.png';

const pages = ['home', 'about', 'experience', 'projects', 'skills', 'services', 'contact'];

interface ElevationScrollProps {
  children: React.ReactElement;
  window?: () => Window;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
    style: { 
      visibility: trigger ? 'visible' : 'hidden',
      transition: 'visibility 0.5s, opacity 0.5s linear',
      opacity: trigger ? 1 : 0,
    },
  });
}

function ResponsiveAppBar() {
  return (
    <ElevationScroll>
      <AppBar position='fixed'>
        <Container maxWidth="xl" style={{ backgroundColor: 'inherit' }}>
          <Toolbar disableGutters>
            <Avatar alt="Dagson Gabriel" src={ Logo } sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DAGSON
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>  
              <TemporaryDrawer />
            </Box>
            <Avatar alt="Dagson Gabriel" src={ Logo } sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DAGSON
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    const element = document.getElementById(page);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', '&:hover': { color: 'black' } }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Avatar alt="Dagson Gabriel" src={ Perfil } />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

export default ResponsiveAppBar;
