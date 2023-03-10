import Head from "next/head";

import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Module101() {

  return (
    <>
      <Head>
        <title>PPBL Module 101</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading>Module 101: Compile your first...</Heading>
        <Text>This is a .tsx file</Text>
        <Text><Link href="./101/example">Click here</Link> to see an .mdx file.</Text>
      </Box>
    </>
  );
}
