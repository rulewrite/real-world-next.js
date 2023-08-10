import UserCard from '@/components/UserCard';
import users from '@/data/users';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Text
        fontSize="xxx-large"
        fontWeight="extrabold"
        textAlign="center"
        marginTop="9"
      >
        ACME Corporation Employees
      </Text>
      <Grid
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gridGap="10"
        padding="10"
      >
        {users.map((user) => {
          return (
            <GridItem key={user.id}>
              <UserCard {...user} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
