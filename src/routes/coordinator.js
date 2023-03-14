export const goToLoginPage = (navigator) => {
    navigator("/login")
}
export const goToSignupPage = (navigator) => {
    navigator("/signup")
}

export const goToFeedPage = (navigator) => {
    navigator("/feed")
}
export const goToAddPost = (navigator) => {
    navigator("/add-post")
}
export const goToAddComment = (navigator) => {
    navigator("/add-comment")
}
export const goToPostDetailPage = (navigator,postId) => {
    navigator(`/post/${postId}`)
}
/*
<Route path="/login" element={<LoginPage />} />
<Route path="/signup" element={<SignupPage />} />
<Route path="/feed" element={<FeedPage />} />
<Route path="/add-post" element={<AddPostPage />} />
<Route path="/add-comment" element={<AddCommentPage/>} />
<Route path="/post/:id" element={<PostDetailPage />} />
<Route path="*" element={<NotFoundPage />} />
*/

/*
export const goToDetailsPage = (navigate, recipepostId) => {
    navigate(`/posts/${postId}`)
}
*/