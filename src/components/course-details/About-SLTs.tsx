import { Box, Container, Divider, Heading, ListItem, OrderedList, Stack, Text, UnorderedList, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AboutSLTs = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Heading size="2xl" color="theme.blue">
        Este curso funciona de la siguiente manera:
      </Heading>
      <OrderedList margin="1em" marginLeft="3em">
        <ListItem fontSize="xl" py="2">
          EL PPBL2023 consiste de 14 módulos
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Cada módulo inicia con una lista de Objetivos de Aprendizaje para el Estudiantes (SLTs por sus siglas en inglés)
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Las lecciones de cada módulo están diseñadas para ayudar a desarrollar maestría en cada uno de esos objetivos.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Completarás proyectos para aprender a través de la experiencia como funciona Cardano. A lo largo del camino, demostrarás maestría de los objetivos de aprendizaje.
        </ListItem>
        <ListItem fontSize="xl" py="2">
          Juntos exploraremos las maneras en que Cardano y Plutus representan tu status de maestría 'on-chain'.
        </ListItem>
      </OrderedList>
      <Divider my="3" />
      <Heading size="xl" color="theme.blue" my="0.8em">
        ¿Qué es un Objetivo de Aprendizaje del Estudiante?
      </Heading>
      <Text fontSize="xl" my="5">
        Un objetivo de aprendizaje describe que sabrás y qué podrás hacer al finalizar la lección o módulo.
      </Text>
      <Text fontSize="xl" my="5">
        En otras palabras, cada SLT debería ayudar a entender porque existe la lección.
      </Text>
      <Divider my="3" />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Siguientes pasos:
      </Heading>
      <Text fontSize="xl" my="5">
        Dale un vistazo a la lista de módulos del curso así como a los objetivos de aprendizaje para el estudiante en el PPBL 2023.</Text>
      <Link href="/get-started/modules">
        <Button>¡Enséñame los módulos y SLTs!</Button>
      </Link>
    </Container>
  );
};

export default AboutSLTs;
