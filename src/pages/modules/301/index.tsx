import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import { items } from "@/src/data/modules/301";

const Module301 = () => {
  return (
    <>
    <Head>
      <title>Módulo 301 PPBL</title>
    </Head>
    <div>
      <Sidebar items={items} modulePath="/modules/301" selected={0} />
    </div>
    </>
  );
};

export default Module301;
