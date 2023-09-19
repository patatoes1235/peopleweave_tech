import SectionOne from "../components/SectionOne"
import "./Page1.css"
import { Container, Box, Text } from "@chakra-ui/react"
import FeatureOne from "../components/FeatureOne"

export default function Page1() {
    return (
        <Container maxWidth="full" h="full" p={0}>
            <SectionOne />
            <FeatureOne />
        </Container>
        
    )
}