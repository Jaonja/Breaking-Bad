import React from "react";
import Card from './components/molecules/Card.js'

function App() {
	const todos = [
		{id: 1, completed: false, titles: 'Купить Хлеб' },
		{id: 1, completed: false, titles: 'Купить масло' },
		{id: 1,  completed: false, titles: 'Купить молоко'},
	]
	return <div className="app">
		<h1>Реакт туториал</h1>
		<Card todos={todos}/>
	</div>;
}

export default App;
