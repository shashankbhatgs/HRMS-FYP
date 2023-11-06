import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BugReportIcon from '@mui/icons-material/BugReport';
import UpdateIcon from '@mui/icons-material/Update'; 
import TextField from '@mui/material/TextField';

import Sidebar from './Sidebar';

const drawerWidth = 320;

function StaffStatus(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List style={{ }}>
        <Avatar alt="Remy Sharp" src="public/profile.png" sx={{ width: 190, height: 170, paddingLeft: 2, 
          paddingBottom: 6, border: '1px solid lightgray', marginLeft: 7, marginTop: 5
          }}/>
        <Typography style={{textAlign: 'center', }} variant="h6">
          Dr M S Maheeshan
        </Typography>
        <Typography style={{textAlign: 'center'}}>
          Associate Professor
        </Typography>
        <Typography style={{textAlign: 'center'}}>
        Depratment of Information 
        </Typography>
        <Typography style={{textAlign: 'center'}}>
          Science and Engineering
        </Typography>
      </List>
      
      <List>
          <ListItemButton style={{ backgroundColor: '#208270'}} component="a" href="#simple-list">
            <Person2Icon />
            <ListItemText primary="Profile" />
          </ListItemButton>
          <Divider/>

          <ListItemButton style={{ backgroundColor: '#208270'}} component="a" href="#simple-list">
            <LogoutIcon />
            <ListItemText primary="Logout" />
          </ListItemButton>
          <Divider/>

          <ListItemButton style={{ backgroundColor: '#208270'}} component="a" href="#simple-list">
            <UpdateIcon/>
            <ListItemText primary="Status" />
          </ListItemButton>
          <Divider/>

          <ListItemButton style={{ backgroundColor: '#208270'}} component="a" href="#simple-list">
            <NotificationsIcon />
            <ListItemText primary="Notifications" />
          </ListItemButton>
          <Divider/>

          <ListItemButton style={{ backgroundColor: '#208270'}} component="a" href="#simple-list">
            <BugReportIcon/>
            <ListItemText primary="Report Bugs" />
          </ListItemButton>
          <Divider/>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>   
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Typography variant='h3'>
          Excellence Progress Spectrum
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-evenly', margin: 35}}>
            <Typography>
            A comprehensive evaluation system meticulously designed to assess and compare the achievements and performance of faculty members within their respective departments. This scale is built upon a multifaceted approach, utilizing inputs derived from a variety of sources, including student feedback, research contributions, consultancy projects, examination department data, and more, as outlined in PART-A, B, C, and accompanying annexures. Through this systematic approach, the 'Excellence Progress Spectrum' quantifies and categorizes faculty members' accomplishments and contributions, placing them within distinct color zones - Green, Yellow, 
            and Red - allowing for an objective and meaningful assessment of their promotion potential.
            </Typography>
        </div><div style={{ margin: 35}}>
        <Typography>Your Standing on this scale:- </Typography>
        </div>
      </Box>
    </Box>
  );
}


export default StaffStatus;