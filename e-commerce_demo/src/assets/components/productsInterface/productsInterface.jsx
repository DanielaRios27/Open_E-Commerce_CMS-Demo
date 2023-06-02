import React, { useState, useEffect, useContext } from 'react';
import categoriesData from '/src/assets/productos.json';
import styles from './productsInterface.module.css';
import { CartProvider, CartContext } from './cartContext';

function ShoppingCart({ cartItems }) {
    return (
        <div>
            <h3>Shopping Cart</h3>
            <p>Total items: {cartItems.length}</p>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

function NavBar({ categories, onSelectCategory }) {
    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navBarSearchBar}>
                    {/* To be implemented */}
                </div>
                <div className={styles.navMenu}>
                    <div className={styles.navMenuHeader}>
                        <img src="src\assets\icons\productsInterface\list.svg" alt="" />
                        <p>Categorías</p>
                    </div>
                    <div className={styles.categoryButtons}>
                        {categories.map((category) => (
                            <button key={category} onClick={() => onSelectCategory(category)}>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}

function Card({ children, name, price, onAddToCart, onRemoveFromCart, cartItems }) {
    const itemCount = cartItems.filter((item) => item === name).length;
    return (
        <>
            <div className={styles.productCard}>
                <h2 className={styles.cardTitle}>{name}</h2>
                {children}
                <div className={styles.cardBottom}>
                    <img className={styles.priceIcon} src='src/assets/icons/productsInterface/cash.svg' alt='Cash'></img>
                    <p className={styles.priceTag}>${price}</p>
                    <div className={styles.buyButtons}>
                        <button>Comprar</button>
                        <img src="src/assets/icons/productsInterface/add-to-cart.svg" alt="Add-to-cart" onClick={onAddToCart} />
                        <p>{itemCount}</p>
                        <img src="src/assets/icons/productsInterface/remove-from-cart.svg" alt="Remove-from-cart" onClick={onRemoveFromCart} />
                    </div>
                </div>
            </div>
        </>

    );
}

function ItemsShowcase({ selectedItems }) {

    const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

    if (!selectedItems) {
        return null;
    }

    const handleAddToCart = (itemName) => {
        addToCart(itemName);
    };

    const handleRemoveFromCart = (itemName) => {
        removeFromCart(itemName);
    };

    return (
        <>
            <ShoppingCart cartItems={cartItems} />
            <div className={styles.productCardsList}>
                {selectedItems.map((item) => (
                    <Card key={item.nombre} name={item.nombre} price={item.precio} onAddToCart={() => handleAddToCart(item.nombre)} onRemoveFromCart={() => handleRemoveFromCart(item.nombre)} cartItems={cartItems} >
                        <img className={styles.cardImage} src={item['url-imagen']} alt={item.nombre} />
                    </Card>
                ))}
            </div>
        </>
    );
}

function ProductsInterface() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categories = Object.keys(categoriesData);

    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories[0]);
        }
    }, []);

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    const selectedItems = selectedCategory ? categoriesData[selectedCategory] : null;

    // Check if there are stored cart items in localStorage
    const storedCartItems = localStorage.getItem('cartItems');
    const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    return (
        <>
            <CartProvider>
                <div className={styles.itemsShowcaseBox}>
                    <div className={styles.navigationBar}>
                        <NavBar categories={categories} onSelectCategory={handleCategorySelection} />
                    </div>
                    <div className={styles.productsInterface}>
                        <div className={styles.interfaceTitle}>
                            <h1>{selectedCategory}</h1>
                        </div>
                        <div className={styles.interfaceContent}>
                            <ItemsShowcase selectedItems={selectedItems} initialCartItems={initialCartItems} />
                        </div>
                    </div>
                </div>
            </CartProvider>
        </>
    );
}

export default ProductsInterface;
