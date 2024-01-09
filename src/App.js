import React, { useState } from 'react';
import CommentList from './component/CommentList';
import CommentForm from './component/CommentForm';
import { Content } from './component/Common.style'

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (text) => {
    const newComment = {
      id: Date.now(),
      text,
      datetime: new Date(),
    };
    setComments([newComment, ...comments]);
  };

  return (
    <Content >
      <h1>Comment App</h1>
      <CommentForm onCommentSubmit={addComment} />
      <CommentList comments={comments} />
    </Content>
  );
}

export default App;
