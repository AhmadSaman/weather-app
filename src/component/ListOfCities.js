import { Card, Button } from "react-bootstrap";

export const ListOfCities = ({ el, list, setList }) => {
	const handleDelete0 = () => {
		const newList = list.filter((item) => item !== el.name.toLowerCase());
		console.log(newList, list);
		setList(newList);
	};
	return (
		<div>
			{el && (
				<Card
					style={{ width: "18rem", borderRadius: "1rem" }}
					className="text-center m-auto p-2"
				>
					<Card.Body className="">
						<Card.Text>
							<span className="h1">{el.name}</span>
							<span className="align-top">{el.sys.country}</span>
						</Card.Text>
						<Card.Title className="display-1">
							{Math.round(el.main.temp - 273)}&deg;
						</Card.Title>
					</Card.Body>
					<Card.Img
						className="w-25 m-auto"
						src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
					/>
					<div>
						<Button
							variant="primary"
							className="w-50 m-auto"
							onClick={handleDelete0}
						>
							{"Delete"}
						</Button>
					</div>
				</Card>
			)}
		</div>
	);
};
