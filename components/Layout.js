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
	hidden: { opacity: 0, x: 0, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Meta />
			{/* <Nav /> */}

			<main>{children}</main>
			<ScrollButton />
			<Footer />
		</Fragment>
	);
};

export default Layout;
