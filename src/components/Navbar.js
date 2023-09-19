import { Box, Flex, HStack} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const NavItem = (props) => {
    const { children } = props;
    return (
      <Box
        as="a"
        posx={2}
        posy={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
        }}
        href={props.link}>
        {children}
      </Box>
    )
  }

  export default function Navbar() {
    return (
      <Box px={4} bg={"gray.100"}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

            <HStack spacing={8} alignItems={'center'}>
              {/* <Box>Logo</Box> */}
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <NavItem link={"/"}>Page 1</NavItem>
                <NavItem link={"/peopleweave_tech/pg2"}>Page 2</NavItem>
              </HStack>
            </HStack>
          </Flex>
      </Box> 
    );
  };