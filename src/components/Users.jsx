import { useDispatch, useSelector } from "react-redux";

const Users = () => {   
    const users = useSelector((state) => state.data);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Lista de Usuarios de JSON Placeholder</h2>
            <ul>
                <li>Usuarios</li>
            </ul>
        </>
    )
}

export default Users;
