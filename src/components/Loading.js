import { Flex, Spinner } from "@chakra-ui/react";

const Loading = ({ h }, props) => {
  return (
    <Flex
      flex={1}
      w={"100%"}
      h={h || "100vh"}
      justifyContent={"center"}
      alignItems={"cente"}
      {...props}
    >
      <Flex alignItems={"center"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    </Flex>
  );
};

export default Loading;
