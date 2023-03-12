
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Image,
} from '@chakra-ui/react';
import Vector1 from "../../assets/Vector1.svg"
import Vector2 from "../../assets/Vector2.svg"
import Vector3 from "../../assets/Vector3.svg"
import Vector4 from "../../assets/Vector4.svg"
export default function HomePage() {
  return (

    <Box
      spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
      align={'center'}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      // boxShadow={'lg'}
      p={8}>
      <Flex justifyContent={'center'}>
        <Image src={Vector1} />
        <Image src={Vector2} />
      </Flex>
      <Flex justifyContent={'center'} >
        <Image src={Vector3} />
        <Image src={Vector4} />
      </Flex>
      <Heading fontSize={'4xl'}>LabEddit
      </Heading>
      <Text fontSize={'lg'} color={'gray.600'}>
        O projeto de rede social da Labenu ✌️
      </Text>
      <Box marginTop={"250px"}>

        <Stack spacing={4}>

          <FormControl id="email" >

            <Input focusBorderColor={'#FE7E02'}
             type="email" placeholder="E-mail"
              _placeholder={{ color: 'gray.500' }} />
          </FormControl>
          <FormControl id="password">
            <Input focusBorderColor={'#FE7E02'} 
            type="password" placeholder="Senha"
              _placeholder={{ color: 'gray.500' }} />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              display={"flex"}
              justify={'space-between'}>
            </Stack>
            <Button
              bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
              borderRadius={"27px"}
              color={'white'}
              _hover={{
                bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
              }}>
              Continuar
            </Button>

            <Divider borderColor={'#FE7E02'} />

            <Button colorScheme={'#FE7E02'} variant='outline' borderRadius={"27px"} color={'#FE7E02'}
              _hover={{
                bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                color: ' white '
              }}
            >
              Crie uma conta!
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>

  );
}