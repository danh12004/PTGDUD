import './AdminPage.css'

export default function AdminPage() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <h2>My Header</h2>
                </div>
                <div className="menu">
                    <a href="#">Link 1</a><br />
                    <a href="#">Link 2</a><br />
                    <a href="#">Link 3</a>
                </div>
                <div className="content">
                    <h3>OverView</h3>
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