import styles from "@/styles/product.module.css";

const Product = (props) => {

	return (
		<section className={styles.product}>
			
			<div className={styles.left}>
				<div>
					<img src={`./images/image-product-${props.dispImgId}.jpg`} onClick={props.showLightbox} className={styles.disp_img} alt="Thumbnail Image" />
				</div>
				<div className={styles.image_collection}>
					<img
						src={"./images/image-product-1-thumbnail.jpg"}
						id={1}
						onClick={props.changeDispImg}
						className={`${styles.thumbnail_img} ${props.dispImgId == 1 ? styles.thumb_border : ""}`}
						alt="Thumbnail Image"
					/>
					<img
						src={"./images/image-product-2-thumbnail.jpg"}
						id={2}
						onClick={props.changeDispImg}
						className={`${styles.thumbnail_img} ${props.dispImgId == 2 ? styles.thumb_border : ""}`}
						alt="Thumbnail Image"
					/>
					<img
						src={"./images/image-product-3-thumbnail.jpg"}
						id={3}
						onClick={props.changeDispImg}
						className={`${styles.thumbnail_img} ${props.dispImgId == 3 ? styles.thumb_border : ""}`}
						alt="Thumbnail Image"
					/>
					<img
						src={"./images/image-product-4-thumbnail.jpg"}
						id={4}
						onClick={props.changeDispImg}
						className={`${styles.thumbnail_img} ${props.dispImgId == 4 ? styles.thumb_border : ""}`}
						alt="Thumbnail Image"
					/>
				</div>
			</div>
			<div className={styles.right}>
				<h4 className={styles.brand}>SNEAKER COMPANY</h4>
				<h1 className={styles.prod_name}>Fall Limited Edition Sneakers</h1>
				<p
					className={
						styles.prod_detail
					}>{`These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`}</p>
				<div className={styles.price_sec}>
					<h1>$125.00</h1> <span className={styles.discount_badge}>50%</span>
					<p className={styles.strike_through}>$250.00</p>
				</div>
				<div className={styles.actionables}>
					<div className={styles.quantity_toggle}>
						<button>
							<img src="./images/icon-minus.svg" alt="minus icon" />
						</button>
						<h3>0</h3>
						<button>
							<img src="./images/icon-plus.svg" alt="plus icon" />
						</button>
					</div>
					<div className={styles.add_to_cart_btn}>
						<button>
							<img src="./images/icon-cart-white.svg" className={styles.cart_icon} alt="cart icon" />
							<h3>Add to cart</h3>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

// ecommerce-product-page\public\images\image-product-1-thumbnail.jpg
export default Product;
