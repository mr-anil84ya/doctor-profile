import { Divider, Grid, Link } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div>
        <Grid container>
            <Grid xs={12} md={2} lg={2} sm={4}>
                <h3>Popular Links</h3>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Packer and Movers in Delhi</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Web Designers in Pune</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Pest control in mumbai</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Wedding Catters</a></p>
            </Grid>
            <Grid xs={12} md={2} lg={2} sm={4}>
                <h3>Carporate</h3>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>About</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Contact</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Privacy And policy</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Terms and condition</a></p>
            </Grid>
            <Grid xs={12} md={2} lg={2} sm={4}>
                <h3>Business</h3>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Register as Business</a></p>

            </Grid>
            <Grid xs={12} md={2} lg={2} sm={4}>
                <h3>Careers</h3>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>View Job Openings</a></p>
                
            </Grid>
            <Grid xs={12} md={2} lg={2} sm={4}>
                <h3>Blogs</h3>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Add Blog</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Update Blog</a></p>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}>View Blog</a></p>
                
            </Grid>
            <Grid xs={12} md={2} lg={2} sm={4}>
                <h3>Follow Us</h3>
                <p><a href="#" style={{textDecoration:'none',color:'black',fontSize:'15px'}}><InstagramIcon /> <YouTubeIcon /> <WhatsAppIcon /></a></p>
                
            </Grid>
           
            
        </Grid>
        <hr/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
       
            <Grid container justifyContent="center">
            
                <Grid  item><p style={{margin:'5'}}>© 2024 All rights reserved.</p></Grid>
            </Grid>
            </div>
    </div>
  )
}

export default Footer
