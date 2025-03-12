import "./footer.css";

export default function Footer() {
    return (
        <div>
            <footer className="flex justify-around p-4">
                <div className="footer-left">
                    <h3>About Us</h3>
                    <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="footer-subscribe">
                        <input type="email" placeholder="Enter your email" />
                        <button>Send</button>
                    </div>
                    
                    <div className="footer-bottom">
                        <div className="logo1">
                            <img src="../public/Group 16.png" />
                        </div>
                        <p>© 2025 Cheffiy Company | Terms of Service | Privacy Policy</p>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-links">
                        <div className="footer-links">
                            <h3>Learn more</h3>
                            <ul>
                                <li><a href="#">Our Cooks</a></li>
                                <li><a href="#">See Our Features</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>

                        <div className="footer-links shop-detail">
                            <h3>Shop</h3>
                            <ul>
                                <li><a href="#">Gift Subscription</a></li>
                                <li><a href="#">Send Us Feedback</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Recipes</h3>
                        <ul>
                            <li><a href="#">What to Cook This Week</a></li>
                            <li><a href="#">Pasta</a></li>
                            <li><a href="#">Dinner</a></li>
                            <li><a href="#">Healthy</a></li>
                            <li><a href="#">Vegetarian</a></li>
                            <li><a href="#">Vegan</a></li>
                            <li><a href="#">Christmas</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
