import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import nitkImage from "./nitklogo.png"
import iithImage from "./iitlogo.png"
import "./styles/works.css";

const Works = () => {
	return (
		<div className="Education">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={iithImage}
								alt="iith"
								className="work-image"
							/>
							<div className="work-title">IIT-Hyderabad</div>
							<div className="work-subtitle">
								Ph.D. Scholar
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img src={nitkImage} alt="twitter" className="work-image"/>
							<div className="work-title">NIT-Karnataka</div>
							<div className="work-subtitle">
								M.Sc. in Physics
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
