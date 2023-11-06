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
import KeyIcon from '@mui/icons-material/Key';


import Sidebar from './Sidebar';

const drawerWidth = 320;

function Profile(props) {
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
        <Typography variant='h4'>Profile</Typography>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Avatar alt="Remy Sharp" src="public/profile.png" sx={{ width: 70, height: 70, }}/>
            <Button style={{height: 50, width: 100, backgroundColor: '#BFC321'}} variant="contained" href="#update-photo">
              <Typography variant='h7'>Update Photo</Typography>
            </Button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', margin: 20}}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button
                    onClick={() => { 
                    }}
                >
                    Name
                </Button>
              <TextField
                    required
                    label="M S Maheeshan"
                    margin="dense"
                    name="name"
                    // value={""}
                    onChange={""}
                />
            </div>

            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button>
                  Designation
              </Button>
              <TextField
                    required
                    label=""
                    margin="dense"
                    name="designation"
                    onChange={""}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button>
                    Department
              </Button>
              <TextField
                    required
                    label=""
                    margin="dense"
                    name="department"
                    onChange={""}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Button>
                  Date of birth
              </Button>
            <TextField
                  required
                  label="DD/MM/YYYY"
                  margin="dense"
                  name="dob"
                  onChange={""}
              />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button>
                    Date of joining the college
                </Button>
              <TextField
                    required
                    label="DD/MM/YYYY"
                    margin="dense"
                    name="dateofjoiningcollege"
                    onChange={""}
              />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', margin: 20}}> 
            <div style={{display: 'flex', paddingTop: 20, paddingLeft: 20}}>
              <KeyIcon />
              <Typography>Update Password</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button>
                    Current Password
              </Button>
              <TextField
                    required
                    label=""
                    margin="dense"
                    name="currentpassword"
                    onChange={""}
                />
              </div>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Button>
                      New Password
                </Button>
                <TextField
                      required
                      label=""
                      margin="dense"
                      name="newpassword"
                      onChange={""}
                  />
              </div>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Button>
                      Confirm Password
                </Button>
                <TextField
                      required
                      label=""
                      margin="dense"
                      name="confirmpassword"
                      onChange={""}
                  />
              </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}


export default Profile;