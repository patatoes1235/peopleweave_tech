import React from 'react';
import {ChakraProvider, theme,} from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <Routes>
            <Route path="/pg1" element={<Page1 />} />
            <Route path="/pg2" element={<Page2 />} />
            <Route path="/" element={<Page1 />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>

    </>
  );
}

export default App;
