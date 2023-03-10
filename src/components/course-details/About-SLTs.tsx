import { Box, Container, Divider, Heading, ListItem, OrderedList, Stack, Text, UnorderedList, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AboutSLTs = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Heading size="2xl" color="theme.blue">
        Here is how this course works:
      </Heading>
      <OrderedList margin="1em" marginLeft="3em">
        <ListItem fontSize="xl" py="2">
          PPBL2023 Consists of 14 course Modules
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Each Module starts with a list of Student Learning Targets (SLTs)
        </ListItem>
        <ListItem fontSize="xl" py="2">
          The lessons in each module are designed to help you master each Student Learning Target.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          You will complete projects to learn through experience how Cardano works. Along the way, you will demonstrate
          mastery of the learning targets.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Together, we will explore ways to use Cardano and Plutus to represent your mastery status on chain.
        </ListItem>
      </OrderedList>
      <Divider my="3" />
      <Heading size="xl" color="theme.blue" my="0.8em">
        What is a Student Learning Target?
      </Heading>
      <Text fontSize="xl" my="5">
        A student learning target describes what you will know and be able to do at the end of of Lesson or Module.
      </Text>
      <Text fontSize="xl" my="5">
        In other words, each SLT should help you understand why each lesson is here.
      </Text>
      <Divider my="3" />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Next:
      </Heading>
      <Text fontSize="xl" my="5">
        Take a look at the list of Course Modules and Student Learning Targets in PPBL 2023.
      </Text>
      <Link href="/get-started/modules">
        <Button>Show me the Modules and SLTs!</Button>
      </Link>
    </Container>
  );
};

export default AboutSLTs;
