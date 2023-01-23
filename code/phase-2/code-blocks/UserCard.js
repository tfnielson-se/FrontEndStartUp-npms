function UserCard({firstName, age, gender}) {
    return(
        <div className="user-card">
            <h3>Name: {firstName}</h3>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}

export default UserCard;

