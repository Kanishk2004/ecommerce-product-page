"use client";
import { useState } from "react";
import Carousel from "./Carousel";
import Lightbox from "./Lightbox";
import Navbar from "./Navbar";
import Product from "./Product";
import styles from "@/styles/lightbox.module.css";
import Cart from "./Cart";

const Header = () => {
	const [dispImgId, setDispImgId] = useState(1);
	const [dispayLightbox, setDisplayLightbox] = useState(styles.disp_none);

	const closeLightbox = () => {
		setDisplayLightbox(styles.disp_none);
	};

	const showLightbox = () => {
		setDisplayLightbox("");
	};

	const changeDispImg = (e) => {
		const id = e.currentTarget.id;
		setDispImgId(id);
	};

	const showPrevImg = () => {
		setDispImgId(dispImgId - 1);
	};

	const showNextImg = () => {
		setDispImgId(dispImgId + 1);
	};

	// logic for modifying cart items
	const [quantity, setQuantity] = useState(0);
	const [prodInCart, setProdInCart] = useState(styles.disp_none);
	const [cart, setCart] = useState(styles.disp_none);

	const incQunatity = () => {
		setQuantity(quantity + 1);
	};

	const decQunatity = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	};

	const addToCart = () => {
		setProdInCart("");
	};

	const deleteFromCart = () => {
		setProdInCart(styles.disp_none);
		setQuantity(0);
	};

	const toggleCart = () => {
		if (cart == styles.disp_none) {
			setCart("");
		} else {
			setCart(styles.disp_none);
		}
	};

	return (
		<>
			<header>
				<Lightbox
					changeDispImg={changeDispImg}
					dispImgId={dispImgId}
					closeLightbox={closeLightbox}
					dispayLightbox={dispayLightbox}
					showNextImg={showNextImg}
					showPrevImg={showPrevImg}
				/>
				<Navbar toggleCart={toggleCart} quantity={quantity} prodInCart={prodInCart} />
				<Cart quantity={quantity} prodInCart={prodInCart} deleteFromCart={deleteFromCart} cart={cart} />
				<Carousel />
				<Product
					changeDispImg={changeDispImg}
					dispImgId={dispImgId}
					showLightbox={showLightbox}
					incQunatity={incQunatity}
					decQunatity={decQunatity}
					quantity={quantity}
					addToCart={addToCart}
				/>
			</header>
		</>
	);
};

export default Header;
