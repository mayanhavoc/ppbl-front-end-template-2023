import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Box, Button, Grid, GridItem, Stack, StackDivider, Text } from "@chakra-ui/react";
import { CardanoWallet, useAddress, useNetwork, useWallet } from "@meshsdk/react";
import Link from "next/link";

export default function Lesson1001() {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const network = useNetwork();

  return (
    <Stack marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
      <SLT id="100.1">Puedo conectar mi billetera Cardano al testnet de pre-producción.</SLT>
      <GridItem colSpan={2} w="50%" mx="auto">
        <VideoComponent videoId="aa">Usando el Testnet</VideoComponent>
      </GridItem>
      <AssignmentComponent>
        <Text py="5">Intenta conectar tu billetera.¡Asegúrate de estar en el testnet!</Text>
        <Box mb="20">
          <CardanoWallet />
        </Box>

        <Box bg="theme.light" color="theme.dark" p="5">
          {connected ? (
            <Box>
              {network == 0 ? "¡Éxito!" : "Es momento de resolver problemas. Estas son algunas cosas que podrían estar dando problemas."}
            </Box>
          ) : (
            "No hay una billetera conectada, intenta conectar una billetera. Si eso no funciona, puede ser por varias potenciales razones. Mira el video para aprender más."
          )}
        </Box>
      </AssignmentComponent>
      <SuccessComponent mastery={connected && network == 0}>
        Estás conectado a una Testnet de Cardano
      </SuccessComponent>
      <Link href="/modules/100/1002">
        <Button my="1em">Continuar a la Lección 2</Button>
      </Link>
    </Stack>
  );
}
