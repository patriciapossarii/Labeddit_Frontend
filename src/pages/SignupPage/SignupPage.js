
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
} from '@chakra-ui/react';

export default function SignupPage() {
  return (
  
        <Box
        spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
 align={'center'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
         // boxShadow={'lg'}
          p={8}>
            <Heading fontSize={'4xl'}>Olá, boas vindas ao LabEddit ;)
          </Heading>
          <Box marginTop={"250px"}>
          <Stack spacing={4}>
            <FormControl id="nickName" >
              <Input type="nickname" placeholder="Apelido"
                _placeholder={{ color: 'gray.500' }} />
            </FormControl>
            <FormControl id="email" >

              <Input type="email" placeholder="E-mail"
                _placeholder={{ color: 'gray.500' }} />
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder="Senha"
                _placeholder={{ color: 'gray.500' }} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                display={"flex"}
               
                justify={'space-between'}>
                <Box>
                  <Text fontSize={"14px"} color={'gray.600'} textAlign={"left"}>
                    Ao continuar, você concorda com o nosso
                    <Link color={'blue.400'}> Contrato de usuário </Link>
                    e nossa
                    <Link color={'blue.400'}> Política de Privacidade</Link>
                  </Text>
                </Box>
                
                  <Checkbox > <Text textAlign={"left"}  fontSize={"14px"}>
                    Eu concordo em receber emails sobre coisas legais no Labeddit</Text></Checkbox>
               

              </Stack>
              <Button
                bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
                borderRadius={"27px"}
                color={'white'}
                _hover={{
                  bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                }}>
                Cadastrar
              </Button>
            </Stack>
          </Stack>
          </Box>
        </Box>
   
  );
}