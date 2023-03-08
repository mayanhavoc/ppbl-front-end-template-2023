import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import { items } from "@/src/data/modules/100";

const Module100 = () => {
  return (
    <>
    <Head>
      <title>Módulo 100 PPBL</title>
    </Head>
    <div>
      <Sidebar items={items} modulePath="/modules/100" selected={0} />
    </div>
    </>
  );
};

export default Module100;