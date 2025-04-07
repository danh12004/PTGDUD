import Header from '../components/Header';
import Menu from '../components/Menu';
import Overview from '../components/Overview';
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
                    <h4>Table</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Column 1</th>
                                <th>Column 2</th>
                                <th>Column 3</th>
                                <th>Column 4</th>
                                <th>Column 5</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr>
                                <td>Danh</td>
                                <td>Danh</td>
                                <td>Danh</td>
                                <td>Danh</td>
                                <td>Danh</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}