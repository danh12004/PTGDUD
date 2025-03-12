import Product from "./Product.jsx"
import "./content.css";

export default function Content() {
    return (
        <div>
            <content className="flex justify-center items-center h-screen bg-white">
                <div className="container flex">
                    <aside className="filters">
                        <h3><i className="fa-solid fa-bars"></i> FILTERS</h3>
            
                        <h4>Type</h4>
                        <div className="filter-group">
                            <div className="group1">
                                <label><input type="checkbox" />Pan-fried</label>
                                <label><input type="checkbox" checked />Grilled</label>
                                <label><input type="checkbox" />Sauteed</label>
                                <label><input type="checkbox" />Steamed</label>
                            </div>

                            <div className="group2">
                                <label><input type="checkbox" />Stir-fried</label>
                                <label><input type="checkbox" checked />Roasted</label>
                                <label><input type="checkbox" />Baked</label>
                                <label><input type="checkbox" />Stewed</label>
                            </div>
                        </div>
            
                        <div className="filter-time">
                            <h4>Time</h4>
                            <input type="range" min="30" max="50" value="40" />
                            <span>30 minutes - 50 minutes</span>
                        </div>
            
                        <h4 className="f4">Rating</h4>
                        <div className="filter-star">
                            <div><input type="checkbox" /> ⭐⭐⭐⭐⭐</div>
                            <div><input type="checkbox" /> ⭐⭐⭐⭐☆</div>
                            <div><input type="checkbox" checked /> ⭐⭐⭐☆☆</div>
                            <div><input type="checkbox" checked /> ⭐⭐☆☆☆</div>
                        </div>
            
                        <button className="apply-btn">Apply</button>
                    </aside>
            
                    <main className="no-results w-full">
                        <Product />
                    </main>
                </div>
            </content>
        </div>
    );
}
