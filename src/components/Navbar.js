"use client";
import Image from "next/image";
import styles from "@/styles/nav.module.css";
import { useState } from "react";

const Navbar = (props) => {
	const [menuClass, setMenuClass] = useState(styles.disp_none);

	const openMenu = () => {
		setMenuClass(styles.open_menu);
	};

	const closeMenu = () => {
		setMenuClass(styles.disp_none);
	};

	return (
		<>
			<nav className={styles.navbar}>
				<div className={menuClass}>
					<div className={styles.menu_items}>
						<div className={styles.close_icon} onClick={closeMenu}>
							<Image src={"./images/icon-close.svg"} alt="Menu close icon" width={14} height={15} />
						</div>
						<h2>Collections</h2>
						<h2>Men</h2>
						<h2>Women</h2>
						<h2>About</h2>
						<h2>Contact</h2>
					</div>
				</div>
				<div className={styles.left}>
					<div className={styles.mob_menu_icon}>
						<Image src={"./images/icon-menu.svg"} onClick={openMenu} alt="Menu icon" width={16} height={15} />
					</div>
					<div className={styles.logo}>
						<Image src={"./images/logo.svg"} alt="brand logo" width="138" height="20" />
					</div>
					<ul className={styles.list}>
						<li>Collections</li>
						<li>Men</li>
						<li>Women</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className={styles.right} onClick={props.toggleCart}>
					<div className={styles.pos_rel}>
						<Image src={"./images/icon-cart.svg"} className={styles.cart_icon} alt="cart icon" width="22" height="20" />
						{ !props.prodInCart?<span className={styles.quant_badge}>{props.quantity}</span>:'' }
					</div>
					<div>
						<img className={styles.avatar} src={`./images/image-avatar.png`} alt="profile picture" />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
