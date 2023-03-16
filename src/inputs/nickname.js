
import {
    FormControl,
    Input,
    InputGroup,
    FormErrorMessage,
} from '@chakra-ui/react';


export const NicknameInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl margin={"10px"}  id="nickname" isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input focusBorderColor={'#FE7E02'}
                    placeholder="Apelido"
                    _placeholder={{ color: 'gray.500' }}
                    name="nickname"
                    value={value}
                    onChange={onChange} />
            </InputGroup>
            {!isValid ? (<FormErrorMessage>Apelido deve ter ao menos dois caracteres.</FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}