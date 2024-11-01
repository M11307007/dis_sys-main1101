import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Get All Users</Link>
                </li>
                <li>
                    <Link to="/">Post User</Link>
                </li>

            </ul>
        </nav>
        <Outlet/>
        </>
    );
};

export default Layout;