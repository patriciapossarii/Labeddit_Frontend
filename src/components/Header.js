import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    Text,
    AbsoluteCenter,

    Avatar,
    Container,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,

    Spacer,

    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";
import Vector1 from "../assets/Vector1.svg"
import Vector2 from "../assets/Vector2.svg"
import Vector3 from "../assets/Vector3.svg"
import Vector4 from "../assets/Vector4.svg"


export default function Header(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate()
    const { isOnSignupPage } = props
    return (
        <>
            <Box bg={useColorModeValue('#EDEDED', 'gray.900')} h={"50px"}>
                {isOnSignupPage &&
                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Spacer />
                        <Box p='4' alignItems='center'>
                            <Flex justifyContent={'center'} width={"14.01px"} height={"13.63px"} >
                                <Image src={Vector1} />
                                <Image src={Vector2} />
                            </Flex>
                            <Flex justifyContent={'center'} width={"14.01px"} height={"13.63px"}>
                                <Image src={Vector3} />
                                <Image src={Vector4} />
                            </Flex>
                        </Box>
                        <Spacer />
                        <ButtonGroup gap='2' marginRight={"10px"}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Button
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Text color={" #4088CB"}>Entrar</Text>
                            </Button>

                        </ButtonGroup>
                    </Flex>

                }

            </Box >
        </>
    );
}