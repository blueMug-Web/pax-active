import Image from "next/image";
import styles from "../styles/Contact.module.css";
import Link from "next/link";

//Pictures

//Icons
import {
	Facebook,
	Linkedin,
	Instagram,
	GeoAltFill,
	TelephoneFill,
	EnvelopeFill,
} from "react-bootstrap-icons";

export default function Contact() {
	return (
		<>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<h1 className={styles.title}>CONTACT US</h1>
					<div className={`${styles.subHeading} `}>
						<span className={styles.brace}>[</span>BOOK A CONSULTATION
						<span className={styles.brace}>]</span>
					</div>
					<div className="container d-flex">
						<div className={` row d-flex mx-auto`}>
							<div className={`${styles.contacts} col-lg-6 col-md-6 d-flex`}>
								<TelephoneFill className={`${styles.contactIcon}`} />
								<div className="d-flex flex-column">
									<h2 className="fs-1">Call</h2>
									<p className="fs-3 fw-lighter">(289) 696-9659</p>
								</div>
							</div>

							<div className={`${styles.contacts} col-lg-6 col-md-6 d-flex`}>
								<EnvelopeFill className={`${styles.contactIcon}`} />
								<div className="d-flex flex-column">
									<h2 className="fs-1">Email</h2>
									<p className="fs-3 fw-lighter">beth@paxactive.com</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.divider}`}></div>
					<div className={styles.subHeading}>
						<span className={styles.brace}>[</span>SOCIAL MEDIA
						<span className={styles.brace}>]</span>
					</div>
					<div className={`${styles.teamSocials}`}>
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
					</div>

					<div className={styles.subHeading}>
						<span className={styles.brace}>[</span>OUR CONTACT
						<span className={styles.brace}>]</span>
					</div>
					<div className="container d-flex">
						<div className={` row d-flex mx-auto`}>
							<div className={`${styles.contacts} col-lg-4 col-md-12 d-flex`}>
								<GeoAltFill className={`${styles.contactIcon}`} />
								<div className="d-flex flex-column">
									<h2 className="fs-1">Address</h2>
									<p className="fs-3 fw-lighter">
										23 Ontario St., St.Catharines, Ontario
									</p>
								</div>
							</div>

							<div className={`${styles.contacts} col-lg-4 col-md-6 d-flex`}>
								<TelephoneFill className={`${styles.contactIcon}`} />
								<div className="d-flex flex-column">
									<h2 className="fs-1">Call Us</h2>
									<p className="fs-3 fw-lighter">(289) 479-0269</p>
								</div>
							</div>

							<div className={`${styles.contacts} col-lg-4 col-md-6 d-flex`}>
								<EnvelopeFill className={`${styles.contactIcon}`} />
								<div className="d-flex flex-column">
									<h2 className="fs-1">Email</h2>
									<p className="fs-3 fw-lighter">beth@paxactive.com</p>
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.divider}`}></div>
					<div className={styles.subHeading}>
						<span className={styles.brace}>[</span>COME FOR A TOUR
						<span className={styles.brace}>]</span>
					</div>

					{/* IfRAME GOES HERE */}
					<div className={styles.map}>
						<iframe
							className={styles.iframe}
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.586584477813!2d-79.24823968427123!3d43.15520989250647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d351b35b10552b%3A0xc81dbe476e07f75f!2s23%20Ontario%20St%2C%20St.%20Catharines%2C%20ON%20L2R%205J3!5e0!3m2!1sen!2sca!4v1653093760864!5m2!1sen!2sca"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</>
	);
}
