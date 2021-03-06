import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBar = ({ setCity, input, setInput, setMain, main }) => {
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
			setMain(true);
		}
	};
	const handleMain = () => {
		setMain(false);
	};
	return (
		<div className="text-center">
			<Button onClick={handleMain} variant="secondary" className="m-3">
				Go to home page
			</Button>
			<Form
				onSubmit={handleSubmit}
				className="d-flex justify-content-center mb-3"
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
