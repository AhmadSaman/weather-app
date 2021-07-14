import React, { useCallback, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const ShowWeather = ({
	data,
	pending,
	error,
	city,
	setPending,
	setData,
	setError,
	list,
	setList,
}) => {
	const fetchingData = useCallback(() => {
		if (city) {
			setData("");
			setPending(true);
			setError(false);

			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
			)
				.then((res) => {
					if (res.status === 200) {
						return res.json();
					} else {
						setError(true);
					}
				})
				.then((data) => {
					if (data) {
						setData(data);
						setPending(false);
						setError(false);
					}
				})
				.catch((error) => console.log("error is", error));
		}
	}, [city, setData, setError, setPending]);
	useEffect(() => {
		fetchingData();
	}, [fetchingData]);
	const handleAddToMain = () => {
		setList((list) => [...list, data.name.toLowerCase()]);
	};
	const handleDelete = () => {
		const newList = list.filter((item) => item !== data.name.toLowerCase());
		console.log(newList);
		setList(newList);
	};
	return (
		<div>
			{" "}
			{pending && !error && (
				<p className="text-center m-auto p-2">{"Loading.."}</p>
			)}
			<div className="text-center m-auto">
				{" "}
				{error && <p className="text-center  p-2">{"Try another city"}</p>}
			</div>
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
					<div>
						<Button
							variant="primary"
							className="w-50 m-auto"
							onClick={list.includes(city) ? handleDelete : handleAddToMain}
						>
							{list.includes(city) ? "Delete" : "Add"}
						</Button>
					</div>
				</Card>
			)}
			<h2 className=" text-center m-5">Main Cities</h2>
		</div>
	);
};

export default ShowWeather;
