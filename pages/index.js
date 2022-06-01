import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

//Cards
import Card from "../components/Card";

//icons
import {
	Calendar2Date,
	PersonCheckFill,
	Stopwatch,
	JournalCheck,
	PeopleFill,
	QuestionCircleFill,
	PersonX,
	ArrowRepeat,
	MegaphoneFill,
	Journal,
	CapslockFill,
	YinYang,
	ArrowLeftCircleFill,
	ArrowRightCircleFill,
} from "react-bootstrap-icons";

export default function Home() {
	return (
		<>
			<div className={`${styles.bodyStyle} text-center text-white`}>
				{/* **** CAROUSEL **** */}
				<div
					id="homePageCarousel"
					className="carousel slide"
					data-bs-ride="false"
					data-bs-interval="false"
				>
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#homePageCarousel"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						></button>
						<button
							type="button"
							data-bs-target="#homePageCarousel"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						></button>
						<button
							type="button"
							data-bs-target="#homePageCarousel"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						></button>
						<button
							type="button"
							data-bs-target="#homePageCarousel"
							data-bs-slide-to="3"
							aria-label="Slide 4"
						></button>
						<button
							type="button"
							data-bs-target="#homePageCarousel"
							data-bs-slide-to="4"
							aria-label="Slide 5"
						></button>
					</div>
					<div className="carousel-inner">
						{/* ****** SLIDE ONE HERE ****** */}
						<div className={`${styles.carouselCustom}  carousel-item active`}>
							<div className={`${styles.mainCardContainer}`}>
								{/* <div className={styles.coverOverlay}></div> */}
								<video className={styles.video} autoPlay loop muted>
									<source
										src="/media/video/home_womanPull.mp4"
										type="video/mp4"
									/>
								</video>

								<main
									className={`${styles.coverContainer} w-100 px-3 py-3 position-absolute top-50 start-50 translate-middle`}
								>
									<h1 className={`${styles.cta_h1}`}>
										YOUR BEST DAYS ARE AHEAD
									</h1>
									<p className={`${styles.cta_p} lead`}>
										Get a custom plan and reach your goals
									</p>
									<p className="lead">
										<a
											type="button"
											data-bs-target="#homePageCarousel"
											data-bs-slide="next"
											// href="#"
											className={`${styles.btnHomePage} btn btn-lg fw-bold `}
										>
											Learn More
										</a>
									</p>
									<p className="lead py-3 pb-0 ">
										<Link href="/contact" scroll={false}>
											<a className={`${styles.btnHomePage} btn btn-lg fw-bold`}>
												BOOK A FREE CONSULTATION
											</a>
										</Link>
									</p>
									<p className="lead">
										Consults are available in person and by phone
									</p>
								</main>
							</div>
						</div>
						{/* ****** **************** ****** */}

						{/* ****** SLIDE TWO HERE ****** */}
						<div className={`${styles.carouselCustom} carousel-item`}>
							<h1 className={`${styles.cardHeaderCustom}`}>
								HOW DO I GET STARTED?
							</h1>
							<div className={`${styles.cardContainer}`}>
								<Card
									icon={<Calendar2Date className="iconCustom" />}
									title={"BOOK A CONSULTATION"}
									desc={
										"InBody Scan (BMI), Functional Movement Assessment, Fitness Goal Strategy"
									}
								/>
								<Card
									icon={<Stopwatch className="iconCustom" />}
									title={"TRY A WORKOUT"}
									desc={"After your consultation, book a free workout with us"}
								/>
								<Card
									icon={<JournalCheck className="iconCustom" />}
									title={"FIND A PLAN"}
									desc={
										"Depending on your goal, we have different options and plans. We can help you pick the right plan and achieve your goals"
									}
								/>
							</div>
							{/* <div className="carousel-caption d-none d-md-block">
								<h5>Second slide label</h5>
								<p>
									Some representative placeholder content for the second slide.
								</p>
							</div> */}
						</div>
						{/* ****** **************** ****** */}

						{/* ****** SLIDE THREE HERE ****** */}
						<div className={`${styles.carouselCustom} carousel-item`}>
							<h1 className={`${styles.cardHeaderCustom}`}>MOST GYMS ARE...</h1>
							<div className={`${styles.cardContainer}`}>
								<Card
									icon={<PeopleFill className="iconCustom" />}
									title={"CROWDED"}
									desc={"Intimidating and fighting over equipment"}
								/>
								<Card
									icon={<QuestionCircleFill className="iconCustom" />}
									title={"CONFUSING"}
									desc={
										<>
											<q>
												Am I doing this right?...Where do I start?...What
												workouts should I do?
											</q>
											{/* <br />

											<q>Where do I start?</q>
											<br />

											<q>What workouts should I do?</q> */}
										</>
									}
								/>
								<Card
									icon={<PersonX className="iconCustom" />}
									title={"IMPERSONAL"}
									desc={
										"Not sure who can help you and no one knows your name or fitness journey"
									}
								/>
								<Card
									icon={<ArrowRepeat className="iconCustom" />}
									title={"REPETITIVE"}
									desc={
										"Doing the same thing every time because you're not sure what else to do"
									}
								/>
							</div>
							{/* <div className="carousel-caption d-none d-md-block">
								<h5>Third slide label</h5>
								<p>
									Some representative placeholder content for the second slide.
								</p>
							</div> */}
						</div>
						{/* ****** **************** ****** */}

						{/* ****** SLIDE FOUR HERE ****** */}
						<div className={`${styles.carouselCustom} carousel-item`}>
							<h1 className={`${styles.cardHeaderCustom}`}>WHAT YOU NEED</h1>
							<div className={`${styles.cardContainer}`}>
								<Card
									icon={<MegaphoneFill className="iconCustom" />}
									title={"A COACH"}
									desc={
										"Someone to guide you through workouts and how to do them properly"
									}
								/>
								<Card
									icon={<Journal className="iconCustom" />}
									title={"A PLAN"}
									desc={
										"Understanding exactly what needs to happen to achieve your goals"
									}
								/>
								<Card
									icon={<CapslockFill className="iconCustom" />}
									title={"STRENGTH TRAINING"}
									desc={
										"Get stronger, speed up your metabolism and improve quality of life all around"
									}
								/>
								<Card
									icon={<PersonCheckFill className="iconCustom" />}
									title={"ACCOUNTABILITY"}
									desc={
										"A coach and community to help you follow through and reach your goals"
									}
								/>
								<Card
									icon={<YinYang className="iconCustom" />}
									title={"NUTRITION"}
									desc={
										"Knowledge of essential foods and eating habits that will optimize your road to success and provide balance"
									}
								/>
							</div>
							{/* <div className="carousel-caption d-none d-md-block">
								<h5>Third slide label</h5>
								<p>
									Some representative placeholder content for the second slide.
								</p>
							</div> */}
						</div>
						{/* ****** **************** ****** */}

						{/* ****** SLIDE FIVE HERE ****** */}
						<div className={`${styles.carouselCustom} carousel-item`}>
							<h1 className={`${styles.cardHeaderCustom}`}>TESTIMONIALS</h1>
							<div className={`${styles.cardContainer}`}>
								<div className="d-flex flex-column">
									<q className="my-4 mx-3 px-5 fs-3">
										Really understanding why I was constantly getting injured
										was key for me. Kevin broke things down in a way that made
										sense, and allowed me to feel results pretty much
										immediately. Small things like getting up off the couch in
										one fluid motion. No longer an awkward two stage stand up
										and stretch. As well some bigger achievements, like going
										for a rip on my skateboard for the first time in over 10
										years! This is only a month in!
									</q>
									<p className=" fs-4 text-center my-0"> - Kyle Block</p>
									<q className="my-5 mx-3 px-5 fs-3">
										My experience with PAX Active has been nothing short of
										extraordinary. Right from the beginning, Kevin and Beth took
										the time to hear about my goals, identify my strengths and
										weaknesses (from mobility and flexibility to strength and
										endurance), and they're supportive of the small but mighty
										milestones along the way. I was highly intimidated by the
										idea of entering into any sort of training program at the
										beginning but with every session that has passed, I feel
										more and more like a friend than a client. I always leave
										sweaty and feeling accomplished. Definitely recommend making
										PAX Active part of your healthy lifestyle.
									</q>
									<p className=" fs-4 text-center my-0"> - Patricia Savoie</p>
								</div>
							</div>
							{/* <div className="carousel-caption d-none d-md-block">
								<h5>Second slide label</h5>
								<p>
									Some representative placeholder content for the second slide.
								</p>
							</div> */}
						</div>
						{/* ****** **************** ****** */}
					</div>
					<button
						className="carousel-control-prev"
						id="carouselControlLeftCustom"
						type="button"
						data-bs-target="#homePageCarousel"
						data-bs-slide="prev"
					>
						<ArrowLeftCircleFill
							className="carouselControlCustom"
							aria-hidden="true"
						/>
						{/* <span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span> */}
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						id="carouselControlRightCustom"
						type="button"
						data-bs-target="#homePageCarousel"
						data-bs-slide="next"
					>
						<ArrowRightCircleFill
							className="carouselControlCustom"
							aria-hidden="true"
						/>
						{/* <span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span> */}
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				{/* **** CAROUSEL END **** */}
			</div>
			<Footer />
		</>
	);
}
