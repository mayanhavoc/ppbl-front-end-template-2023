import { Box, Container, Divider, Flex, Heading, Image, Text, Stack, Center, Grid, GridItem, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PBLFramework = () => {
  return (
    <Container maxWidth="90%" marginLeft="2em" marginTop="2em">
      <Heading size="xl" color="theme.blue" lineHeight="1.4">
        La meta de cualquier curso PBL es ayudar a las personas a contribuir a proyectos reales.
      </Heading>
      <Container maxWidth="80%" bgColor="theme.lightGray" marginTop="2em" marginLeft="0">
        <Stack>
          <Heading lineHeight="1.4" mt="1em" ml="2em" color="white">
            Los módulos están organizados conforme a la estructura PBL:
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={5} p="5">
            <GridItem colSpan={3}>
              <Box>
                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Inducción (100):
                </Text>

                <Text fontSize="lg" m="3" color="white">
                  ¿Qué es esto? ¿Cómo puedo empezar?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Desarrollando conocimientos básicos (200):
                </Text>
                <Text fontSize="lg" m="3" color="white">
                  ¿Cómo funciona? ¿Qué necesito saber?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Especialización (300):
                </Text>
                <Text fontSize="lg" m="3" color="white">
                  ¿Cómo lo construíste?
                </Text>

                <Divider my="8" />

                <Text fontWeight="bold" fontSize="lg" m="3" color="white">
                  Contribuyendo (400):
                </Text>
                <Text fontSize="lg" m="3" color="white">
                  ¿Cómo puedo contribuir?
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
        Cada módulo consiste de un grupo de Objetivos de Aprendizaje del Estudiante que describe lo que aprenderás en el curso.
      </Text>
      <Link href="/get-started/slts">
        <Button>¡Cuéntame sobre los Objetivos de Aprendizaje del Estudiante!</Button>
      </Link>
    </Container>
  );
};

export default PBLFramework;
