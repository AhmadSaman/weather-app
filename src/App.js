import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import SearchBar from "./component/SearchBar";
import ShowWeather from "./component/ShowWeather";
import "./app.scss";
function App() {
	const [data, setData] = useState("");
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(false);

	return (
		<div className="App">
			<Container>
				<SearchBar
					setData={setData}
					setPending={setPending}
					pending={pending}
					setError={setError}
				/>

				<ShowWeather
					data={data}
					pending={pending}
					error={error}
					setError={setError}
				/>
			</Container>
		</div>
	);
}

export default App;
