"use client";
import { useState } from "react";
import styles from "@/styles/carousel.module.css";

const Carousel = () => {
	const [slideNum, setSlideNum] = useState(1);

	const nextClick = () => {
		setSlideNum(slideNum + 1);
	};

	const prevClick = () => {
		setSlideNum(slideNum - 1);
	};

	return (
		<>
			<div className={styles.carousel}>
				<button className={styles.prev_btn} onClick={prevClick} disabled={slideNum === 1}>
					{/* <img src="./images/icon-previous.svg" alt="previous icon" /> */}
                    {'<'}
				</button>
				<img src={`./images/image-product-${slideNum}.jpg`} alt="Thumbnail Image" />
				<button className={styles.next_btn} onClick={nextClick} disabled={slideNum === 4}>
					{/* <img src="./images/icon-next.svg" alt="next icon" /> */}
                    {'>'}
				</button>
			</div>
		</>
	);
};

export default Carousel;
