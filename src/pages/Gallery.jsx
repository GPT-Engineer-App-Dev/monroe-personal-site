import { Box, Image, SimpleGrid } from '@chakra-ui/react';

const Gallery = () => {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg"
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Gallery image ${index + 1}`} boxSize="300px" m="auto" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;