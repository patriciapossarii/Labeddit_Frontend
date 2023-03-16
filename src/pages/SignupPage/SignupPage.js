import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Checkbox,
  Stack,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from '../../hooks/use-form';
import { validadeNickname, validateEmail, validatePassword,Signup } from '../../constants/url';
import Header from '../../components/Header/Header';
import { EmailInput } from '../../inputs/email';
import { PasswordInput } from '../../inputs/password';
import { NicknameInput } from '../../inputs/nickname';
import { goToFeedPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';


export default function SignupPage() {

  const [form, onChangeInputs, clearInputs] = useForm({
    nickname: "",
    email: "",
    password: ""
  })

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setPasswordValid] = useState(true)
  const [isNickNameValid, setNickNameValid] = useState(true)
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    setIsEmailValid(validateEmail(form.email))
    setPasswordValid(validatePassword(form.password))
    setNickNameValid(validadeNickname(form.nickname))
  
    try {
      const { token } =isNickNameValid && isEmailValid && isPasswordValid && await Signup({
       nickname:form.nickname,
        email: form.email,
        password: form.password
      })
      localStorage.setItem("labeddit.token", token);
      goToFeedPage(navigate)
    } catch (error) {
      alert(error.response.data)
    }
  }


  return (
    <div>
      <Header isOnSignupPage={true} />
      <Box
        spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
        align={'center'}
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        // boxShadow={'lg'}
        p={8}
        >
        <Heading fontSize={'33px'}>Olá, boas vindas ao LabEddit ;)
        </Heading>
        <Box marginTop={"245px"}>
          <Stack spacing={4}>





            <form onSubmit={onSubmit}>

              <NicknameInput isValid={isNickNameValid} value={form.nickname} onChange={onChangeInputs} />

              <EmailInput isValid={isEmailValid} value={form.email} onChange={onChangeInputs} />

              <PasswordInput isValid={isPasswordValid} value={form.password} onChange={onChangeInputs} />



              <Stack spacing={10}>
                <Stack
                  display={"flex"}

                  justify={'space-between'}>
                  <Box>
                    <Text fontSize={"14px"} textAlign={"left"}>
                      Ao continuar, você concorda com o nosso
                      <Link color={'blue.400'}> Contrato de usuário </Link>
                      e nossa
                      <Link color={'blue.400'}> Política de Privacidade</Link>
                    </Text>
                  </Box>

                  <Checkbox > <Text textAlign={"left"} fontSize={"14px"}>
                    Eu concordo em receber emails sobre coisas legais no Labeddit</Text></Checkbox>


                </Stack>
                <Button
                  type={"submit"}
                  bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
                  borderRadius={"27px"}
                  color={'white'}
                  _hover={{
                    bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                  }}
                  margin={"10px"}>
                  Cadastrar
                </Button>
              </Stack>

            </form>

          </Stack>
        </Box>
      </Box>
    </div>

  );
}