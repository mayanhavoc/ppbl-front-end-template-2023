import SLTsItems from "@/src/components/course-modules/SLTs";
import { Container, Divider, Heading, Box } from "@chakra-ui/react";
import React from "react";

const SLTs202 = () => {
  return (
    <Container maxWidth="90%" marginTop="2em">
      <SLTsItems moduleTitle="Module 202" moduleNumber={202} />
      <Divider mt="5" />
      <Box py="5">
        <Heading>Acerca de este módulo</Heading>
      </Box>
    </Container>
  );
};

export default SLTs202;