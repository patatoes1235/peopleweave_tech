import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Box, Heading, Button, Text, VStack, Spacer, SimpleGrid } from "@chakra-ui/react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useState } from "react";
import { design1 } from "../Placeholder";

export default function FeatureOne() {
    const [search, setSearch] = useState("Research");

    return (
        <SimpleGrid columns={2} w="full" h="md" spacing={2} bg="blue.100">
            <Flex m={4}>
                <Box>
                    <Heading my={4}>Discover relevant people and papers</Heading>
                    <Text>Our AI recommendation tools will give you people and research paper relevant to you and your research</Text>
                </Box>
                
            </Flex>

            <Flex m={4} direction="column">
                <InputGroup my={4}>
                    <InputLeftElement pointerEvents="none">
                        <Search2Icon />
                    </InputLeftElement>
                    <Input
                        border="2px"
                        borderRadius="full"
                        value={search}
                        onChange={(target) => setSearch(target.value)} />
                </InputGroup>

                {design1.searchProfiles.map((profile) => (
                    <Box key={profile.name} display="flex" my={1} alignItems="center" gap={3}> 
                        <Avatar name={profile.name} src={profile.image} />
                        <Heading size="sm">{profile.name}</Heading>
                    </Box>
                ))}
                {design1.searchPapers.map((item) => (
                    <Box key={item.title} my={1}> 
                        <Text fontWeight="bold" fontSize="sm">{item.title}</Text>
                        <Text fontSize="sm">{item.authors}</Text>
                    </Box>
                ))}
            </Flex>
        </SimpleGrid>
    )
}