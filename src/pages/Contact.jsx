import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const Contact = () => (
  <Box p={4}>
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input placeholder="Your name" />
      <FormLabel mt={4}>Email</FormLabel>
      <Input placeholder="Your email" type="email" />
      <FormLabel mt={4}>Message</FormLabel>
      <Textarea placeholder="Your message" />
      <Button mt={4} colorScheme="blue">Send Message</Button>
    </FormControl>
  </Box>
);

export default Contact;