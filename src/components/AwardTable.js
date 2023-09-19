import { TableContainer, Table, Tr, Th, Td, Tbody, Thead } from "@chakra-ui/react";

export default function AwardTable({ children }) {
    // console.log(children);
    return (
        <TableContainer fontFamily="mono" w="full">
            <Table variant="striped" colorScheme="gray" size="sm">
                <Thead>
                    <Tr>
                        <Th>Award</Th>
                        <Th>Paper Title</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {children.map((row)=> (
                        <Tr key={row.award}>
                            <Td>{row.award}</Td>
                            <Td>{row.paperTitle}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}