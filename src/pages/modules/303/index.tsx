import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import { items } from "@/src/data/modules/303";

const Module303 = () => {
  return (
    <>
    <Head>
      <title>Módulo 303 PPBL</title>
    </Head>
    <div>
      <Sidebar items={items} modulePath="/modules/303" selected={0} />
    </div>
    </>
  );
};

export default Module303;
