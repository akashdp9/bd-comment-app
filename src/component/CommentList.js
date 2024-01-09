import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <Comment key={comment.id} text={comment.text} datetime={comment.datetime} />
            ))}
        </div>
    );
};

export default CommentList;
