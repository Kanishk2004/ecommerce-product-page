import styles from "@/styles/cart.module.css";

const Cart = (props) => {
	return (
		<div className={`${styles.card} ${props.cart}`}>
			<h3>Cart</h3>
			<div className={props.prodInCart}>
				<div className={styles.prod_container}>
					<img className={styles.prod_img} src="./images/image-product-1-thumbnail.jpg" alt="product image" />
					<div className={`${styles.prod_details} `}>
						<p>Fall Limited Edition Sneakers</p>
						<p>
							$125.00 x {props.quantity} <span>{`$${125 * props.quantity}.00`}</span>
						</p>
					</div>
					<div className={styles.delete_icon} onClick={props.deleteFromCart}>
						<img src="./images/icon-delete.svg" alt="delete icon" />
					</div>
				</div>
				<button>Checkout</button>
			</div>

			{props.prodInCart ? <p style={{ textAlign: "center", marginTop: "60px" }}>Your cart is empty!</p> : ""}
		</div>
	);
};

export default Cart;
