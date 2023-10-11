import {useEffect, useState} from "react";
import {getPageById} from "../api.jsx";
import parse from 'html-react-parser';

export default function Page({ id }) {
	
	const [page, setPage] = useState({});
	
	useEffect(() => {
		getPageById( id ).then( res => setPage(res) );
	}, []);
	
	if ( page.pageId ) {
		return (
				<div>
					<h1 className={'text-center'}>{page.title}</h1>
					
					<section>
						{page.filename &&
								<img src={'/uploads/' + page.filename} alt={page.alt} className={'float-img'}/>}
						{parse(`<div>${page.content}</div>`)}
					</section>
				</div>
		)
	}
}