import { Container, Grid, styled, Typography } from "@mui/material";

const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    minHeight: '100vh',
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: '115vh',
  },
}));

const FormContact = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
}));

const DivContact = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '500px',
  },
}));

const InputContact = styled('input')(() => ({
  width: '100%',
  height: '50px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontSize: '1rem',
}));

const ButtonContactSubmit = styled('button')(() => ({
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontSize: '1rem',
  fontWeight: 900,
  backgroundColor: '#1e88e5',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  ":hover": {
    backgroundColor: '#1565c0',
    transform: 'scale(1.05)',
    transition: 'transform 0.5s',
  },
}));

const TextAreaContact = styled('textarea')(() => ({
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontSize: '1rem',
  resize: 'none',
}));

const SpanContact = styled('span')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'inline',
  },
}));

const handleSubmit = () => {
  const spanError = document.getElementById('error');
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const subject = (document.getElementById('subject') as HTMLInputElement).value;
  const message = (document.getElementById('message') as HTMLInputElement).value;
  if (name === '' || email === '' || subject === '' || message === '') {
    spanError!.textContent = 'All fields are required';
  } else {
    spanError!.textContent = 'This is not working yet';
  }
}

const Contact = () => {
  return (
    <StyledDiv id="contact">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1" sx={{ textAlign: 'center', padding: '20px 0 20px', m: { xs: '40px 0 30px 0', md: '70px 0 30px' }}}>
              <span style={{ color: '#1e88e5' }}>CON</span>TACT
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="div" sx={{ textAlign: 'center', padding: '0 0 20px', m: { xs: '-10px 0 10px 0', md: '0 0 10px' }, color: 'gray' }}>
              <SpanContact>Have a question?</SpanContact> Send me a message!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormContact>
              <DivContact>
                <InputContact type="text" id="name" name="name" placeholder="Name" required />
              </DivContact>
              <DivContact>
                <InputContact type="email" id="email" name="email" placeholder="Email" required />
              </DivContact>
              <DivContact>
                <InputContact type="text" id="subject" name="subject" placeholder="Subject" required />
              </DivContact>
              <DivContact>
                <TextAreaContact id="message" name="message" rows={6} placeholder="Message" required />
              </DivContact>
              <DivContact>
                <ButtonContactSubmit type="button" onClick={handleSubmit}>SEND</ButtonContactSubmit>
              </DivContact>
              <span id="error" style={{ color: 'red', marginBottom: '50px' }}></span>
            </FormContact>
          </Grid>
        </Grid>
      </Container>
    </StyledDiv>
  );
}

export default Contact;