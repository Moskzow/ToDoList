import React from "react";
import ToDoList from "./ToDoList";

//create your first component
export function Home() {
	return (
		<div className="container-fluid text-center">
			<ToDoList />
		</div>
	);
}
