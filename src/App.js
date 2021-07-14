import React, { useEffect, useState } from "react";
import { ListOfCities } from "./component/ListOfCities";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import SearchBar from "./component/SearchBar";

import ShowWeather from "./component/ShowWeather";
function App() {
	const [city, setCity] = useState("");
	const [data, setData] = useState("");
	const [main, setMain] = useState(true);
	const [input, setInput] = useState("");
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(false);
	const [list, setList] = useState([
		"erbil",
		"duhok",
		"baghdad",
		"najaf",
		"basrah",
	]);
	const [listData, setListData] = useState([]);

	useEffect(() => {
		if (list) {
			setListData([]);
			list.map((el) => {
				fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${process.env.REACT_APP_API_KEY}`
				)
					.then((res) => {
						if (res.status === 200) {
							return res.json();
						}
					})
					.then((data) => {
						if (data) {
							setListData((listData) => [...listData, data]);
						}
					})
					.catch((error) => console.log("error is", error));
			});
		}
	}, [list]);

	return (
		<div className="App">
			<Container>
				<SearchBar
					setCity={setCity}
					input={input}
					setInput={setInput}
					main={main}
					setMain={setMain}
				/>
				{main && (
					<ShowWeather
						data={data}
						pending={pending}
						error={error}
						setError={setError}
						city={city}
						setCity={setCity}
						setPending={setPending}
						setData={setData}
						input={input}
						list={list}
						setList={setList}
					/>
				)}
				<div className="d-flex flex-wrap justify-content-center">
					{listData.map((el, i) => {
						return (
							<div className="m-2">
								<ListOfCities el={el} key={i} />
							</div>
						);
					})}
				</div>
			</Container>
		</div>
	);
}

export default App;
