import {EditPostForm} from "../../components/EditPostForm.jsx";
import {useEffect, useState} from "react";
import {DeleteData, PostData} from "../../functions/PostData.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {getPostById} from "../../api.jsx";
import {DatetimeStrings} from "../../components/Datetime.jsx";

export function EditPost({ showDelete, cookies, variables }) {
	
	const [post, setPost] = useState({ postId: 0 });
	const [quill, setQuill] = useState(post.content);
	const [counter, setCounter] = useState(0);
	const navigate = useNavigate();
	const [buttons, setButtons] = useState({
		deleteButton: 'Delete',
		saveButton: 'Save Draft',
		publishButton: 'Publish'
	});
	
	const { postId } = useParams();
	if (postId !== undefined) {
		useEffect(() => {
			getPostById(postId).then(res => {
				setQuill( res.content );
				
				if (res.datePublished !== null) {
					const strings = DatetimeStrings(res.datePublished);
					
					setPost({
						...res,
						date: strings.date,
						month: new Date(res.datePublished).toISOString().slice(5, 7),
						year: strings.year
					});
				} else {
					setPost({
						...res,
						date: '',
						month: '',
						year: ''
					});
				}
			});
		}, [counter]);
	}
	
	
	// Post Data
	
	const deletePost = async (event) => {
		await DeleteData(event, setButtons, buttons, 'posts/' + post.postId, 'postId');
		navigate('/' + variables.adminPath + '/posts')
	}
	
	const saveDraft = async ( event ) => {
		await PostData(event, setButtons, buttons, 'saveButton', 'Save Draft',
				'Saving...', 'Post Saved', 'posts/' + post.postId,
				{ ...post, content: quill, StatusStatusId: 1, username: cookies.username }, 'postId', setPost
		);
		setCounter(counter + 1);
	}
	
	const publishPost = async ( event ) => {
		await PostData( event, setButtons, buttons, 'publishButton', 'Publish',
				'Publishing...', 'Published', 'posts/' + post.postId,
				{ ...post, content: quill, StatusStatusId: 2, datePublished: new Date(), username: cookies.username },
				'postId', setPost
		);
		setCounter(counter + 1);
	}
	
	return <EditPostForm post={ post } setPost={ setPost } deletePost={ deletePost } saveDraft={ saveDraft }
						 publishPost={ publishPost } buttons={ buttons } showDelete={ showDelete } backUrl={'/' + variables.adminPath + '/posts'}
						 quill={ quill } setQuill={ setQuill } />
}