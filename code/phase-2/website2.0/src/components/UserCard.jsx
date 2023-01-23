// [<0>]

function UserCard({ userData }) {

	return (
		<div className="user-card">
			<h2>Name: {userData.name}</h2>
			<h3>Contact</h3>
            <p>Email: {userData.email}</p>
            <p>#: {userData.phone}</p>
		</div>
	);
}

export default UserCard;
