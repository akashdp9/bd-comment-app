import React from 'react';
import { CommentWrapper } from './Common.style';


const Comment = ({ text, datetime }) => {
    const formattedDatetime = new Date(datetime).toLocaleString();

    return (
        <CommentWrapper>
            <p>{text}</p>
            <small>{formattedDatetime}</small>
        </CommentWrapper>
    );
};

export default Comment;
