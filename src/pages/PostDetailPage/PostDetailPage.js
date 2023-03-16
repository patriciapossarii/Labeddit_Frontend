import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CreateComment, PostWithComments, validaNewPost } from "../../constants/url";
import { Divider, Text } from "@chakra-ui/react";
import CardComments from "./CardComments";
import CardNewPostAndComment from "../../inputs/CardNewPostAndComment";
import { useForm } from "../../hooks/use-form";
import CardPosts from "../FeedPage/CardPosts";


export default function PostDetailPage() {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [form, onChangeInputs, clearInputs] = useForm({
    content: ""

  })
  useEffect(() => {
    PostWithComments(id)

      .then(data => {
        setComments(data.comments)


      })
      .catch((error) => {
        console.log(error.response.data.message)
      }
      )
  }, [])



  const [isCommentValid, setIsCommentValid] = useState(true)
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsCommentValid(validaNewPost(form.content))


    try {
      isCommentValid && await CreateComment(id, {
        content: form.content
      })

      alert("Comentário Cadastrado");


    } catch (error) {
      alert(error.response.data)
    }


  }


  return (
    <>
      <Header isOnPostDetailPage={true} />

      <CardPosts key={comments.idPost} id={comments.idPost} content={comments.content}
        creator={comments.nickname} likesDislikes={comments.likesDislikes}
        totalComments={comments.qtdComments} />

      <CardNewPostAndComment isValid={isCommentValid} value={form.content} onChange={onChangeInputs} onSubmit={onSubmit}
        placeholder='Adicionar comentário' buttonName='Responder' />

      <Divider borderColor={'#FE7E02'} />

      {comments.map((comment, i) => (
        <CardComments key={comment.idComment} id={comment.idComment} content={comment.contentComment}
          creator={comment.nickname} likesDislikes={comment.likesDislikes}

        />

      ))}


    </>
  );
}
