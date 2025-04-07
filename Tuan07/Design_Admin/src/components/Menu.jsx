import { useState } from "react";
import { Link } from 'react-router'; 

export default function Menu() {
    const [active, setActive] = useState("Dashboard");

    const handleClickActive = (menuItem) => {
        setActive(menuItem);
    };

    return (
        <div>
            <img src="./public/Logo.png" alt="" />
            <div
                onClick={() => handleClickActive("Dashboard")}
                className={`mt-3 text-semini-400 flex items-center p-2 rounded-lg ${
                    active === "Dashboard" ? "bg-pink-500 text-white font-bold" : ""
                }`}
            >
                <img src="./public/Squares four 1.png" alt="" />
                <Link to="/" className="ml-3">Dashboard</Link>
            </div>
            <div
                onClick={() => handleClickActive("Projects")}
                className={`mt-3 text-semini-400 flex items-center p-2 rounded-lg ${
                    active === "Projects" ? "bg-pink-500 text-white font-bold" : ""
                }`}
            >
                <img src="./public/Folder.png" alt="" />
                <Link to="/projects" className="ml-3">Projects</Link>
            </div>
            <div
                onClick={() => handleClickActive("Teams")}
                className={`mt-3 text-semini-400 flex items-center p-2 rounded-lg ${
                    active === "Teams" ? "bg-pink-500 text-white font-bold" : ""
                }`}
            >
                <img src="./public/Groups.png" alt="" />
                <Link to="/teams" className="ml-3">Teams</Link>
            </div>
            <div
                onClick={() => handleClickActive("Analytics")}
                className={`mt-3 text-semini-400 flex items-center p-2 rounded-lg ${
                    active === "Analytics" ? "bg-pink-500 text-white font-bold" : ""
                }`}
            >
                <img src="./public/Pie chart.png" alt="" />
                <Link to="/analytics" className="ml-3">Analytics</Link>
            </div>
            <div
                onClick={() => handleClickActive("Messages")}
                className={`mt-3 text-semini-400 flex items-center p-2 rounded-lg ${
                    active === "Messages" ? "bg-pink-500 text-white font-bold" : ""
                }`}
            >
                <img src="./public/Chat.png" alt="" />
                <Link to="/messages" className="ml-3">Messages</Link>
            </div>
            <div
                onClick={() => handleClickActive("Integration")}
                className={`mt-3 text-semini-400 flex items-center p-2 rounded-lg ${
                    active === "Integration" ? "bg-pink-500 text-white font-bold" : ""
                }`}
            >
                <img src="./public/Code.png" alt="" />
                <Link to="/integration" className="ml-3">Integration</Link>
            </div>

            <div className="mt-10 p-5 text-center bg-blue-100">
                <img src="./public/Group.png" alt="" className="mb-5"/>
                <a href="" className="p-2 bg-white rounded-lg border">Try now</a>
            </div>
        </div>
    );
}


