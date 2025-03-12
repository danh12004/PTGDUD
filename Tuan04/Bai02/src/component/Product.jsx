import { useEffect, useState } from "react";
import Item from "./Item";
import './product.css';


export default function Product() {

    const [arr, setArr] = useState([]);

    useEffect(() => {
        fetch("https://67c81c990acf98d07084e5f5.mockapi.io/ListProduct")
        .then((res) => {return res.json()})
        .then((data) => {return setArr(data)});
    }, [])

    console.log(arr)

    return (
        <ul>
            {arr.map((item, index) => {
                return (
                    <li key={index}><Item text={item.name} image={item.image}></Item></li>
                )
            })}
        </ul>
    );
}
