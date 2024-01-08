import {OutletHeader} from "../components/OutletHeader.jsx";
import {useEffect, useState} from "react";
import {getImages} from "../api.jsx";
import {ImageGrid} from "../components/ImageGrid.jsx";

export function Images({ variables }) {
	
	const [images, setImages] = useState([]);
	const [limit, setLimit] = useState(16);
	const [counter, setCounter] = useState(0);
	
	useEffect(() => {
		getImages( limit ).then( res => setImages(res ) );
	}, [ counter ]);
	
	return (
			<div>
				<OutletHeader newLink={ '/' + variables.adminPath + '/images/upload'} newText={'Upload Image'} />
				{ images.length > 0 && <div>
					<ImageGrid images={ images } counter={ counter } setCounter={ setCounter } />
					<a onClick={ () => {
						setLimit( limit + 16 );
						setCounter( counter + 1 );
					}} className={'see-more-button'}><p>See more</p></a>
				</div> }
			</div>
	)
}