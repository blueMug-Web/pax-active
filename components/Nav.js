import React from "react";
import Image from "next/image";
import Link from "next/link";
import habittracker from "../public/media/images/21DayHabitLoopTracker.png";
import logo from "../public/media/images/logo.jpg";
import styles from "../styles/Nav.module.css";

//Icons
import { List } from "react-bootstrap-icons";

// const [expanded, setExpanded] = useState(false);

const Nav = () => {
	return (
		<>
			{/* // <!-- Modal --> */}
			<div
				className="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								FREE DOWNLOAD
							</h5>
							<button
								type="button"
								className="btn-close-white"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="d-flex align-items-center justify-content-center">
								<Image src={habittracker} alt="Habit Tracker" className="" />
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary btn-warning"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary btn-warning">
								SEND ME FREE STUFF, COACH!
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* // <!-- Modal --> */}

			<nav className="navbar navbar-expand-lg navbar-light container-color">
				<div className="container-fluid">
					<Link href="/">
						<a className="pe-auto">
							<Image src={logo} alt="logo" className="mobile_logo pe-auto" />
						</a>
					</Link>

					<button
						className="navbar-toggler ms-auto"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						{/* <span className="navbar-toggler-icon"></span> */}
						<List className={styles.togglerIcon} />
					</button>
					<div className="collapse navbar-collapse " id="navbarTogglerDemo01">
						{/* <a className="navbar-brand" href="#">
						Hidden brand
					</a> */}
						<ul className="navbar-nav  mb-2 mb-lg-0 align-items-end justify-content-end ms-auto">
							{/* <li className="menu_link nav-item text-center">
								<Link href="/">
									<a
										// className="nav-link active fw-bold fs-4"
										className=" nav-link fw-bold textColor"
										aria-current="page"
									>
										HOME
									</a>
								</Link>
							</li> */}
							<li className="menu_link nav-item text-center">
								<Link href="/team" scroll={false}>
									<a
										className={`${styles.textColor} nav-link fw-bold  textColor `}
									>
										TEAM
									</a>
								</Link>
							</li>
							<li className="menu_link nav-item text-center">
								<Link href="/contact" scroll={false}>
									<a className="nav-link fw-bold ">CONTACT</a>
								</Link>
							</li>
							<li className="menu_link nav-item text-center">
								<Link href="/pricing" scroll={false}>
									<a className="nav-link fw-bold ">PRICING</a>
								</Link>
							</li>
							<li className="menu_link nav-item text-center">
								<Link href="/parking" scroll={false}>
									<a className="nav-link fw-bold ">PARKING</a>
								</Link>
							</li>

							<li className="menu_link nav-item dropdown">
								<a
									className="nav-link dropdown-toggle fw-bold fs-4 text-center "
									href="#"
									id="navbarDropdownMenuLink"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									MORE
								</a>
								<ul
									className="dropdown-menu dropdown-menu-end dp_custom"
									aria-labelledby="navbarDropdownMenuLink"
								>
									{/* <li className="dropdown-item nav-item text-center">
										<Link href="/" scroll={false}>
											<a className="nav-link fw-bold fs-4">CLIENT BOOKING</a>
										</Link>
									</li> */}
									<li className="dropdown-item nav-item text-center">
										<Link href="/" scroll={false}>
											<a className="nav-link fw-bold fs-4">FREE RESOURCES</a>
										</Link>
									</li>
									<li className="dropdown-item nav-item text-center">
										<Link href="/" scroll={false}>
											<a className="nav-link fw-bold fs-4">WORKOUTS</a>
										</Link>
									</li>
									<li className="dropdown-item nav-item text-center">
										<Link href="/" scroll={false}>
											<a className="nav-link fw-bold fs-4">
												Greenhouse/M&amp;T Sample
											</a>
										</Link>
									</li>
								</ul>
							</li>
							<Link href="/contact" scroll={false}>
								<a>
									<button
										type="button"
										className="btn btn-warning btn-lg fw-bold mx-2"
									>
										BOOK NOW
									</button>
								</a>
							</Link>
							<button
								type="button"
								className="btn btn-warning btn-lg fw-bold mx-2"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
							>
								FREE STUFF
							</button>
						</ul>

						{/* <form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
