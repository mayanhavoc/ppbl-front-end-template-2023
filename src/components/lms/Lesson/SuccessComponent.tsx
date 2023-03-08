import { Box, Text, Heading, Center } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
  mastery: boolean
};
const SuccessComponent: React.FC<Props> = ({ children, mastery }) => {
  return (
    <Box w="80%" mx="auto" my="3" p="5" bg="theme.dark" color="white">
    <Heading size="md" py="3'">Sabrás si has tenido éxito si:</Heading>
      <Text fontSize="lg" py="3">{children}</Text>
      {mastery ? (
        <Center my='3' p='5' bg='theme.green' w="250px">
            <Heading size="md">Status: ¡Lo lograste!</Heading>
        </Center>
      ) : (
        <Center my='3' p='5' bg='theme.gray' w="250px">
            <Heading size="md">Status: Aún no</Heading>
        </Center>
      )}
    </Box>
  );
};

export default SuccessComponent;
