import Header from './Header';
import Slidebar from './Slidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="containner">
                <Slidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
