import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPlug, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, Container, Grid, Typography, styled } from '@mui/material';

const StyledDiv = styled('div')(() => ({
  minHeight: '100vh',
  display: 'flex',
}));

const IconDiv = styled('div')(() => ({
  width: '65px',
  height: '65px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: '#1e88e5',
  color: '#fff',
  marginBottom: '10px',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '200px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '350px',
    height: '250px',
    margin: '0 25px',
  },
  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  ":hover": {
    transform: 'scale(1.05)',
    transition: 'transform 0.5s',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
}));

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive web applications using technologies like React, and Node.js.",
    icon: faLaptopCode
  },
  {
    title: "API Development",
    description: "Creating RESTful and GraphQL APIs, integrating third-party services, and securing data access.",
    icon: faPlug
  },
  {
    title: "Database Design",
    description: "Design and optimization of databases like MySQL, PostgreSQL, and MongoDB.",
    icon: faDatabase
  },
  {
    title: "Optimization and Maintenance",
    description: "Continuous monitoring and tuning for maximum stability and speed.",
    icon: faTools
  }
];

const Services = () => {
  return (
    <StyledDiv id='services'>
      <Container>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" sx={{ textAlign: 'center', padding: '20px 0 20px', m: { xs: '40px 0 30px 0', md: '70px 0 30px' }}}>
            SER<span style={{ color: '#1e88e5' }}>VICES</span>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            {services.map((service, index) => (
              <Grid key={index} item xs={12} sm={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: index%2 === 0 ? 'flex-end' : 'flex-start' }, mb: '40px' }}>
                <StyledCard>
                  <CardContent sx={{ display: 'block', justifyItems: 'center' }}>
                    <IconDiv>
                      <FontAwesomeIcon icon={service.icon} style={{ width: '30px', height: '30px'}}/>
                    </IconDiv>
                    <Typography variant="body1" component="div" fontWeight={900} fontFamily="Roboto, sans-serif" textAlign="center" sx={{ m: { xs: '5px 0 5px 0', md: '15px 0 15px 0'} }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" textAlign="center" sx={{ width: { md: '200px' }, wordWrap: 'break-word' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </Container>
    </StyledDiv>
  );
}

export default Services;