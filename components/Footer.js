import React from "react";
import Link from "next/link";

//Icons
import {
	Facebook,
	Linkedin,
	Instagram,
	GeoAltFill,
	TelephoneFill,
	EnvelopeFill,
} from "react-bootstrap-icons";

const Footer = () => {
	return (
		// <!-- Remove the container if you want to extend the Footer to full width. -->
		<div className="">
			<footer className="footer-custom-bg text-center text-white">
				{/* <!-- Grid container --> */}
				<div className="container p-4 pb-1 pt-5">
					<section className="pt-5"></section>
					{/* <!-- Section: Social media --> */}
					<section className="mb-1">
						<Link href="https://www.facebook.com/paxactive/">
							<a className=" btn-floating m-1" target="_blank" role="button">
								<Facebook className="socialIcon" />
							</a>
						</Link>
						<Link href="https://www.linkedin.com/company/pax-active/?trk=public_profile_topcard-current-company&originalSubdomain=ca">
							<a className=" btn-floating m-1" target="_blank" role="button">
								<Linkedin className="socialIcon" />
							</a>
						</Link>
						<Link href="https://www.instagram.com/paxactive/">
							<a className=" btn-floating m-1" target="_blank" role="button">
								<Instagram className="socialIcon" />
							</a>
						</Link>
					</section>
					{/* <!-- Section: Social media --> */}
				</div>
				{/* <!-- Grid container --> */}

				{/* <!-- Copyright --> */}
				<div className="text-center p-3">
					© 2022 Copyright
					<a className="text-white" href="/">
						PaxActive
					</a>
				</div>
				{/* <!-- Copyright --> */}
			</footer>
		</div>
	);
};

export default Footer;
