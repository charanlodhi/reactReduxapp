import { useGetUserByIdQuery } from "../services/UsersService";

const User = ({props}) =>{
    const {data, isLoading, isError} = useGetUserByIdQuery()
    console.log("user", props)
    return(
        <>
            {/* {
                data.map((name, username, email) => (
                    <div>
                        <h2>{name}</h2>
                        <p>{username}</p>
                        <p>{email}</p>
                    </div>
                ))
            } */}
        </>
    )
}

export default User;