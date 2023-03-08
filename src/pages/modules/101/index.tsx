import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import { items } from "@/src/data/modules/101";

import { Grid, GridItem } from "@chakra-ui/react";

const Module101 = () => {
  return (
    <>
    <Head>
      <title>Módulo 101 PPBL</title>
    </Head>
    <div>
      <Sidebar items={items} modulePath="/modules/101" selected={0} />
    </div>
    </>
  );
};

export default Module101;
