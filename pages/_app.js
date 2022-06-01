//import framer motion
import { motion, AnimatePresence } from "framer-motion";

//import bootstrap
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";

//x: 0 will put it center of screen
const animations = {
	initial: { opacity: 0, y: -100 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 100 },
};

function MyApp({ Component, pageProps, router }) {
	useEffect(() => {
		document.getElementById("__next").className = "nextBaseCustom";
	}, []);

	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

	return (
		<Layout>
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<motion.div
					key={router.route}
					initial="pageInitial"
					animate="pageAnimate"
					exit="pageExit"
					variants={{
						pageInitial: {
							opacity: 0,
							transition: { duration: 0.7 },
						},
						pageAnimate: {
							opacity: 1,
							transition: { duration: 0.7 },
						},
						pageExit: {
							opacity: 0,
							transition: { duration: 0.2 },
						},
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

export default MyApp;
