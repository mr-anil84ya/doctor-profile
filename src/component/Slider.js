import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack, Typography, styled } from '@mui/material'
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Slider() {
  return (
    <div className='row' sx={{p:5}}>
        <div>
        <Card sx={{ maxWidth: '100%',m:'15px 45px 15px 45px' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://img.freepik.com/free-vector/hospital-healthcare-service-sale-banner_23-2150394136.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714176000&semt=ais"
            />
            <CardContent>
            <Box
             sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={"flex-start"} mt={2} sx={{maxWidth:'100%',m:2}}>
                        <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'start', alignItems: 'flex-start',lineHeight:'80%' }}>
                        <Avatar alt="Avatar" src="https://st4.depositphotos.com/7877830/25337/v/380/depositphotos_253374286-stock-illustration-vector-illustration-male-doctor-avatar.jpg" sx={{ width: 150, height: 150, position: 'absolute', top: '45%', left: '20%', transform: 'translate(-50%, -50%)', zIndex: 1 }} />
                        <p style={{fontWeight:600,fontSize:20}}>Dr. Monika Singh</p>
                        <p>21k Bookings | 5 <StarBorderIcon sx={{fontSize:'medium'}}/>| 2K Reviews </p>
                        <p><LocalHospitalIcon sx={{fontSize:'medium',color:'blue'}} />Working in sadhbhawna Hospital <LocationOnIcon sx={{fontSize:'medium',color:'blue'}} />At Gautam Budhh Nagar</p>
                        <p><InstagramIcon />&nbsp;&nbsp;<WhatsAppIcon />&nbsp;&nbsp;<YouTubeIcon /></p>
                        </div>
                         &nbsp;
                        <Button variant="contained">Follow</Button>
                        </Stack>
                    </Grid>
                    {/* <Grid xs={6} md={4}>
                    <Item><Button variant="contained">Follow</Button></Item>
                    </Grid> */}
                </Grid>
                </Box>
            </CardContent>
         
            </Card>
        </div>
      
    </div>
  )
}

export default Slider
