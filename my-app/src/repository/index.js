import cardList from "./cardList";
import persons from "./persons";
import quote from "./quote";

class Reposirory {
  APICore = cardList;
	APIPersons = persons;
	APIPQuote = quote;
}

export default new Reposirory();
