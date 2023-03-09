import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Button, Grid, Stack, StackDivider, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";


export default function Lesson1003() {
  return (
    <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
      <SLT id="100.3">I know how to safely store my keys</SLT>
      <Grid templateColumns="repeat(2, 1fr)" gap={10}>
        <AssignmentComponent>
          <Text py="2">
            When building on Cardano, there are a few different ways you will handle your keys. We will start with
            mnemonics. Later in this course, we will discuss key management on cardano-cli and in applications.
          </Text>
        </AssignmentComponent>
        <SuccessComponent mastery={false}>You are confident that no one else can access your keys.</SuccessComponent>
      </Grid>
      <Heading>Join the conversation - first in discord - mention algorand</Heading>
      <Link href="/modules/100/1004">
        <Button my="1em">Continue to Lesson 4</Button>
      </Link>
    </Stack>
  );
}
