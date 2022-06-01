import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />

			{/* <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"></link> */}
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "PaxActive",
	keywords: "personal training, fitness",
	description: "custom workout plans and fitness training",
};

export default Meta;
