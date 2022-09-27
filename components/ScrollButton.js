import React, { useState, useEffect } from "react";
import styles from "../styles/ScrollButton.module.css";
//icons
import { ArrowUpSquareFill } from "react-bootstrap-icons";

const ScrollButton = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		const handleScrollButton = (event) => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		};
		// Should add a removeEventListener in the return to clean up memory leak when component unmounts
		window.addEventListener("scroll", handleScrollButton);

		return () => {
			window.removeEventListener("scroll", handleScrollButton);
		};
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
