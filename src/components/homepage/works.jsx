import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./resilience.webp"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Resilience Inc.</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2022-2023</div>
						</div>

						<div className="work">
							<img
								src="./rep.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Rep</div>
							<div className="work-subtitle">
								Front End
							</div>
							<div className="work-duration">June-2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
