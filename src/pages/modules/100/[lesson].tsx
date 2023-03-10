import Sidebar from "@/src/components/ui/Text/Sidebar";
import Status100 from "@/src/components/course-modules/100/Status100";
import React from "react";
import SLTs100 from "@/src/components/course-modules/100/100-SLTs";
import Lesson1001 from "@/src/components/course-modules/100/Lesson-1001";
import Lesson1002 from "@/src/components/course-modules/100/Lesson-1002";
import Lesson1003 from "@/src/components/course-modules/100/Lesson-1003";
import Lesson1004 from "@/src/components/course-modules/100/Lesson-1004";
import Head from "next/head";

import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

import { Grid, GridItem, Text } from "@chakra-ui/react";

import { items } from "@/src/data/modules/100";


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = items.map((item) => ({ params: { lesson: item.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { items },
  };
};

type Props = {
  items: any;
};

const Module100Lessons: React.FC<Props> = ({ items }) => {
  const router = useRouter();
  const lesson = router.query.lesson as string;

  const itemIndex = items.findIndex((item: any) => item.slug === lesson);

  return (
    <>
      <Head>
        <title>PPBL Module 100</title>
      </Head>
        <Status100 />
      <Grid templateColumns="repeat(6, 1fr)">
        <Sidebar items={items} modulePath="/modules/100" selected={itemIndex} />
        <GridItem colSpan={5}>
          {lesson == "slts" && <SLTs100 />}
          {lesson == "1001" && <Lesson1001 />}
          {lesson == "1002" && <Lesson1002 />}
          {lesson == "1003" && <Lesson1003 />}
          {lesson == "1004" && <Lesson1004 />}
        </GridItem>
      </Grid>
    </>
  );
};

export default Module100Lessons;
