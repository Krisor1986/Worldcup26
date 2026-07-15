import React from "react";
import Card from "./Card";

//include images into your bundle
import stadium from "../../img/stadium-worldcup26.png";
import brazil from "../../img/Brazil.jpg"
import france from "../../img/France.jpg"
import england from "../../img/England.jpg"
import spain from "../../img/Spain.jpg"

//create your first component
const Home = () => {
	return (
		<div
			className="p-5 mb-4 rounded-3 text-white"
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${stadium})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				minHeight: "500px"
			}}
		>
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold d-flex align-items-center">
					<i className="bi bi-trophy me-3 text-warning"></i>

					World Cup <span className="text-warning ms-2">Favorites 2026</span>
				</h1>

				<p className="col-md-8 fs-4">
					Discover the national teams with the biggest chances to win the World Cup.
					Brazil, France, England, and Spain are among the strongest contenders thanks
					to their talented squads, experience and recent performances.
				</p>

				<button className="btn gold-btn btn-lg mt-4" type="button">
					⭐ See favorites
				</button>
			</div>
			<div className="container my-5">
				<div className="row g-4">
					<div className="col-12 col-md-6 col-lg-3">
						<Card
							team="Brazil"
							text="The most successful team in World Cup history, famous for attacking football and legendary players."
							img={brazil}
						/>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card
							team="France"
							text="A modern powerhouse with world-class players, experience and one of the strongest squads."
							img={france}
						/>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card
							team="England"
							text="A talented generation with ambition, speed and many top players from the Premier League."
							img={england}
						/>
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card
							team="Spain"
							text="Known for technical football, possession, creativity and excellent midfielders."
							img={spain}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;