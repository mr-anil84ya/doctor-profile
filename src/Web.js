import React from 'react';
import Nav from './component/Nav';
import Slider from './component/Slider';
import Body1 from './component/Body1';
import Footer from './component/Footer';
import { Divider } from '@mui/material';

function Web() {
  return (
    <>
    <div>
      <Nav />
      <Divider />
      <Slider />
      <Body1 />
      <br/>
      <Footer />
    </div>
    </>
  )
}

export default Web
