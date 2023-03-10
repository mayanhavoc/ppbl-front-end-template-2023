import { Box, Container, Divider, Flex, Heading, Image, Text, Stack, Center, Grid, GridItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PBLFramework = () => {
  return (
    <Container maxWidth="90%" marginLeft="2em" marginTop="2em">
      <Heading size="xl" color="theme.blue" lineHeight="1.4">
        The goal of any PBL Course is to support people to become Contributors to real Projects.
      </Heading>
      <Container maxWidth="80%" bgColor="theme.lightGray" marginTop="2em" marginLeft="0">
        <Stack>
          <Heading lineHeight="1.4" mt="1em" ml="2em" color="white">
            Modules are organized with the PBL Framework:
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={5} p="5">
            <GridItem colSpan={3}>
              <Box>
                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Onboarding (100):
                </Text>

                <Text fontSize="lg" m="3" color="white">
                  What is that? How can I get started?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Building Background Knowledge (200):
                </Text>
                <Text fontSize="lg" m="3" color="white">
                  How does it work? What do I need to know?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Specializing (300):
                </Text>
                <Text fontSize="lg" m="3" color="white">
                  How did you build it?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Contributing (400):
                </Text>
                <Text fontSize="lg" m="3" color="white">
                  How can I contribute?
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
                <Image src="/PBLFramework.png" width="100%" />
            </GridItem>
          </Grid>
        </Stack>
      </Container>
      <Divider my="3" />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Next:
      </Heading>
      <Text fontSize="xl" my="5">
        Each module consists of a set of Student Learning Targets (SLTs) that describe what you will learn in the course.
      </Text>
      <Link href="/get-started/slts">
        <Button>Tell me about Student Learning Targets!</Button>
      </Link>
    </Container>
  );
};

export default PBLFramework;
