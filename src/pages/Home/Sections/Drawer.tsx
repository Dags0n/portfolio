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

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}><HighlightOff onClick={toggleDrawer(false)}/></Typography>

      <a href='#home' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Home sx={{ marginRight: '20px' }} />Home</Typography></a>

      <a href='#about' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Info sx={{ marginRight: '20px' }} />About me</Typography></a>

      <a href='#experience' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><WorkHistory sx={{ marginRight: '20px' }} />Experience</Typography></a>

      <a href='#projects' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><ReceiptLong sx={{ marginRight: '20px' }} />Projects</Typography></a>

      <a href='#skills' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Psychology sx={{ marginRight: '20px' }} />Skills</Typography></a>

      <a href='#services' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Engineering sx={{ marginRight: '20px' }} />Services</Typography></a>

      <Divider />
      
      <a href='#contact' style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ display: 'flex', justifyContent: 'left', padding: '20px 25px' }} onClick={toggleDrawer(false)}><Mail sx={{ marginRight: '20px' }} />Contact</Typography></a>
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