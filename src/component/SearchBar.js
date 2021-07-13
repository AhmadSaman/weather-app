import { Button } from "react-bootstrap";
import React, { useEffect, useState, useCallback } from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ setData, setPending, pending, setError }) => {
	const [city, setCity] = useState("");
	const [input, setInput] = useState("");
	const fetchingData = useCallback(() => {
		if (city) {
			setData("");
			setPending(true);
			setError(false);

			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b6f712e213f6057d237c16473d9c9d2`
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

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleInput = (e) => {
		setInput(e.target.value);
	};
	const handleClick = (e) => {
		if (input !== "") {
			setCity(input);
			setInput("");
		}
	};
	return (
		<div className="text-center">
			<Form
				onSubmit={handleSubmit}
				className="d-flex justify-content-center m-5"
			>
				<Form.Control
					className="w-50 mr-1 city"
					type="text"
					name="city"
					id="city"
					onChange={handleInput}
					value={input}
				/>
				<Button
					type="submit"
					value="submit"
					onClick={handleClick}
					variant="primary"
				>
					Find
				</Button>
			</Form>
		</div>
	);
};

export default SearchBar;
