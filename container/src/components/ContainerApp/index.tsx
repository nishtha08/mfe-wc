import {
  Center,
  Box,
  Flex,
  Heading,
  Spinner,
  Button,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
  CounterAppTwo,
}: ContainerAppProps) => {


  return (
    <Center
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column"
    >
      <Box
        // border="1px solid #151421"
        // borderRadius="1rem"
        // height="50vh"
        // justifyContent="space-around"
        // alignItems="center"
        // flexDirection="column"
        // padding="5rem"
        // backgroundColor="#6F60EA"
      >
        <Heading color="#fff">CONTAINER</Heading>
        <Flex direction="column" justifyContent="space-between" gap="2rem" width="92vw">
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              mr="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                APP-1
              </Heading>
              <CounterAppOne />
            </Box>
          </React.Suspense>
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                APP-2
              </Heading>
              <CounterAppTwo />
            </Box>
          </React.Suspense>
        </Flex>
      </Box> 
    </Center>
  );
};
