import { useReducer, useEffect, useRef, useState } from "react";
import Item from "./Item";
import './product.css';

const actionTypes = {
    SET_PRODUCTS: "SET_PRODUCTS",
    ADD_PRODUCT: "ADD_PRODUCT",
    UPDATE_PRODUCT: "UPDATE_PRODUCT",
    DELETE_PRODUCT: "DELETE_PRODUCT",
};

const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        case actionTypes.ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case actionTypes.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, ...action.payload }
                        : product
                ),
            };
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
            };
        default:
            return state;
    }
};

export default function Product() {
    const initialState = {
        products: [],
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    const nameRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        fetch("https://67c81c990acf98d07084e5f5.mockapi.io/ListProduct")
            .then((res) => res.json())
            .then((data) => dispatch({ type: actionTypes.SET_PRODUCTS, payload: data }));
    }, []);

    const handleAddProduct = (newProduct) => {
        dispatch({ type: actionTypes.ADD_PRODUCT, payload: newProduct });
        nameRef.current.value = "";
        imageRef.current.value = "";
    };

    const handleUpdateProduct = (updatedProduct) => {
        dispatch({ type: actionTypes.UPDATE_PRODUCT, payload: updatedProduct });
        nameRef.current.value = "";
        imageRef.current.value = "";
    };

    const handleDeleteProduct = (productId) => {
        dispatch({ type: actionTypes.DELETE_PRODUCT, payload: productId });
    };

    const handleEditProduct = (product) => {
        nameRef.current.value = product.name;
        imageRef.current.value = product.image;
    };

    const handleSaveProduct = () => {
        const name = nameRef.current.value;
        const image = imageRef.current.value;

        if (!name || !image) {
            alert("Thêm đủ thông tin");
            return;
        }

        const newProduct = { id: Date.now(), name, image }; 

        const isEditing = state.products.some((product) => product.name === name && product.image === image);

        if (isEditing) {
            handleUpdateProduct(newProduct); 
        } else {
            handleAddProduct(newProduct); 
        }
    };

    return (
        <div className="product-container">
            <h1>Product List</h1>

            <div className="product-form">
                <input
                    ref={nameRef} 
                    type="text"
                    placeholder="Product Name"
                />
                <input
                    ref={imageRef} 
                    type="text"
                    placeholder="Image URL"
                />
                <button onClick={handleSaveProduct}>
                    Add Product
                </button>
            </div>

            <ul className="product-list">
                {state.products.map((item) => (
                    <li key={item.id} className="product-item">
                        <Item text={item.name} image={item.image} />
                        <button onClick={() => handleEditProduct(item)}>Edit</button>
                        <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
