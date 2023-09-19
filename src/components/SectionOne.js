import { Flex, Box, Heading, Button, Text, VStack, Spacer } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../pages/Page1.css"
import { Tag } from "@chakra-ui/react";

export default function SectionOne() {

    return(
        <Flex direction="column" maxWidth="full" align="center" justify="space-between" h="md" pos="relative">
            <Tag size="lg" pos="absolute" left={-150} top={5} m={2} color="gray.700"  variant="solid">Section 1</Tag>
            <Spacer />
            <Heading as="h2" className="typewriter" my={20} maxWidth="36rem">Know your research community...</Heading> {/* Not fully responsive but typewriter effect looks too cool */}
            {/* <Spacer /> */}
            <VStack w="sm" spacing={5} align="stretch">
                <Button colorScheme="blue">Log in</Button>
                <Button colorScheme="blue">Create Account</Button>
            </VStack>
            <Spacer />
            <Box display="flex" alignItems="center" flexDirection="column">
                <Text>Learn More</Text>
                <ChevronDownIcon fontSize="3xl"/>
            </Box>
        </Flex>
    );
}