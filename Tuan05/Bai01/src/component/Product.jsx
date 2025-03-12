import { useEffect, useState } from "react";
import Item from "./Item";

export default function Product() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("https://67c81c990acf98d07084e5f5.mockapi.io/ListProduct")
            .then((res) => res.json())
            .then((data) => setArr(data));
    }, []);

    return (
        <div className="flex justify-center mt-6">
            <ul className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl px-4">
                {arr.map((item, index) => (
                    <li key={index} className="flex justify-center">
                        <Item text={item.name} image={item.image} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
