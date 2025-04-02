export default function Header() {
    return (
        <div className="flex justify-between items-center border-b-1 py-4 px-6 h-15">
            <h2 className="font-bold text-2xl text-pink-500">Dashboard</h2>
            
            <div className="flex items-center space-x-6">
                <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                    <img src="./public/Search.png" alt="Search" className="mr-2" />
                    <input
                        type="text"
                        className="bg-gray-100 rounded-lg focus:outline-none"
                        placeholder="Search..."
                    />
                </div>
                
                <img src="./public/Bell 1.png" alt="Notifications" className="w-6 h-6" />
                <img src="./public/Question 1.png" alt="Help" className="w-6 h-6" />
                <img src="./public/Avatar 313.png" alt="Avatar" className="w-8 h-8 rounded-full" />
            </div>
        </div>
    );
}
