import "./header.css";

export default function Header() {
    return (
        <div>
            <header className="flex justify-between items-center">
                <div className="flex items-center mr-1">
                    <img src="../public/Group 9.png" alt="Logo" />
                </div>
                <div className="search-bar flex">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search..." />            
                </div>
                <nav className="mr-2">
                    <ul className="list-none flex font-bold">
                        <li><a href="#">What to Cook</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Ingredients</a></li>
                        <li><a href="#">Occasions</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>
                <div className="profile">
                    <button className="recipe-btn border-none mr-2">Your Recipe Box</button>
                    <div className="user">
                        <img src="../public/Avatar 35.png" alt="User Avatar" />
                    </div>
                </div>
            </header>
        </div>
    );
}
