import { styled, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGitlab } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled('footer')(() => ({
  width: '100%',
  height: '180px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1e88e5',
  color: '#fff',
  flexDirection: 'column',
}));

const SocialMedia = styled('div')(() => ({
  display: 'flex',
  gap: '10px',
  margin: '20px 0',
}));

const DivFontAwesomeIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'white',
  [theme.breakpoints.down('md')]: {
    width: '45px',
    height: '45px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '55px',
    height: '55px',
  },
}));

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  margin: '0 10px',
  color: '#1e88e5',
  cursor: 'pointer',
  transition: 'color 0.3s',
  ":hover": {
    color: '#1565c0',
    transform: 'scale(1.1)',
    transition: 'transform 0.5s',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
}));

const Link = styled('a')(() => ({
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer',
  borderRadius: '50%',
}));

const Footer = () => {
  return (
    <StyledFooter>
      <SocialMedia>
        <Link href="https://www.linkedin.com/in/dagson1/" target="_blank">
          <DivFontAwesomeIcon>
            <StyledFontAwesomeIcon icon={faLinkedin} />
          </DivFontAwesomeIcon>
        </Link>
        <Link href="https://gitlab.com/Dags0n" target="_blank">
          <DivFontAwesomeIcon>
            <StyledFontAwesomeIcon icon={faGitlab} />
          </DivFontAwesomeIcon>
        </Link>
        <Link href="https://github.com/Dags0n" target="_blank">
          <DivFontAwesomeIcon>
            <Link><StyledFontAwesomeIcon icon={faGithub} /></Link>
          </DivFontAwesomeIcon>
        </Link>
      </SocialMedia>
      <Typography>&copy; 2024 - Created by Dagson Gabriel</Typography>
    </StyledFooter>
  );
}

export default Footer;