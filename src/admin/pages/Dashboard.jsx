import {DashboardHeader} from "../components/DashboardHeader.jsx";
import {useEffect, useState} from "react";
import {getAnalytics, getRecents} from "../api.jsx";
import { LineGraph } from "../functions/Graphs.jsx";
import {DatetimeStrings} from "../components/Datetime.jsx";

function RecentCard({ cardTitle, recents, seeAllLink, variables }) {
	return (
		 <div className={'recent-card'}>
			 <div className="card">
				 <div className="card-body">
					 <div className={'row justify-content-between'}>
						 <div className={'col-auto'}>
							 <h5 className="card-title">{ cardTitle }</h5>
						 </div>
						 <div className={'col-auto'}>
							 <a href={ '/' + variables.adminPath + '/' + seeAllLink } className={'card-title'}>See All</a>
						 </div>
					 </div>
					
					 { recents.map( r => {
						 
						 let url;
						 if ( r.testimonialId !== undefined ) { url = 'testimonials'}
						 else if ( r.postId !== undefined ) { url = 'posts' }
						 else if ( r.pageId !== undefined ) { url = 'pages' }
						 
						 return (
								 <div key={ r.testimonialId || r.pageId || r.postId } className={'recent-box'}>
									 { (r.filename && true)
											 ? <div className={'row'}>
													 <div className={'col-2'}>
														 <div className={'square'}>
															 <img src={'/uploads/' + r.filename} alt={r.alt} className={'round-image'} />
														 </div>
													 </div>
													 <div className={'col-10'}>
														 <a href={`/${variables.adminPath}/${url}/${r.testimonialId || r.postId || r.pageId}/edit`}>
															 { r.testimonialAuthor
																	 ? r.testimonialAuthor
																	 : r.title.length > 23
																			 ? r.title.slice(0, 23) + '...'
																			 : r.title
															 }
														 </a>
													 </div>
									 </div>
											 : <a href={`/${variables.adminPath}/${url}/${r.testimonialId || r.postId || r.pageId}/edit`}
												className={'recent-title'}>
												 { r.testimonialAuthor
														 ? r.testimonialAuthor
														 : r.title.length > 23
																 ? r.title.slice(0, 23) + '...'
																 : r.title
												 }
											 </a>
									 }
								 </div>
						 )
					 }) }
				 </div>
			 </div>
		 </div>
	)
}

function AnalyticsGraph({ analytics }) {
	return (
			<div className={'analytics-overview'}>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Overview</h5>
						<div className={'analytics-line-graph'}>
							<LineGraph chartData={ analytics } plugins={{}} />
						</div>
					</div>
				</div>
			</div>
	)
}

export function Dashboard({ cookies, variables }) {
	
	const [recents, setRecents] = useState({});
	const [analytics, setAnalytics] = useState({});
	
	useEffect(() => {
		getRecents().then( res => setRecents(res) );
		getAnalytics().then( res => {
			const chartData = {
				labels: res.map((data) => DatetimeStrings(data.datetime).day),
				datasets: [
					{
						data: res.map((data) => data.views),
						borderColor: '#624F81',
						borderWidth: 1
					}
				]
			}

			setAnalytics( chartData );
		})
	}, []);
	
	return (
			<div className={'dashboard'}>
				<DashboardHeader cookies={ cookies } />
				
				<div className={'row gy-3'}>
					{ recents.posts !== undefined && recents.posts.length > 0 && <div className={'col-md-6 col-xl-4'}>
						<RecentCard cardTitle={'Recent Posts'} recents={recents.posts} seeAllLink={'posts'} variables={variables} />
					</div> }
					
					{ recents.pages !== undefined && recents.pages.length > 0 && <div className={'col-md-6 col-xl-4'}>
						<RecentCard cardTitle={'Recent Pages'} recents={recents.pages} seeAllLink={'pages'} variables={variables} />
					</div> }
					
					{ recents.testimonials !== undefined && recents.testimonials.length > 0 && <div className={'col-md-6 col-xl-4'}>
						<RecentCard cardTitle={'Recent Testimonials'} recents={recents.testimonials} seeAllLink={'testimonials'} variables={variables} />
					</div> }
					
					{ analytics.datasets && <div className={'col-12 col-md-6 col-xl-12'}>
						<AnalyticsGraph analytics={ analytics } />
					</div> }
				</div>
			</div>
	)
}