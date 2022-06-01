import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Team.module.css";

//Pictures
import BethAndKevin from "../public/media/images/BethAndKevin.gif";
import Kevin from "../public/media/images/KevinBio.gif";
import Beth from "../public/media/images/BethBio.jpg";

//Icons
import {
	Facebook,
	Twitter,
	Google,
	Linkedin,
	Instagram,
	ArrowReturnRight,
} from "react-bootstrap-icons";

export default function Team() {
	return (
		<>
			{/* <AnimatedPage> */}
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<div className={`${styles.titleContainer}`}>
						<h1 className={`${styles.titleCustom}`}>MEET THE TEAM</h1>
					</div>
					<div className={styles.cardContainer}>
						{/* *** CARD *** */}
						<div className={`${styles.bioCardCustom} card`} id="bioCardCustom">
							<Image
								src={BethAndKevin}
								className="card-img-top"
								alt="..."
								width={1024}
								height={746}
								layout="responsive"
							/>
							<div className="card-body">
								<h5 className={`${styles.cardTitleCustom} card-title`}>
									BETH AND KEVIN
								</h5>
								<h6 className={`${styles.cardSubTitleCustom} card-title`}>
									<ArrowReturnRight /> OWNERS
								</h6>
								<div className={`${styles.teamSocials}`}>
									<a>
										<Facebook className={`${styles.socialIcon}`} />
									</a>
									<a>
										<Twitter className={`${styles.socialIcon}`} />
									</a>
									<a>
										<Google className={`${styles.socialIcon}`} />
									</a>
									<a>
										<Linkedin className={`${styles.socialIcon}`} />
									</a>
								</div>
								<p className="card-text fs-3">
									Beth and Kevin are the owners of the new downtown fitness
									studio Pax Active. The word Pax is actually a shorthand term
									used for 'people' and that is exactly what motivated them to
									open their own studio. After years in the industry they both
									found a lot of gyms are focused on 'growing a bigger business'
									and not necessarily 'building stronger people' and that didn't
									sit right with them.
								</p>
								<p className="card-text fs-3">
									The goal is to give every client the full attention they need
									so they can start to live a higher quality of life and get
									stronger every time they come into the studio. ⁠ The missions
									is to help every client at Pax Active to Improve strength,
									Increase Movement/Mobility, and Enhance Stamina. ⁠
								</p>
								<p className="card-text fs-3">
									Pax Active offers a 360 approach through strength training,
									mobility coaching and nutrition help so that you have every
									tool you need to reach your fitness and life goals⁠ ⁠
								</p>
								<Link href="/contact" scroll={false}>
									<a>
										<button
											type="button"
											className={`${styles.contactUsBtn} btn`}
										>
											CONTACT US
										</button>
									</a>
								</Link>
							</div>
						</div>
						{/* *** *** *** */}
						<div className={`${styles.divider}`}></div>
						{/* *** KEVIN CARD *** */}
						<div className={`${styles.bioCardCustom} card`} id="bioCardCustom">
							<Image
								src={Kevin}
								className="card-img-top"
								alt="..."
								width={1024}
								height={746}
								layout="responsive"
							/>
							<div className="card-body">
								<h6 className={`${styles.cardTitleCustom} card-title`}>
									KEVIN ROGERS
								</h6>
								<h5 className={`${styles.cardSubTitleCustom} card-title`}>
									<ArrowReturnRight /> HEAD TRAINER
								</h5>
								<div className={`${styles.teamSocials}`}>
									<a>
										<Instagram className={`${styles.socialIcon}`} />
									</a>
								</div>
								<p className="card-text fs-3">
									Kevin has been training clients for over 10 years. He lives a
									very active lifestyle and wants to teach you to keep up with
									him!
								</p>
								<p className="card-text fs-3">More about Kevin:</p>

								<ul className={`${styles.kevinDetailsTable} fs-3`}>
									<li>10 years personal training experience</li>
									<li>Ex Military</li>
									<li>
										Mentored by Jon Chaimberg, one of the best trainers in the
										world
									</li>
									<li>
										Certifications : FMS (functional movement screen Lvl 2
									</li>
									<li>BioForce Conditioning Coach</li>
									<li>CanFit</li>
									<li>StrongFirst Kettlebells Lvl 1</li>
									<li>StrongFirst Bodyweight</li>
									<li>Gym Jones Lvl 2</li>
								</ul>

								{/* <a href="#" className={`${styles.contactUsBtn} btn`}>
								Contact Us
							</a> */}
							</div>
						</div>
						{/* *** *** *** */}
						<div className={`${styles.divider}`}></div>
						{/* *** BETH CARD *** */}
						<div className={`${styles.bioCardCustom} card`} id="bioCardCustom">
							<Image
								src={Beth}
								className="card-img-top"
								alt="..."
								width={1024}
								height={568}
								layout="responsive"
							/>
							<div className="card-body">
								<h6 className={`${styles.cardTitleCustom} card-title`}>
									BETH MOORE
								</h6>
								<h5 className={`${styles.cardSubTitleCustom} card-title`}>
									<ArrowReturnRight /> OPERATIONS
								</h5>
								<div className={`${styles.teamSocials}`}>
									<a>
										<Facebook className={`${styles.socialIcon}`} />
									</a>
									<a>
										<Linkedin className={`${styles.socialIcon}`} />
									</a>
									<a>
										<Instagram className={`${styles.socialIcon}`} />
									</a>
								</div>
								<p className="card-text fs-3">
									Beth Moore is a Canadian Singer-Songwriter turned Fitness
									Studio Owner. Her passion for fitness started at a young age.
									Beth was a competitive figure skater until she was 18 and
									continued to stay active through her adult life. She began
									working in Fitness Sales 5 years ago and loved that her job
									consisted of talking to people about their fitness goals and
									helping them make a plan. She's worked for some of the biggest
									companies in North America and wanted to take everything she's
									learned about the good and bad in the fitness industry and
									create a Studio that truly helps everyone. No matter if they
									are a beginner or advanced athlete.
								</p>
								<p className="card-text fs-3">
									Beth runs the daily operations at Pax Active and makes sure
									the members are happy and connected. She loves coffee, working
									out with friends, hiking, playing music, reading fiction.
								</p>
								<p className="card-text fs-3 fw-bold">
									Certifications Precision Nutriton LVL 1
								</p>

								{/* <a href="#" className={`${styles.contactUsBtn} btn`}>
								Contact Us
							</a> */}
							</div>
						</div>
						{/* *** *** *** */}
						<div className={`${styles.divider}`}></div>
					</div>
				</div>
			</div>
		</>
	);
}
