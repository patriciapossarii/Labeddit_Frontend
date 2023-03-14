
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import Vector1 from "../../assets/Vector1.svg"
import Vector2 from "../../assets/Vector2.svg"
import Vector3 from "../../assets/Vector3.svg"
import Vector4 from "../../assets/Vector4.svg"
import { useForm } from '../../hooks/use-form';

import { validateEmail, validatePassword } from '../../constants/url';
import { EmailInput } from '../../inputs/email';
import { PasswordInput } from '../../inputs/password';
import { useNavigate } from 'react-router-dom';
import { goToSignupPage, goToFeedPage } from '../../routes/coordinator';
import { Login } from '../../constants/url';

export default function LoginPage() {

  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: ""
  })

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setPasswordValid] = useState(true)
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    setIsEmailValid(validateEmail(form.email))
    setPasswordValid(validatePassword(form.password))
    goToFeedPage(navigate)
    try {
      const { token } = isEmailValid && isPasswordValid && await Login({
        email: form.email,
        password: form.password
      })
      localStorage.setItem("labeddit.token", token);

    } catch (error) {
      alert(error.response.data)
    }

  }


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

          <form onSubmit={onSubmit}>

            <EmailInput isValid={isEmailValid} value={form.email} onChange={onChangeInputs} />

            <PasswordInput isValid={isPasswordValid} value={form.password} onChange={onChangeInputs} />

            <Button
              type="submit"
              variant="form"
              bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
              borderRadius={"27px"}
              color={'white'}
              _hover={{
                bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
              }}>  Continuar  </Button>


            <Divider borderColor={'#FE7E02'} />

            <Button colorScheme={'#FE7E02'} variant='outline' borderRadius={"27px"} color={'#FE7E02'}
              _hover={{
                bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                color: ' white '
              }}
              onClick={() => goToSignupPage(navigate)}
            >Crie uma conta!   </Button>

          </form>

        </Stack>
      </Box>
    </Box>

  );
}