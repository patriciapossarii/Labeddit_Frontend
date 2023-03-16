import { Card, CardBody, } from "@chakra-ui/card";
import { TbArrowBigDown, TbArrowBigUp } from 'react-icons/tb';
import {
    Flex,
    Text,
} from '@chakra-ui/react';
import { GoComment } from 'react-icons/go';
import { useState } from "react";
import { goToPostDetailPage } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom';

export default function CardComments({ id, creator, content, likesDislikes, totalComments }) {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToPostDetailPage(navigate, id)


    }

    return (
        <Card margin={"30px"} bg={"#FBFBFB"} borderColor={"#E0E0E0"} >


            <Text color={"#6F6F6F"} fontSize={"12px"} align={"left"} position={"absolute"} margin={"10px"}>
                Enviador por:&nbsp; {creator}
            </Text>





            <CardBody marginTop={"30px"} marginLeft={"-10px"}>
                <Text fontStyle={"regular"} fontSize={"18px"} align={"left"}>{content}</Text>
            </CardBody>


            <Flex align='center' bg={"#FBFBFB"} direction={"row"} >

                <Card align='center' margin={"20px"} width={"98px"} height={"28px"} bg={"#FBFBFB"} direction={"row"} borderRadius={"28px"}
                    colorScheme='ECECEC' variant='outline' justifyContent={"space-around"}>
                    <Flex
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}

                        onClick={() => setLiked(!liked)}>
                        {liked ? (
                            <TbArrowBigUp color={"#6F6F6F"} fill="green" fontSize={'24px'} />
                        ) : (
                            <TbArrowBigUp color={"#6F6F6F"} fontSize={'24px'} />
                        )}
                    </Flex>

                    <Text>{likesDislikes}</Text>

                    <Flex
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        onClick={() => setDisliked(!disliked)}>
                        {disliked ? (
                            <TbArrowBigDown color={"#6F6F6F"} fill="red" fontSize={'24px'} />
                        ) : (
                            <TbArrowBigDown color={"#6F6F6F"} fontSize={'24px'} />
                        )}
                    </Flex>
                </Card>

             

            </Flex>

        </Card>
    );
}
