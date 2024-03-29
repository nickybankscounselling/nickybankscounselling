import {useNavigate} from "react-router-dom";
import {OutletHeader} from "../components/OutletHeader.jsx";
import {useEffect, useState} from "react";
import {avatars, getUsers} from "../api.jsx";
import {DeleteData} from "../functions/PostData.jsx";

function UserRow({ user, counter, setCounter, variables }) {
	
	const [buttons, setButtons] = useState({ deleteButton: 'Delete' })
	
	const deleteRow = async ( event ) => {
		await DeleteData(event, setButtons, buttons,
				'/users/' + user.username, 'userId');
		setCounter( counter + 1 );
	}
	
	return (
			<tr key={ user.userId }>
				<td>
					<div className={'square'} style={{ minWidth: '12px' }}>
						<img src={ user.filename !== null ? '/uploads/' + user.filename
								: '/uploads/' + avatars[ Math.floor(Math.random() * 10) ].filename}
							 alt={ user.alt } className={'round-image'} />
					</div>
				</td>
				
				<td>{ user.name }</td>
				<td>{ user.username }</td>
				<td>{ user.email }</td>
				<td>{ user.permission }</td>
				
				<td>
					<a href={`/${ variables.adminPath }/users/${ user.username }/edit`}>Edit</a>
					&emsp; / &emsp;
					<a className={'ul-link'} onClick={ deleteRow }>Delete</a>
				</td>
			</tr>
	)
}

function UsersTable({ users, counter, setCounter, variables }) {
	return (
			<div key={'usersTable'}>
				<table className={'table computer'}>
					<thead>
						<tr>
							<th scope={'col'}></th>
							<th scope={'col'}>Name</th>
							<th scope={'col'}>Username</th>
							<th scope={'col'}>Email</th>
							<th scope={'col'}>Permissions</th>
							<th scope={'col'}></th>
						</tr>
					</thead>
					
					<tbody>
						{ users.map( user => {
							return <UserRow key={'row' + user.userId } user={ user } counter={ counter }
											setCounter={ setCounter } variables={ variables } />
						})}
					</tbody>
				</table>
				
				<p className={'mobile'}>Please view this page on a bigger screen.</p>
			</div>
	)
}

export function Users({ cookies, variables }) {
	const navigate = useNavigate();
	
	if ( cookies.permission === 'admin' ) {
		
		const [users, setUsers] = useState([]);
		const [query, setQuery] = useState('');
		const [counter, setCounter] = useState(0);
		
		useEffect(() => {
			getUsers('', query).then( res => setUsers( res ) );
		}, [ counter, query ]);
		
		return (
				<div>
					<OutletHeader newLink={'/' + variables.adminPath + '/users/new'} newText={'Add User'} query={ query } setQuery={ setQuery } />
					
					{ users.length > 0 && <UsersTable users={ users } counter={ counter } setCounter={ setCounter } variables={ variables } /> }
				</div>
		)
	} else {
		return navigate('/' + variables.adminPath );
	}
}