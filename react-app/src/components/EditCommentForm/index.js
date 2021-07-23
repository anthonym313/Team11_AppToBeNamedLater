import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { editComment } from '../../store/comment';

const EditCommentForm = ({ comment }) => {
	const dispatch = useDispatch();
	const [editOneComment, setEditOneComment] = useState(comment.comment);
	const [showForm, setShowForm] = useState(false);
	const loggedInUser = useSelector((state) => state.session.user);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(
			editComment({
				image_id: comment.image_id,
				user_id: loggedInUser,
				comment: editOneComment,
			})
		);
		setEditOneComment('');
	};

	useEffect(() => {}, [dispatch, editOneComment]);

	return (
		<form onSubmit={onSubmit}>
			<div>
				{console.log('comment div', comment.comment)}
				<textarea
					label='Edit Comment'
					placeholder={comment.comment}
					value={editOneComment}
					onChange={(e) => setEditOneComment(e.target.value)}
				></textarea>
				<button type='submit'>Post</button>
			</div>
		</form>
	);
};

export default EditCommentForm;
