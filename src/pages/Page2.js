import {Box, Flex, Heading, Text, Tag, Container, HStack, TagLabel, Spacer} from "@chakra-ui/react"
import { design2 } from "../Placeholder"
import ConnectionGraphPlaceholder from "../components/ConnectionGraph";
import AwardTable from "../components/AwardTable";

export default function Page2() {
    const percentFormat = new Intl.NumberFormat('en-US', {style: "percent", signDisplay: "always"});
    const percentChange = design2.subNumber / design2.prevSubNumber -1;
    return(
        <Container maxWidth="full" pb={6}>
            <Heading m={4} as="h1">{design2.conferenceName}</Heading>
            <Flex gap={7}>
                <Heading m={4} as="h3" size="md">Attendance</Heading>
                <Heading m={4} as="h3" size="md">Paper</Heading>
            </Flex>
            <Flex fontFamily="mono">
                <Flex m={4} direction="column" align="end">
                    <Text fontSize="lg">Submission Number</Text>
                    <HStack>
                        <Text fontSize="5xl">{design2.subNumber}</Text>
                        <Text fontSize="sm">{(Math.abs(percentChange) >= 0.01) ? percentFormat.format(percentChange) : ""}</Text>
                    </HStack>
                </Flex>
                <Flex m={4} direction="column" align="end">
                    <Text fontSize="lg">Acceptance Rate</Text>
                    <Text fontSize="5xl">{design2.acceptRate}%</Text>
                </Flex>
            </Flex>
            <Box m={4}>
                <Text my={2} fontFamily="mono" fontSize="lg">Research Trend</Text>
                <Flex wrap="wrap">
                    {design2.trendTag.map((tag) => (
                        <Tag key={tag.name} m={1} size="lg" borderRadius="full">
                            <TagLabel fontSize="md" fontWeight="bold">{tag.name}</TagLabel>
                            <Text fontSize="xs" ml={4} mr={2} color={"gray.500"}>{tag.id}</Text>
                        </Tag>
                    ))}
                </Flex> 
            </Box>
            <Box m={4}>
                <Text my={2} fontFamily="mono" fontSize="lg">Paper Connection</Text>
                <ConnectionGraphPlaceholder />
            </Box>
            <Box m={4}>
                <Text my={2} fontFamily="mono" fontSize="lg">Awarded paper and runner up</Text>
                <AwardTable>{design2.awards}</AwardTable>
            </Box>

        </Container>
    )
}