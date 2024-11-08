import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Experience = () => {

  const StyledDiv = styled('div')(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
  }));

  return (
      <>
        <StyledDiv id="projects">
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1" sx={{textAlign: 'center', paddingTop: '50px', margin: { xs: '40px 0 30px 0', md: '70px 0 30px' }, alignSelf: 'flex-start'}}>
                  <span style={{ color: '#1e88e5' }}>PRO</span>JECTS
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'center', mt: '125px' }}>
                  SOON...
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </StyledDiv>
      </>
    );
  }
  
  export default Experience;
