import { useEffect } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Biography from './Biography';
import Gallery from './Gallery';
import Contact from './Contact';

const Index = () => {
  useEffect(() => {
    console.log("Components are mounted and rendered");
  }, []);

  return (
    <Router>
      <Box p={4}>
        <Heading mb={4}>James Monroe - Photographer</Heading>
        <Flex mb={4}>
          <NavLink to="/biography" style={{ marginRight: '20px' }}>Biography</NavLink>
          <NavLink to="/gallery" style={{ marginRight: '20px' }}>Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Flex>
        <Routes>
          <Route path="/biography" element={<Biography />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Index;