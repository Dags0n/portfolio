import * as React from 'react';
import { Box, Drawer, Divider, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}><HighlightOffIcon onClick={toggleDrawer(false)}/></Typography>
      
      <a href='#home' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} gap='20px' onClick={toggleDrawer(false)}><HomeIcon />Home</Typography></a>
      <a href='#projects' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} gap='20px' onClick={toggleDrawer(false)}><HomeIcon />Projects</Typography></a>
      <a href='#skills' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} gap='20px' onClick={toggleDrawer(false)}><HomeIcon />Skills</Typography></a>
      <a href='#services' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} gap='20px' onClick={toggleDrawer(false)}><HomeIcon />Services</Typography></a>

      <Divider />
      
      <a href='#about' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} gap='20px' onClick={toggleDrawer(false)}><InfoIcon />About</Typography></a>
      <a href='#contact' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} gap='20px' onClick={toggleDrawer(false)}><MailIcon />Contact</Typography></a>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)}/>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{"& .MuiDrawer-paper": { backgroundColor: "white" }}}>
        {DrawerList}
      </Drawer>
    </div>
  );
}