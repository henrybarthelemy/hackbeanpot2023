import {
  Flex,
  Textarea,
  Stack,
  Heading,
  Button,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Cactus from "./Cactus";
import { useParams } from "react-router-dom";


export default function ReviewCards() {
  const id = useParams().id;
  const SetsContext = React.createContext({
    currentCards: [], fetchSetById: () => {}
  })

  const [currentCards, setCurrentCards] = useState([]);
  const fetchSetById = async () => {
    const response = await(fetch('http://localhost:8000/set/'+id));
    const getSet = await response.json();
    setCurrentCards(getSet.data.cards);
  }

  useEffect(() => {
    fetchSetById()
  }, [])
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const increment = () => {
    setCurrentCardIndex(currentCardIndex + 1);
  };
  const decrement = () => {
    setCurrentCardIndex(Math.max(currentCardIndex - 1, 0));
  };
  if (currentCardIndex >= currentCards.length) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Finished Review
        </Heading>
        <Text color={"gray.500"}>
          Come back later for more cards to review!
        </Text>
        <Center>
          <Cactus count={currentCardIndex} maxCount={currentCards.length} />
        </Center>
      </Box>
    );
  } else {
    return (
      <Stack spacing={3} mx={"auto"} width={"60%"} maxW={"2xl"} py={12}>
        <Heading fontSize={"3xl"}>Review Cards</Heading>
        <Flex
          flexDir="column"
          width={"100%"}
          align="center"
          justify="space-between"
        >
          <Card
            contents={currentCards[currentCardIndex]}
            increment={increment}
            decrement={decrement}
            key={currentCardIndex}
          ></Card>
          <Cactus count={currentCardIndex} maxCount={currentCards.length} />
        </Flex>
      </Stack>
    );
  }
}
