import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Box, Grid, ListItem, OrderedList, Stack, StackDivider, Text, Link as ChakraLink, Button } from "@chakra-ui/react";
import { CardanoWallet, useAddress, useLovelace, useNetwork, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Lesson1002() {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const network = useNetwork();
  const lovelace = useLovelace();

  const [mastery, setMastery] = useState(false)

  useEffect(() => {
    if((network == 0) && lovelace && parseInt(lovelace) > 0) {
      setMastery(true)
    }
  }, [connected, network, lovelace])

  return (
    <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
      <SLT id="100.2">Puedo obtener tAda gratis en la testnet de pre-producción</SLT>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <AssignmentComponent>
          <OrderedList pb="5">
            <ListItem>
              Go to{" "}
              <ChakraLink href="https://docs.cardano.org/cardano-testnet/tools/faucet">
                https://docs.cardano.org/cardano-testnet/tools/faucet
              </ChakraLink>
            </ListItem>
            <ListItem>Asegúrate de seleccionar el testnet de pre-producción del menú.</ListItem>
            <ListItem>Ingresa tu dirección de pre-producción y somete el formulario.</ListItem>
            <ListItem>¡Felicidades, eres rico en tAda!</ListItem>
          </OrderedList>
        </AssignmentComponent>
        <SuccessComponent mastery={connected && mastery}>Tienes tAda en tu billetera.</SuccessComponent>
      </Grid>
      <VideoComponent videoId="aaaaa">Video-guía:</VideoComponent>
      <Link href="/modules/100/1003">
        <Button my="1em">Continúa a la Lección 3</Button>
      </Link>
    </Stack>
  );
}