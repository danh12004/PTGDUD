import { useEffect, useState } from 'react';

export default function Overview() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://67f37d4aec56ec1a36d60033.mockapi.io/overview")
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(err => console.error("Failed to fetch:", err));
    }, []);

    // Hàm hỗ trợ để chọn màu nền và icon theo title
    const getCardStyle = (title) => {
        switch (title.toLowerCase()) {
            case 'turnover':
                return {
                    bg: 'bg-pink-100',
                    icon: './public/Button 1509.png'
                };
            case 'profit':
                return {
                    bg: 'bg-blue-50',
                    icon: './public/Button 1529.png'
                };
            case 'new customer':
                return {
                    bg: 'bg-blue-50',
                    icon: './public/Button 1530.png'
                };
            default:
                return {
                    bg: 'bg-gray-100',
                    icon: ''
                };
        }
    };

    return (
        <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
                <img src="./public/Squares four 1.png" alt="logo" />
                <p className="text-lg font-bold">Overview</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((item, index) => {
                    const { bg, icon } = getCardStyle(item.title);
                    return (
                        <div key={index} className={`${bg} p-6 rounded-2xl shadow-md flex flex-col gap-2`}>
                            <div className="flex justify-between items-center">
                                <p className="text-500 font-bold">{item.title}</p>
                                {icon && <img src={icon} alt="" className={bg} />}
                            </div>
                            <p className="text-3xl font-bold">{item.value}</p>
                            <p className="text-green-500 text-sm">{item.change}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
