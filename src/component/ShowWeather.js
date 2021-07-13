import React from "react";
import { Card } from "react-bootstrap";

const ShowWeather = ({ data, pending, error }) => {
	return (
		<div>
			{" "}
			{pending && !error && (
				<p className="text-center m-auto p-2">{"Loading.."}</p>
			)}
			{error && (
				<p className="text-center m-auto p-2">
					{"There is no cities with this name "}
				</p>
			)}
			{data && !pending && !error && (
				<Card
					style={{ width: "18rem", borderRadius: "1rem" }}
					className="text-center m-auto p-2"
				>
					<Card.Body className="">
						<Card.Text>
							<span className="h1">{data.name}</span>
							<span className="align-top">{data.sys.country}</span>
						</Card.Text>
						<Card.Title className="display-1">
							{Math.round(data.main.temp - 273)}&deg;
						</Card.Title>
					</Card.Body>
					<Card.Img
						className="w-25 m-auto"
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
					/>
				</Card>
			)}
		</div>
	);
};

export default ShowWeather;
