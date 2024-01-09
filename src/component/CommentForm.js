import React, { useState } from 'react';
import { CommentArea } from './Common.style'

const CommentForm = ({ onCommentSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onCommentSubmit(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <CommentArea>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a comment..."
            />
            <button type="submit">Submit</button>
            </CommentArea>
            
        </form>
    );
};

export default CommentForm;
