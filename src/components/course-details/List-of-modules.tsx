import { Button, Container, Divider, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ModuleListWithSLTs from "../lms/Course/ModuleListWithSLTs";

const ListOfModules = () => {
  return (
    <Container maxWidth="80%" marginLeft="0">
      <Heading size="2xl" color="theme.blue" my="1em">
        Esquema del curso Plutus PBL
      </Heading>
      <Text fontSize="xl" pb="5">
        Cada módulo tiene un número. El objetivo de aprendizaje de cada módulo también está numerado. El propósito de este sistema de enumeración es dar una referencia rápida de lo que estás aprendiendo.
      </Text>
      <Text fontSize="xl" pb="5">
        Cuando te encuentres atascado, puedes empezar diciendo 'Necesito ayuda con el SLT 102.3', lo que indicaría que estás aprendiendo a construir transacciones utilizando el cardano-cli. Para un vistazo general de lo que aprenderás en el PPBL 2023, dale un vistazo a los SLTs abajo.
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="theme.yellow" pb="5">
        Haz click en un módulo para ver los Objetivos de Aprendizaje del Estudiante.
      </Text>
      <ModuleListWithSLTs />
      <Heading size="xl" color="theme.blue" my="0.8em">
        Siguientes pasos:
      </Heading>
      <Text fontSize="xl" my="5">
        Todo este trabajo nos lleva hacia un modelo de Governanza.
      </Text>
      <Link href="/get-started/governance">
        <Button>¿Cómo se conecta el PPBL al concepto de Governanza?</Button>
      </Link>
      <Divider my="2em" />
    </Container>
  );
};

export default ListOfModules;
