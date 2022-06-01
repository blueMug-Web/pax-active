// import React from "react";
// import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

//Motion variables
// const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
// const thumbnailVariants = {
// 	initial: { scale: 0.9, opacity: 0 },
// 	enter: { scale: 1, opacity: 1, transition },
// 	exit: {
// 		scale: 0.5,
// 		opacity: 0,
// 		transition: { duration: 1.5, ...transition },
// 	},
// };
// const frameVariants = {
// 	hover: { scale: 0.95 },
// };
// const insideVariants = {
// 	hover: { scale: 1.2 },
// };

const CardDark = ({ icon, title, desc }) => {
	return (
		<div className={styles.wyn_card}>
			<div className={styles.wyn_frame}>
				<div className={styles.wyn_card_icon_container}>{icon}</div>
				<p id={styles.wyn_card_title}>{title}</p>
				<p id={styles.wyn_card_text}>{desc}</p>
			</div>
		</div>
	);
};

export default CardDark;
