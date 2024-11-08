import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Experience = () => {

  const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
  }));

  return (
      <>
        <StyledDiv id="projects">
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1" sx={{textAlign: 'center', paddingTop: '30px', margin: { xs: '40px 0 30px 0', md: '70px 0 30px' }, alignSelf: 'flex-start'}}>
                  PRO<span style={{ color: '#fff' }}>JECTS</span>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'center', mt: '125px', color: '#fff' }}>
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
