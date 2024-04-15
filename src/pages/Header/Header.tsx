import { Box, Button, Container, Grid, styled, Typography } from '@mui/material';
import Perfil from './../../assets/eu.png';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

const Header = () => {

  const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }));

  const StyledImg = styled('img')(({ theme }) => ({
    width: '75%',
    [theme.breakpoints.down('md')]: {
      paddingTop: '30px',
    },
  }));

  return (
    <>
      <StyledDiv>
        <Container maxWidth="lg">
          <Grid container>
            
            <Grid item xs={12} md={8}>
              <Typography color="primary.contrastText" variant="h4" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: '0px', md: '50px' } }}>Hello World!</Typography>
              <Typography color="primary.contrastText" variant="h1" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: '0px', md: '50px' } }}>I'm Dagson</Typography>
              <Typography color="primary.contrastText" variant="h3" sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { xs: '0px', md: '50px' } }} pt="10px">Software Developer</Typography>
              <Grid container >
                <Grid item xs={12} md={5} display="flex" justifyContent="center" pt="30px">
                  <Button variant='contained' color='secondary'>
                    <DownloadIcon />
                    <Typography color="primary.contrastText" pl='10px'>Download CV</Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} md={5} display={{ xs: 'none', md: 'block' }} pt="30px" >
                  <Button variant='contained' color='secondary'>
                    <LinkedinIcon />
                    <Typography color="primary.contrastText" pl='10px'>Linkedin</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>  
            <Grid item xs={12} md={4}>
                <Box position="relative">
                  <Box position="relative" textAlign="center">
                    <StyledImg src={Perfil} />
                  </Box>
                </Box>
            </Grid>
          </Grid>          
        </Container>
      </StyledDiv>
    </>
  );
}

export default Header;
