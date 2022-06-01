import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
// import styles from "../styles/Layout.module.css";
import { Fragment } from "react";
import AnimatedPage from "./AnimatedPage";
import { motion } from "framer-motion";
import ScrollButton from "./ScrollButton";

const variants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Meta />
			<Nav />

			<motion.main
				initial="hidden"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ type: "linear" }}
			>
				{children}
			</motion.main>
			<ScrollButton />
			<Footer />
		</Fragment>
	);
};

export default Layout;
