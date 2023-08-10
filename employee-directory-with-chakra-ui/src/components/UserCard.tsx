import {
  Avatar,
  Box,
  Center,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

const UserCard = (props: {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  description: string;
  job_title: string;
  avatar: string;
  cover_image: string;
}) => {
  return (
    <Link href={`/user/${props.username}`} passHref>
      <>
        <VStack
          spacing="4"
          borderRadius="md"
          boxShadow="xl"
          padding="5"
          backgroundColor={useColorModeValue('gray.500', 'gray.700')}
        >
          <Center>
            <Avatar size="lg" src={props.avatar} />
          </Center>
          <Center>
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="xl">
                {props.first_name} {props.last_name}
              </Text>
              <Text fontSize="xs">{props.job_title}</Text>
            </Box>
          </Center>
        </VStack>
      </>
    </Link>
  );
};

export default UserCard;
