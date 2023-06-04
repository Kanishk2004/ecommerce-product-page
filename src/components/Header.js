"use client";
import { useState } from "react";
import Carousel from "./Carousel";
import Lightbox from "./Lightbox";
import Navbar from "./Navbar";
import Product from "./Product";
import styles from "@/styles/lightbox.module.css";

const Header = () => {
	const [dispImgId, setDispImgId] = useState(1);
	// const [lightbox, setLightbox] = useState(false);
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
				<Navbar />
				<Carousel />
				<Product changeDispImg={changeDispImg} dispImgId={dispImgId} showLightbox={showLightbox} />
			</header>
		</>
	);
};

export default Header;
