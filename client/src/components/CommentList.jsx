// src/components/CommentList.jsx
import React from 'react';
import './CommentList.css';

const CommentList = ({ comments }) => {
    return (
        <ul className="comment-list">
            {comments.map((comment) => (
                <li key={comment._id}>
                    {/* Acceder a comment.author.username para obtener el nombre */}
                    <strong>{comment.author.username}:</strong> {comment.content}
                </li>
            ))}
        </ul>
    );
};

export default CommentList;
