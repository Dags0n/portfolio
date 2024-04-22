import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Info, Mail } from '@mui/icons-material';
import Aboutme from './../../assets/aboutme.jpg';

const About = () => {

  const StyledDiv = styled('div')(({ theme }) => ({
    
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
      <StyledDiv id="about">
        <Container>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" sx={{textAlign: 'center', margin: { xs: '30px 0 0 0', md: '70px 0 30px' }}}>ABOUT <span style={{ color: '#1e88e5' }}>ME</span></Typography>
          </Grid>
          <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item md={6}>
              <Box position="relative">
                <Box position="relative" textAlign="center">
                  <StyledImg src={ Aboutme }/>
                </Box>
              </Box>
              <Grid container sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent='center'>
                <Grid item xs={12} md={5} display="flex" justifyContent="center" pt="30px">
                  <Button variant='contained' color='secondary' href='https://www.linkedin.com/in/dagson1/' target='_blank'>
                    <Info />
                    <Typography color="primary.contrastText" pl='10px'>Saiba mais</Typography>
                  </Button>
                </Grid>
                <Grid item xs={12} md={5} display="flex" justifyContent="center" pt="30px" >
                  <Button variant='contained' color='secondary' href='#contact'>
                    <Mail />
                    <Typography color="primary.contrastText" pl='10px'>Contact</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{textAlign: 'center'}} mt='20px'>Software Engineer (soon)</Typography>
              <Typography variant="h6" sx={{textAlign: 'justify', margin: '30px'}}><p>My name is Dagson Gabriel, and I am a full-stack programmer. Currently, I am majoring in Information Technology at the Federal University of Rio Grande do Norte (UFRN), where I have the opportunity to enhance my knowledge in various areas, from complex algorithms to the development of robust systems.</p></Typography>
              <Typography variant="h6" sx={{textAlign: 'justify', margin: '30px', display: {xs: 'none', md: 'block'}}}>
              <p>My interest in technology started early, and it was at the Federal Institute of Education, Science, and Technology of Rio Grande do Norte (IFRN) where I acquired a solid foundation as a computer technician. Since then, I have been exploring and refining my skills as a programmer, focusing especially on web development.</p></Typography>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display:{  xs: 'flex', md: 'none' } }} justifyContent='center' m='0 0 20px'>
              <Button variant='contained' color='primary' href='https://www.linkedin.com/in/dagson1/' target='_blank'>
                <Info />
                <Typography color="primary.contrastText" pl='10px'>Saiba mais</Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </StyledDiv>
    </>
  );
}

export default About;
