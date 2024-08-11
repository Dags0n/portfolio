import * as React from 'react';
import { Box, Drawer, Divider, Typography } from '@mui/material';
import { 
  Mail, Menu, HighlightOff, Home, Info, ReceiptLong, Psychology, Engineering, WorkHistory 
} from '@mui/icons-material';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToDiv = (id: string): React.MouseEventHandler<HTMLAnchorElement> => {
    return (event) => {
      event.preventDefault();
      const element = document.getElementById(id);
      if (element){
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}><HighlightOff onClick={toggleDrawer(false)}/></Typography>

      <a href='#home' onClick={scrollToDiv("home")} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Home sx={{ marginRight: '20px' }} />Home</Typography></a>

      <a href='#about' onClick={scrollToDiv("about")} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Info sx={{ marginRight: '20px' }} />About me</Typography></a>

      <a href='#experience' onClick={scrollToDiv("experience")} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><WorkHistory sx={{ marginRight: '20px' }} />Experience</Typography></a>

      <a href='#projects' onClick={scrollToDiv("projects")} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><ReceiptLong sx={{ marginRight: '20px' }} />Projects</Typography></a>

      <a href='#skills' onClick={scrollToDiv("skills")} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Psychology sx={{ marginRight: '20px' }} />Skills</Typography></a>

      <a href='#services' onClick={scrollToDiv("services")} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Engineering sx={{ marginRight: '20px' }} />Services</Typography></a>

      <Divider />
      
      <a href='#contact' onClick={scrollToDiv("contact")} style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Mail sx={{ marginRight: '20px' }} />Contact</Typography></a>
    </Box>
  );

  return (
    <div>
      <Menu onClick={toggleDrawer(true)}/>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{"& .MuiDrawer-paper": { backgroundColor: "white" }}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}