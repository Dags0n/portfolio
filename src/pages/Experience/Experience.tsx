import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import tech from './../../assets/tech.png';
import CustomizedTimeline from './Sections/Timeline';

const Experience = () => {

  const StyledDiv = styled('div')(({ theme }) => ({
    backgroundImage: `url(${tech})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1000px',
    backgroundPosition: 'center',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      backgroundSize: '900px',
    },
  }));

  return (
      <>
        <StyledDiv id="experience">
          <Container>
            <Grid item xs={12}>
              <Typography variant="h3" component="h1" sx={{textAlign: 'center', paddingTop: '50px', margin: { xs: '40px 0 30px 0', md: '70px 0 30px' }}}>E<span style={{ color: '#1e88e5' }}>XP</span>ERIENCE</Typography>
            </Grid>
            <CustomizedTimeline />
          </Container>
        </StyledDiv>
      </>
    );
  }
  
  export default Experience;
