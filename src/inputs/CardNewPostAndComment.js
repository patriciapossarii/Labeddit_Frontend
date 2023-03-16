import { Card, Input, Textarea, Button, Box, Stack, InputGroup, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "../hooks/use-form";





export default function CardNewPostAndComment({ isValid, value, onChange, onSubmit,placeholder,buttonName }) {




    return (
        <>
            <Stack margin={"30px"} isValid={!isValid} onSubmit={onSubmit} >
                <form >
                    <Card bg={"#FBFBFB"}>
                        <Textarea name="content"
                            borderColor={"#E0E0E0"}
                            focusBorderColor='#FE7E02'
                            rows={6}
                            resize="none"
                            value={value}
                            onChange={onChange} placeholder={placeholder} >
                            {!isValid ? (<FormErrorMessage>O Posto deve ter ao menos dois caracteres.</FormErrorMessage>
                            ) : undefined}
                        </Textarea>
                    </Card>
                    
                    <Button width={"100%"}
                        marginTop={"20px"}
                        type={"submit"}
                        bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
                        borderRadius={"27px"}
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                        }}

                        variant='add-post'

                    >
                      {buttonName}
                    </Button>

                </form>
            </Stack>

        </>
    );
}
