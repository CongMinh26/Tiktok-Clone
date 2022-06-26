import Header from '../components/Header';
import Sidebar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
