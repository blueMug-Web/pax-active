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

const Card = ({ icon, title, desc }) => {
	return (
		<div className={styles.card}>
			{/* <motion.div className={styles.get_started_frame}> */}
			<div className={styles.card_icon_container}>{icon}</div>
			<p id={styles.card_title}>{title}</p>
			<p id={styles.card_text}>{desc}</p>
			{/* </motion.div> */}
		</div>
	);
};

export default Card;

{
	/* <motion.ul id={styles.card_list}>
	<motion.li id={styles.card_text}>InBody Scan (BMI)</motion.li>
	<motion.li id={styles.card_text}>Functional Movement Assessment</motion.li>
	<motion.li id={styles.card_text}>Fitness Goal Strategy</motion.li>
</motion.ul>; */
}
