import React from "react";
import styles from "../styles/Pricing.module.css";

export default function Pricing() {
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<h1 className={styles.title}>PRICING</h1>
				{/* <div className={`${styles.divider}`}></div> */}
				<div className={styles.subHeading}>
					<span className={styles.brace}>[</span>MOBILITY CLASSES
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.subHeadingPrice}>
					<span className={styles.brace}>[</span>DROP-IN $20
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>
						Saturday at 9 am and noon we offer mobility classes where we focus
						on soft tissue work, dynamic stretching and overall recovery so that
						you can move and recover better
					</p>
				</div>
				<div className={styles.subHeading}>
					<span className={styles.brace}>[</span>PERSONAL TRAINING
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.subHeadingPrice}>
					<span className={styles.brace}>[</span>STARTING AT $528/MONTH
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>
						If you have a specific goal in mind, are rehabilitating an injury,
						or just want closer personalized attention, personal training any of
						our coaches here at Pax Active is a great option. We recommend all
						clients start with some personal training to learn foundations,
						build a baseline of strength and make sure everything is moving the
						way it should. All personal training clients will receive a Fitness
						Consultation and a Functional Movement Asessment and Nutrition
						Orientation this helps the coaches to best assess your needs and
						create a tailored training program No matter the goal our coaches
						will build a program that helps you to get increase strength,
						improve movement and range of motion as well as enhance stamina.
					</p>
				</div>

				<div className={`${styles.subHeading} `}>
					<span className={styles.brace}>[</span>PARTNER TRAININING
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.subHeadingPrice}>
					<span className={styles.brace}>[</span>STARTING AT $288/MONTH
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>
						Partner training is a great option for those looking for
						individualized coaching and programming but enjoy training with a
						partner. Training with a friend can help you both motivate each
						other while still getting individual attention at a more
						cost-effective price point.
					</p>
				</div>
				<div className={styles.subHeading}>
					<span className={styles.brace}>[</span>SMALL GROUPS
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.subHeadingPrice}>
					<span className={styles.brace}>[</span>STARTING AT $224/MONTH
					<span className={styles.brace}>]</span>
				</div>
				<div className={styles.textContainer}>
					<p className={styles.text}>
						Small Groups at Pax Active are designed to help you move better, get
						stronger and feel healthier than you ever have before. Each session
						can be modified to your training level. Our programs and community
						will motivate and encourage you. Each session is led from start to
						finish from a coach who will guide you throughout the movements to
						avoid injury and ensure proper form. The sessions begin with some
						soft tissue work, stability work and muscle activation exercises
						before we move into strength circuits. We design our programs with
						your health and longevity in mind so that you leave every session
						with more stamina for your day to day life.
					</p>
				</div>
			</div>
		</div>
	);
}
