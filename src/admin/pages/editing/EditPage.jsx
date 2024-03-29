import {DeleteData, PostData} from "../../functions/PostData.jsx";
import {useEffect, useState} from "react";
import {EditPostForm} from "../../components/EditPostForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {getPageById} from "../../api.jsx";
import {DatetimeStrings} from "../../components/Datetime.jsx";

export function EditPage({ showDelete, cookies, variables }) {
	
	const [page, setPage] = useState({ pageId: 0 });
	const [quill, setQuill] = useState('');
	const [counter, setCounter] = useState(0);
	const navigate = useNavigate();
	const [buttons, setButtons] = useState({
		deleteButton: 'Delete',
		saveButton: 'Save Draft',
		publishButton: 'Publish'
	});
	
	const { pageId } = useParams();
	if (pageId !== undefined) {
		useEffect(() => {
			getPageById(pageId).then( res => {
				setQuill( res.content );
				
				if ( res.datePublished !== null ) {
					const strings = DatetimeStrings(res.datePublished);
					
					setPage({
						...res,
						date: strings.date,
						month: new Date( res.datePublished ).toISOString().slice(5, 7),
						year: strings.year
					});
				} else {
					setPage({
						...res,
						date: '',
						month: '',
						year: ''
					});
				}
			} );
		}, [ counter ])
	}
	
	// Post Data
	
	const deletePost = async (event) => {
		await DeleteData(event, setButtons, buttons, 'pages/' + page.pageId, 'pageId');
		navigate('/' + variables.adminPath + '/pages')
	}
	
	const saveDraft = async ( event ) => {
		await PostData(event, setButtons, buttons, 'saveButton', 'Save Draft',
				'Saving...', 'Page Saved', 'pages/' + page.pageId,
				{ ...page, content: quill, StatusStatusId: 1, UserUserId: cookies.userId }, 'pageId', setPage
		);
		setCounter( counter + 1);
	}
	
	const publishPost = async ( event ) => {
		await PostData( event, setButtons, buttons, 'publishButton', 'Publish',
				'Publishing...', 'Published', 'pages/' + page.pageId,
				{ ...page, content: quill, StatusStatusId: 2, UserUserId: cookies.userId },
				'pageId', setPage
		);
		setCounter( counter + 1);
	}
	
	return <EditPostForm post={ page } setPost={ setPage } deletePost={ deletePost } saveDraft={ saveDraft }
						 publishPost={ publishPost } buttons={ buttons } showDelete={ showDelete } backUrl={'/' + variables.adminPath + '/pages'}
						 quill={ quill } setQuill={ setQuill } />
}