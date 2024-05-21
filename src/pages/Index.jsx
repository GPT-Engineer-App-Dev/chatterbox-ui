import { Container, VStack, Text, Box, Input, Button, HStack, Avatar } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetContent, setTweetContent] = useState("");

  const handleTweet = () => {
    if (tweetContent.trim() !== "") {
      setTweets([{ content: tweetContent, id: Date.now() }, ...tweets]);
      setTweetContent("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">Twitter Clone</Text>
        <Box width="100%">
          <HStack spacing={4}>
            <Avatar name="User" />
            <Input
              placeholder="What's happening?"
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
            />
          </HStack>
          <Button mt={2} colorScheme="twitter" onClick={handleTweet}>Tweet</Button>
        </Box>
        <VStack spacing={4} width="100%">
          {tweets.map((tweet) => (
            <Box key={tweet.id} p={4} borderWidth={1} borderRadius="md" width="100%">
              <HStack spacing={4}>
                <Avatar name="User" />
                <Text>{tweet.content}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;