import { Divider, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { CreatePost, ListPosts, validaNewPost } from "../../constants/url";
import CardPosts from "./CardPosts";
import { useForm } from "../../hooks/use-form";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/coordinator";
import CardNewPostAndComment from "../../inputs/CardNewPostAndComment";


export default function FeedPage() {

  const [form, onChangeInputs, clearInputs] = useForm({
    content: ""
   
  })

  const [isPostValid, setIsPostValid] = useState(true)
  const navigate = useNavigate()



  const onSubmit = async (e) => {
    e.preventDefault()
 
    setIsPostValid(validaNewPost(form.content))
    goToFeedPage(navigate)
      
    try {
    isPostValid && await CreatePost({
        content: form.content
      })
      
      alert("Post Cadastrado");
      console.log()

    } catch (error) {
      alert(error.response.data)
    }

    
  }





  //-----------------------
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (posts.length > 0) {
      const postsString = JSON.stringify(posts)
      localStorage.setItem("posts", postsString)
    }

    const postsGet = localStorage.getItem("posts")
    if (postsGet !== null) {
      const postsArray = JSON.parse(postsGet)
      setPosts(postsArray)
    }

    ListPosts()

      .then(data => {
        setPosts(data)
        console.log(data)

      })

      
      .catch((error) => {
       console.log(error.response.data.message)
      }
      )
  }, [])

  if (!posts) {
    return <Spinner color='red.500' />;
  }

  /*
  useEffect(() => {
    if (posts.length > 0) {
      const postsString = JSON.stringify(posts)
      localStorage.setItem("posts", postsString)
    }
  }, [posts])


  useEffect(() => {
    const postsGet = localStorage.getItem("posts")
    if (postsGet !== null) {
      const postsArray = JSON.parse(postsGet)
      setPosts(postsArray)
    }
  }, [])
*/

  return (
    <>
      <Header isOnFeedPage={true} />

      <CardNewPostAndComment  isValid={isPostValid} value={form.content} onChange={onChangeInputs} onSubmit={onSubmit}
      placeholder='Escreva seu post...' buttonName='Postar'/>

      <Divider borderColor={'#FE7E02'} />

      {posts.map((post, i) => (
        <CardPosts key={post.id} id={post.id} content={post.content}
          creator={post.creator.nickname} likesDislikes={post.likesDislikes}
          totalComments={post.comments}
        />

      ))}
    </>
  );
}
