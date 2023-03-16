import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import AddCommentPage from "../pages/AddCommentPage/AddCommentPage";
import AddPostPage from "../pages/AddPostPage/AddPostPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/add-post" element={<AddPostPage />} />
        <Route path="/add-comment" element={<AddCommentPage/>} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
