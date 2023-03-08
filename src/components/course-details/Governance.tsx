import { Button, Container, Divider, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Governance = () => {
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Heading size="2xl" color="theme.blue">Más allá de Contribución: Governanza</Heading>
      <Text fontSize="xl" marginTop="1em">Nuestro intención es que seas más que un contribuidor.</Text>
      <Text fontSize="xl" marginTop="1em">Queremos que tomes decisiones que ayuden a responder la pregunta:</Text>

      <Heading size="4xl" color="theme.green" my="1em">'¿Qué deberíamos hacer después?'</Heading>
      <Text fontSize="xl" my="1em">Creemos que cuando las personas son educadas, están mejor preparadas para tomar decisiones.</Text>
      <Text fontSize="xl" my="1em">Creemos que la mejor manera de educar es haciendo.</Text>
      <Text fontSize="xl" my="1em">¡Manos a la obra!</Text>
      <Link href="/modules/100">
        <Button my="1em">Empieza con el módulo 100</Button>
      </Link>
    </Container>
  );
};

export default Governance;
