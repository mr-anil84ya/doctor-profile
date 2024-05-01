import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Accordion, AccordionDetails, Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Fade, Grid, Link, Paper, Tab, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MapIcon from '@mui/icons-material/Map';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ReviewsIcon from '@mui/icons-material/Reviews';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import UpdateIcon from '@mui/icons-material/Update';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Body1() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    return (
        <div>
            <Grid container>
                <Grid xs={12} sm={12} md={4} lg={4}>
                    <Card sx={{ maxWidth: '100%', m: '15px 45px 15px 45px', p: 2 }}>

                        <h2>Book Appointment</h2>
                        {/* <Divider/> */}

                        <Button variant='contained'>Book Digital</Button>&nbsp;<Button variant='contained'>Book Digital</Button>
                        <p>Choose Date</p>

                        <div style={{ margin: 10 }}></div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <span><ArrowBackIosIcon /></span>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '80px',
                            }}>
                                <p>Mon</p>
                                <p>1</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '80px',
                            }}>
                                <p>Tues</p>
                                <p>2</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '80px',
                            }}>
                                <p>Wed</p>
                                <p>3</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '80px',
                            }}>
                                <p>Thus</p>
                                <p>4</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '80px',
                            }}>
                                <p>Fri</p>
                                <p>5</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '80px',
                            }}>
                                <p>Sat</p>
                                <p>6</p>
                            </div>
                            <span><ArrowForwardIosIcon/></span>
                        </div><br/>
                        <p>Slots Available</p>
                        <div style={{ margin: 10 }}></div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <span><ArrowBackIosIcon /></span>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '50px',
                            }}>
                                <p>9:00 PM</p>
                               
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '50px',
                            }}>
                                <p>9:00 PM</p>
                               
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '50px',
                            }}>
                                <p>9:00 PM</p>
                               
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                border: '1px solid blue',
                                borderRadius:15,
                                width: '50px',
                                height: '50px',
                            }}>
                                <p>9:00 PM</p>
                               
                            </div>
                            
                            <span><ArrowForwardIosIcon/></span>
                        </div><br/>



                        <TextField fullWidth label="Name" id="fullWidth" placeholder='Name' size='small' />
                        <div style={{ margin: 10 }}></div>
                        <TextField fullWidth label="Email" id="fullWidth" placeholder='Email' size='small' />
                        <div style={{ margin: 10 }}></div>
                        <TextField fullWidth label="Message" id="fullWidth" placeholder='Meassage' rows={10} />
                        <div style={{ margin: 10 }}></div>
                        <Button variant='contained' fullWidth>Send</Button>

                    </Card>
                    <Card sx={{ maxWidth: '100%', m: '15px 45px 15px 45px', p: 2 }}>

                        <h3>Rate Now</h3>
                        <p>Rate your experiance</p>
                        <p><StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon /></p>
                        <Divider />

                        <div style={{ margin: 10 }}></div>

                        <TextField fullWidth label="Message" id="fullWidth" rows={10} />
                        <div style={{ margin: 10 }}></div>
                        <Button variant='contained' fullWidth>Send</Button>

                    </Card>
                </Grid>
                <Grid xs={12} sm={12} md={8} lg={8}>
                    <Card sx={{ maxWidth: '100%', m: '15px 45px 15px 45px' }}>
                        <CardContent>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab label="Overview" value="1" />
                                            <Tab label="Services" value="2" />
                                            <Tab label="Address" value="3" />
                                            <Tab label="Overview" value="4" />
                                            <Tab label="Services" value="5" />
                                            <Tab label="Address" value="6" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%' }}>
                                            <p style={{ fontWeight: 600, fontSize: 20 }}>Dr. Monika Singh</p>
                                            <p style={{ fontWeight: 400, fontSize: 15, color: 'black' }}>The Smart Home Automation System is a cutting-edge project aimed at revolutionizing the way people interact with their homes. Leveraging advanced technologies such as Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML), the system offers seamless control and monitoring of various home devices and appliances</p>
                                        </div>

                                    </TabPanel>
                                    <TabPanel value="2">
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%' }}>
                                            <p style={{ fontWeight: 600, fontSize: 20 }}>Er. Monika Singh</p>
                                            <p style={{ fontWeight: 400, fontSize: 15, color: 'black' }}>The Smart Home Automation System is a cutting-edge project aimed at revolutionizing the way people interact with their homes. Leveraging advanced technologies such as Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML), the system offers seamless control and monitoring of various home devices and appliances</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="3">
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%' }}>
                                            <p style={{ fontWeight: 600, fontSize: 20 }}>Mr. Monika Singh</p>
                                            <p style={{ fontWeight: 400, fontSize: 15, color: 'black' }}>The Smart Home Automation System is a cutting-edge project aimed at revolutionizing the way people interact with their homes. Leveraging advanced technologies such as Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML), the system offers seamless control and monitoring of various home devices and appliances</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="4">
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%' }}>
                                            <p style={{ fontWeight: 600, fontSize: 20 }}>Monika Singh</p>
                                            <p style={{ fontWeight: 400, fontSize: 15, color: 'black' }}>The Smart Home Automation System is a cutting-edge project aimed at revolutionizing the way people interact with their homes. Leveraging advanced technologies such as Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML), the system offers seamless control and monitoring of various home devices and appliances</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="5">
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%' }}>
                                            <p style={{ fontWeight: 600, fontSize: 20 }}>Mrs. Monika Singh</p>
                                            <p style={{ fontWeight: 400, fontSize: 15, color: 'black' }}>The Smart Home Automation System is a cutting-edge project aimed at revolutionizing the way people interact with their homes. Leveraging advanced technologies such as Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML), the system offers seamless control and monitoring of various home devices and appliances</p>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="6">
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%' }}>
                                            <p style={{ fontWeight: 600, fontSize: 20 }}>Dr. Monika Singh</p>
                                            <p style={{ fontWeight: 400, fontSize: 15, color: 'black' }}>The Smart Home Automation System is a cutting-edge project aimed at revolutionizing the way people interact with their homes. Leveraging advanced technologies such as Internet of Things (IoT), artificial intelligence (AI), and machine learning (ML), the system offers seamless control and monitoring of various home devices and appliances</p>
                                        </div>
                                    </TabPanel>
                                </TabContext>
                            </Box>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', lineHeight: '100%' }}>
                                    {/* <p style={{ fontSize: '20px', fontWeight: 600 }}><LocalHospitalIcon />Services</p> */}
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <LocalHospitalIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                        <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Services</Typography>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'start', border: '1px solid gray', width: '100%', borderRadius: 5 }}>
                                        &nbsp;<p style={{ marginRight: 'auto' }}>Chronic Dease Management</p><p style={{ marginLeft: 'auto' }}><Link href="#">Get Start</Link></p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'start', border: '1px solid gray', width: '100%', borderRadius: 5, marginTop: 5 }}>
                                        &nbsp;<p style={{ marginRight: 'auto' }}>Immunization</p><p style={{ marginLeft: 'auto' }}><Link>Get Start</Link></p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'start', border: '1px solid gray', width: '100%', borderRadius: 5, marginTop: 5 }}>
                                        &nbsp;<p style={{ marginRight: 'auto' }}>Mental health support</p><p><Link style={{ marginLeft: 'auto' }}>Get Start</Link></p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'start', border: '1px solid gray', width: '100%', borderRadius: 5, marginTop: 5 }}>
                                        &nbsp;<p style={{ marginRight: 'auto' }}>New Born Care</p><p><Link style={{ marginLeft: 'auto' }}>Get Start</Link></p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'start', border: '1px solid gray', width: '100%', borderRadius: 5, marginTop: 5 }}>
                                        &nbsp;<p style={{ marginRight: 'auto' }}>Telemedicine services</p><p><Link style={{ marginLeft: 'auto' }}>Get Start</Link></p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'start', border: '1px solid gray', width: '100%', borderRadius: 5, marginTop: 5 }}>
                                        &nbsp;<p style={{ marginRight: 'auto' }}>Parental Education</p><p><Link style={{ marginLeft: 'auto' }}>Get Start</Link></p>
                                    </div>

                                </div>

                            </Box>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box>
                                <Grid container>

                                    <Grid xs={12} sm={12} md={12} lg={8}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%', width: '100%' }}>

                                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <MapIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                                    <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Map</Typography>
                                                </div>
                                                {/* <p style={{ fontSize: '20px', fontWeight: 600 }}><MapIcon />Map</p> */}
                                                <iframe style={{ borderRadius: 10, border: 'none' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.600343543632!2d77.356851790969!3d28.580268354235546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5914972d4f9%3A0x6cd57b6692dee49c!2sSector%2051%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714561014766!5m2!1sen!2sin" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>

                                        </div>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={4} lg={4}>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%' }}>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <LocationOnIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                                <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Location</Typography>

                                            </div>
                                            <p>Noida Sector 51 Hosiyarpur</p>

                                        </div>
                                    </Grid>

                                </Grid>

                            </Box>
                        </CardContent>
                        <Divider /><br />
                        <CardContent>
                            <Box>
                                <Grid container>

                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', lineHeight: '100%', width: '100%' }}>

                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <AccessTimeFilledIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                                    <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Availability</Typography>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowX: 'auto', width: '100%' }}>
                                                <Button variant="contained" sx={{ borderRadius: 5 }}>Monday</Button>&nbsp;
                                                <Button variant="contained" sx={{ borderRadius: 5 }}>Tuesday</Button>&nbsp;
                                                <Button variant="contained" sx={{ borderRadius: 5 }}>Wednesday</Button>&nbsp;
                                                <Button variant="contained" sx={{ borderRadius: 5 }}>Thusday</Button>&nbsp;
                                                <Button variant="contained" sx={{ borderRadius: 5 }}>Friday</Button>&nbsp;
                                                <Button variant="contained" sx={{ borderRadius: 5 }}>Satureday</Button>&nbsp;
                                                <Button variant="contained" sx={{ borderRadius: 5 }}>Sunday</Button>&nbsp;
                                            </div><br />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflowX: 'auto', width: '100%' }}>
                                                <Button variant="outlined" sx={{ borderRadius: 5 }}>Monday</Button>&nbsp;
                                                <Button variant="outlined" sx={{ borderRadius: 5 }}>Tuesday</Button>&nbsp;
                                                <Button variant="outlined" sx={{ borderRadius: 5 }}>Wednesday</Button>&nbsp;
                                                <Button variant="outlined" sx={{ borderRadius: 5 }}>Thusday</Button>&nbsp;
                                                <Button variant="outlined" sx={{ borderRadius: 5 }}>Friday</Button>&nbsp;
                                                <Button variant="outlined" sx={{ borderRadius: 5 }}>Satureday</Button>&nbsp;
                                                <Button variant="outlined" sx={{ borderRadius: 5 }}>Sunday</Button>&nbsp;
                                            </div>

                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box>
                                <Grid container>

                                    <Grid xs={12} sm={12} md={12} lg={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <ReviewsIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                                <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Reviews</Typography>
                                            </div>
                                        </div><br />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', lineHeight: '100%', width: '100%' }}>


                                            <div >
                                                {/* <Button variant="contained" sx={{borderRadius:5}}>Monday</Button>&nbsp; */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
                                                    <Typography sx={{ fontSize: 15, fontWeight: 'bold', margin: 0 }}>&nbsp;Anil Chaurasiya</Typography>
                                                </div>

                                            </div><br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ fontSize: 15, margin: 0 }}>Rating Given 5 <StarBorderIcon sx={{ fontSize: 15, marginRight: '5px' }} /></Typography>

                                            </div>


                                        </div>
                                        <p>Remember that while Figma is a great tool for designing user interfaces, implementing designs in code may require adjustments and optimizations to ensure a seamless user experience. </p>
                                        <Divider /><br />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', lineHeight: '100%', width: '100%' }}>


                                            <div >
                                                {/* <Button variant="contained" sx={{borderRadius:5}}>Monday</Button>&nbsp; */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
                                                    <Typography sx={{ fontSize: 15, fontWeight: 'bold', margin: 0 }}>&nbsp;Anil Chaurasiya</Typography>
                                                </div>

                                            </div><br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ fontSize: 15, margin: 0 }}>Rating Given 5 <StarBorderIcon sx={{ fontSize: 15, marginRight: '5px' }} /></Typography>

                                            </div>


                                        </div>
                                        <p>Remember that while Figma is a great tool for designing user interfaces, implementing designs in code may require adjustments and optimizations to ensure a seamless user experience. </p>
                                        <Divider /><br />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', lineHeight: '100%', width: '100%' }}>


                                            <div >
                                                {/* <Button variant="contained" sx={{borderRadius:5}}>Monday</Button>&nbsp; */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
                                                    <Typography sx={{ fontSize: 15, fontWeight: 'bold', margin: 0 }}>&nbsp;Anil Chaurasiya</Typography>
                                                </div>

                                            </div><br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ fontSize: 15, margin: 0 }}>Rating Given 5 <StarBorderIcon sx={{ fontSize: 15, marginRight: '5px' }} /></Typography>

                                            </div>


                                        </div>
                                        <p>Remember that while Figma is a great tool for designing user interfaces, implementing designs in code may require adjustments and optimizations to ensure a seamless user experience. </p>
                                        <Divider /><br />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', lineHeight: '100%', width: '100%' }}>


                                            <div >
                                                {/* <Button variant="contained" sx={{borderRadius:5}}>Monday</Button>&nbsp; */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
                                                    <Typography sx={{ fontSize: 15, fontWeight: 'bold', margin: 0 }}>&nbsp;Anil Chaurasiya</Typography>
                                                </div>

                                            </div><br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ fontSize: 15, margin: 0 }}>Rating Given 5 <StarBorderIcon sx={{ fontSize: 15, marginRight: '5px' }} /></Typography>

                                            </div>


                                        </div>
                                        <p>Remember that while Figma is a great tool for designing user interfaces, implementing designs in code may require adjustments and optimizations to ensure a seamless user experience. </p>
                                        <Divider /><br />
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', lineHeight: '100%', width: '100%' }}>


                                            <div >
                                                {/* <Button variant="contained" sx={{borderRadius:5}}>Monday</Button>&nbsp; */}
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
                                                    <Typography sx={{ fontSize: 15, fontWeight: 'bold', margin: 0 }}>&nbsp;Anil Chaurasiya</Typography>
                                                </div>

                                            </div><br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography sx={{ fontSize: 15, margin: 0 }}>Rating Given 5 <StarBorderIcon sx={{ fontSize: 15, marginRight: '5px' }} /></Typography>

                                            </div>


                                        </div>
                                        <p>Remember that while Figma is a great tool for designing user interfaces, implementing designs in code may require adjustments and optimizations to ensure a seamless user experience. </p>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box>
                                <Grid container>
                                    <Grid xs={12} sm={12} md={12} lg={12} sx={{ padding: 1 }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <UpdateIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                                <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Update</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={3} lg={3} sx={{ padding: 1 }}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        species, ranging across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={3} lg={3} sx={{ padding: 1 }}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
                                                        species, ranging across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={3} lg={3} sx={{ padding: 1 }}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
                                                        species, ranging across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={3} lg={3} sx={{ padding: 1 }}>
                                        <Card>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Lizard
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {/* Lizards are a widespread group of squamate reptiles, with over 6,000 */}
                                                        species, ranging across all continents except Antarctica
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                        <Divider />
                        <br />
                        <CardContent>
                            <Box>
                                <Grid container>
                                    <Grid xs={12} sm={12} md={12} lg={12} sx={{ padding: 1 }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <HelpIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                                <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>Any Query</Typography>

                                            </div>

                                        </div>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12} lg={12} sx={{ padding: 1 }}>
                                        <Card>
                                            <div style={{ margin: 10 }}></div>
                                            <TextField fullWidth label="Name" id="fullWidth" placeholder='Name' size='small' />
                                            <div style={{ margin: 10 }}></div>
                                            <TextField fullWidth label="Email" id="fullWidth" placeholder='Email' size='small' />
                                            <div style={{ margin: 10 }}></div>
                                            <TextField fullWidth label="Message" id="fullWidth" placeholder='Meassage' rows={10} />
                                            <div style={{ margin: 10 }}></div>
                                            <Button variant='contained' fullWidth>Submit</Button>
                                        </Card>
                                    </Grid>

                                </Grid>
                            </Box>
                        </CardContent>
                        <Divider />
                        <br />
                        <CardContent>
                            <Box>
                                <Grid container>
                                    <Grid xs={12} sm={12} md={12} lg={12} sx={{ padding: 1 }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <HelpIcon sx={{ fontSize: 20, marginRight: '5px' }} />
                                                <Typography sx={{ fontSize: 20, fontWeight: 600, margin: 0 }}>FAQ</Typography>

                                            </div>

                                        </div>
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12} lg={12} sx={{ padding: 1 }}>
                                        <Accordion
                                            expanded={expanded}
                                            onChange={handleExpansion}
                                            slots={{ transition: Fade }}
                                            slotProps={{ transition: { timeout: 400 } }}
                                            sx={{
                                                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <Typography>Custom transition using Fade</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                            >
                                                <Typography>Default transition using Collapse</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                            >
                                                <Typography>Default transition using Collapse</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                            >
                                                <Typography>Default transition using Collapse</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Grid>

                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>
        </div>
    )
}

export default Body1
