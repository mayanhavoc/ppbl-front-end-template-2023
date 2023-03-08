import ContributorPairMintingComponent from "@/src/components/course-modules/100/ContributorMinter/ContributorPairMintingComponent";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Box, Heading, ListItem, Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react";
import { Asset } from "@meshsdk/core";
import { useAssets, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Lesson1004() {
  const { connected } = useWallet();
  const walletAssets = useAssets();

  const [connectedPPBL2023Token, setConnectedPPBL2023Token] = useState<Asset | undefined>(undefined);

  useEffect(() => {
    if (walletAssets) {
      const _ppbl2023 = walletAssets.filter(
        (a: Asset) => a.unit.substring(0, 56) == "05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056"
      );
      setConnectedPPBL2023Token(_ppbl2023[0]);
    }
  }, [walletAssets]);

  return (
    <Stack marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
      <SLT id="100.4">Puedo acuñar un 'Contributor Token' para el PPBL</SLT>

      <SuccessComponent mastery={connected && connectedPPBL2023Token != undefined}>
        <Text py="2">Tienes un Token PPBL2023 en tu billetera.</Text>
        <Text py="2">Revisa tu billetera para asegurarte que tu 'token' tenga el 'Policy Id'</Text>
        <code>05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056</code>
      </SuccessComponent>
      <AssignmentComponent>
        <Text>
          Si tu billetera está conectada al Testnet de pre-producción de Cardano, podrás completar esta tarea.
        </Text>
        <Box my="5" p="2" bg="gray.500" color="gray.900">
          {connected ? (
            <>
              {connectedPPBL2023Token != undefined && (
                <>
                  <Heading size="md" py="3">
                    &#127881; Parece que ya tienes tu token &#127881;
                  </Heading>
                  <Text py="3">¡Feliciaciones, has demostrado maestría en este objetivo de aprendizaje! </Text>
                  <Heading size="md" py="3">
                    &#127959; Suigiente paso: &#127959;
                  </Heading>
                  <UnorderedList>
                    <ListItem>
                      {" "}
                      En este curso PBL de Plutus, aprenderás como se acuño tu token PPBL2023 y como utilizar tokens para que las aplicaciones respondan de manera diferente a diferentes tokens.
                    </ListItem>
                    <ListItem>
                      En los módulos 101 y 102, aprenderás a cambiar el número de la suerte en tu 'Contributor Token'.
                    </ListItem>
                    <ListItem>
                      Así también aprenderás como hackera este sitio web para acuñar cuantos tokens PPBL2023 quieras - más sobre eso en el futuro.
                    </ListItem>
                  </UnorderedList>
                  <Text py="3"></Text>
                  <Text py="3">¡Nos emociona participar en esta aventura contigo - manos a la obra!</Text>
                </>
              )}
              {connectedPPBL2023Token == undefined && (
                <>
                  <ContributorPairMintingComponent />
                </>
              )}
            </>
          ) : (
            "asegúrate de conectar tu billetera"
          )}
        </Box>
      </AssignmentComponent>
    </Stack>
  );
}
