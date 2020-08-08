import React, { useState, useEffect } from "react";

export default function Home() {
	const [user, setUser] = useState({
		name: { title: "", first: "", last: "" },
		picture: { large: "", medium: "" }
	});

	useEffect(() => {
		async function fetchData() {
			const url = "https://api.randomuser.me/";
			const response = await fetch(url);
			const data = await response.json();
			setUser({
				name: data.results[0].name,
				picture: data.results[0].picture
			});
		}
		fetchData();
	}, []);

	return (
		<div>
			<div>{user.name.title}</div>
			<div>{user.name.first}</div>
			<div>{user.name.last}</div>
			<img src={user.picture.large} />
		</div>
	);
}
