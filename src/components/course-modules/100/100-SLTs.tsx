import SLTsItems from "@/src/components/course-modules/SLTs";
import { Container, Divider, Heading, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SLTs100 = () => {
  return (
    <Container maxWidth="90%" marginTop="2em">
      <SLTsItems moduleTitle="Module 100" moduleNumber={100} />
      <Divider mt="5" />
      <Heading py="3">¡Bienvenido al Plutus PBL 2023!</Heading>
      <Text py="3" fontSize="lg">
        El propósito de este módulo es dar un ejemplo de como funciona el curso. Algunas aspectos importantes:
      </Text>
      <Text py="3" fontSize="lg">
        Primero, cada módulo en el PPBL empieza con una lista de Objetivos de Aprendizaje del Estudiante (SLTs). En este módulo, empezarás a ver diferentes maneras de obtener 'Maestría' en cada SLT.
      </Text>
      <Text py="3" fontSize="lg">
        En la parte superior de cada página podrás ver tu status que corresponde a tus objetivos de aprendizaje. Puedes observar como funciona en la Lección 1.
      </Text>
      <Text py="3" fontSize="lg">
        En las próximas lecciones continuaremos explorando estos aspectos de la plataforma. Por ahora, puedes usar el menu lateral para navegar a la Lección 1 o puedes hacer click en el botón abajo.
      </Text>
      <Link href="/modules/100/1001">
        <Button my="1em">¡Estoy listo para la Lección 1!</Button>
      </Link>
    </Container>
  );
};

export default SLTs100;
