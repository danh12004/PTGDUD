import Header from '../components/Header';
import Menu from '../components/Menu';
import Overview from '../components/Overview';
import Footer from '../components/Footer';
import './AdminPage.css'

export default function AdminPage() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <Header />
                </div>
                <div className="menu border-r-1">
                    <Menu />
                </div>
                <div className="content">
                    <Overview />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}