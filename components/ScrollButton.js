import React, { useState, useEffect } from "react";
import styles from "../styles/ScrollButton.module.css";
//icons
import { ArrowUpSquareFill } from "react-bootstrap-icons";

const ScrollButton = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className={styles.TopToBottom}>
			{" "}
			{showTopBtn && (
				<ArrowUpSquareFill
					className={`${styles.iconPosition} ${styles.iconStyle}`}
					onClick={goToTop}
				/>
			)}{" "}
		</div>
	);
};

export default ScrollButton;
