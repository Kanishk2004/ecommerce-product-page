import styles from "@/styles/lightbox.module.css";
import prodStyles from "@/styles/product.module.css";

const Lightbox = (props) => {
	return (
		<div className={props.dispayLightbox}>
			<div className={styles.lightbox_container}>
				<div>
					<img
						className={styles.close_icon}
						src={"./images/icon-close-lightbox.svg"}
						alt="Close Icon"
						width={16}
						height={17}
                        onClick={props.closeLightbox}
					/>
					<div className={styles.main_img_container}>
						<button className={styles.prev_btn} onClick={props.showPrevImg} disabled={props.dispImgId==1}>{"<"}</button>
						<img
							src={`./images/image-product-${props.dispImgId}.jpg`}
							className={styles.disp_img}
							alt="Thumbnail Image"
						/>
						<button className={styles.next_btn} onClick={props.showNextImg} disabled={props.dispImgId==4}>{">"}</button>
					</div>
					<div className={prodStyles.image_collection}>
						<img
							src={"./images/image-product-1-thumbnail.jpg"}
							onClick={props.changeDispImg}
							id={1}
							className={`${prodStyles.thumbnail_img} ${props.dispImgId == 1 ? prodStyles.thumb_border : ""}`}
							alt="Thumbnail Image"
						/>
						<img
							src={"./images/image-product-2-thumbnail.jpg"}
							onClick={props.changeDispImg}
							id={2}
							className={`${prodStyles.thumbnail_img} ${props.dispImgId == 2 ? prodStyles.thumb_border : ""}`}
							alt="Thumbnail Image"
						/>
						<img
							src={"./images/image-product-3-thumbnail.jpg"}
							onClick={props.changeDispImg}
							id={3}
							className={`${prodStyles.thumbnail_img} ${props.dispImgId == 3 ? prodStyles.thumb_border : ""}`}
							alt="Thumbnail Image"
						/>
						<img
							src={"./images/image-product-4-thumbnail.jpg"}
							onClick={props.changeDispImg}
							id={4}
							className={`${prodStyles.thumbnail_img} ${props.dispImgId == 4 ? prodStyles.thumb_border : ""}`}
							alt="Thumbnail Image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lightbox;
