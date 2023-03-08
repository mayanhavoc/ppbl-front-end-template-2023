import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Button, Grid, Stack, StackDivider, Text } from "@chakra-ui/react";
import Link from "next/link";


export default function Lesson1003() {
  return (
    <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
      <SLT id="100.3">I know how to safely store my keys</SLT>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <AssignmentComponent>
          <Text py="2">
            Cuando construyes en Cardano, hay diferentes maneras en que puedes manejar tus llaves. Empezaremos utilizando 
            mnemotécnica. Más adelante en el curso discutiremos manejo de llaves en el cardano-cli y en aplicaciones.
          </Text>
        </AssignmentComponent>
        <SuccessComponent mastery={false}>Estás seguro que nadie tiene acceso a tus llaves.</SuccessComponent>
      </Grid>
      <Link href="/modules/100/1004">
        <Button my="1em">Continúa a la Lección 4</Button>
      </Link>
    </Stack>
  );
}
