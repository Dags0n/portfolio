import { Box, Button, Container, Grid, styled, Typography } from '@mui/material';
import Perfil from './../../../assets/eu.png';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

const Header = () => {

  const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
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
      <StyledDiv id='home'>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={5}>
              <Box position="relative">
                <Box position="relative" textAlign="center">
                  <StyledImg src={Perfil} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography color="primary.contrastText" variant="h4" sx={{ textAlign: { xs: 'center', md: 'center' }, marginLeft: { xs: '0px', md: '50px' } }}>Hello World!</Typography>
              <Typography color="primary.contrastText" variant="h1" sx={{ textAlign: { xs: 'center', md: 'center' }, marginLeft: { xs: '0px', md: '50px' } }}>I'm Dagson</Typography>
              <Typography color="primary.contrastText" variant="h3" sx={{ textAlign: { xs: 'center', md: 'center' }, marginLeft: { xs: '0px', md: '50px' } }} pt="10px">Software Developer</Typography>
            </Grid>  
            <Grid container sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Grid item xs={12} sm={5}>
                <Grid container spacing={2} justifyContent="center" pt='30px'>
                  <Grid item sx={{ pb: { xs: '30px', md: '0' } }}>
                    <Button variant='contained' color='secondary' href={require('./../../../assets/curriculo-dagson.pdf')} download="curriculo-dagson.pdf">
                      <DownloadIcon />
                      <Typography color="primary.contrastText" pl='10px'>Download CV</Typography>
                    </Button>
                  </Grid>
                  <Grid item display={{ xs: 'none', md: 'block' }}>
                    <Button variant='contained' color='secondary' href='https://www.linkedin.com/in/dagson1/' target='_blank'>
                      <LinkedinIcon />
                      <Typography color="primary.contrastText" pl='10px'>Linkedin</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledDiv>
    </>
  );
}

export default Header;
