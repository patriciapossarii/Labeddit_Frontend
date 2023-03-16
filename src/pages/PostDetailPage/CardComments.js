import { Card, CardBody, } from "@chakra-ui/card";
import { TbArrowBigDown, TbArrowBigUp } from 'react-icons/tb';
import {
    Flex,
    Text,
} from '@chakra-ui/react';
import { GoComment } from 'react-icons/go';
import {useState } from "react";
import { goToPostDetailPage } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom';
import { CreateLikeDislikeComment } from "../../constants/url";



export default function CardComments({ idPost, id, creator, content, likesDislikes, totalComments }) {

    const [liked, setLiked] = useState();
    const [disliked, setDisliked] = useState();
 


    const navigate = useNavigate()

    const onClickCard = (id) => {
        goToPostDetailPage(navigate, id)

    }

    const onclickLiked = (e) => {
        onSubmitLike(true)
        if (liked === true) {
            setLiked(false)
        } else {
            setLiked(true)
        }
        setDisliked(false)
    }


    const onSubmitLike = async (e) => {

        try {
            console.log("aquiiiii", e)
            await CreateLikeDislikeComment(idPost, {
                like: e
            }, id)

            alert("like ou dislike");

        } catch (error) {
            alert(error.response.data)
        }

    }




    const onclickDisliked = (e) => {
                onSubmitLike(false)
        if (disliked === true) {
            setDisliked(false)
        } else {
            setDisliked(true)
        }
        setLiked(false)
    }

    /*
 useEffect (() => {
        if (liked.length>0) {
            const likedString = JSON.stringify(liked)
            localStorage.setItem("like", likedString)
        }
    })
*/


    //idPost,body,idComment

    /*
       const onSubmitLike = async (e) => {
           e.preventDefault()
                   try {
              await CreateLikeDislikeComment(id, {
               content: form.content
             })
             alert("Comentário Cadastrado");
       
           } catch (error) {
             alert(error.response.data)
           }
         }
   */


    console.log("like", liked)
    console.log("disliked", disliked)
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

                        onClick={() => onclickLiked()}>


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
                        onClick={() => onclickDisliked()}>
                        {disliked ? (
                            <TbArrowBigDown color={"#6F6F6F"} fill="red" fontSize={'24px'} />
                        ) : (
                            <TbArrowBigDown color={"#6F6F6F"} fontSize={'24px'} />
                        )}
                    </Flex>
                </Card>

                <Card align='center' margin={"20px"} width={"66px"} height={"28px"} direction={"row"} borderRadius={"28px"}
                    colorScheme='ECECEC' variant='outline' bg={"#FBFBFB"} justifyContent={"space-around"} onClick={() => onClickCard(id)}>

                    <GoComment color={"#6F6F6F"} margin={"5px"} />
                    <Text margin={"5px"}>{totalComments}</Text>

                </Card>

            </Flex>

        </Card>
    );
}
