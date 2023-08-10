import { Button, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <VStack padding="10">
      <Button backgroundColor="brand.100">brand.100</Button>
      <Button backgroundColor="brand.200">brand.200</Button>
      <Button backgroundColor="brand.300">brand.300</Button>
      <Button backgroundColor="brand.400">brand.400</Button>
    </VStack>
  );
}
