import { Box, Text, Heading } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  children?: React.ReactNode;
  id: string
};
const SLT: React.FC<Props> = ({ children, id }) => {
  return (
    <Box borderLeft="1px" my="3" pl="5">
      <Heading size="md" color="theme.blue">
        SLT{" "}{id}
      </Heading>
      <Text fontSize="4xl">{children}</Text>
    </Box>
  );
};

export default SLT;
