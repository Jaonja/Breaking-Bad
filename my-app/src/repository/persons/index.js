import axios from "axios";

class Persons {
  getPersons = async () => {
    let result = { value: null, error: null };
    try {
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
  getQuote = async (name) => {
    let result = { value: null, error: null };
    try {
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/quote/random?author=" + name
      );
      result.value = response.data.length
        ? response.data[0].quote
        : "The character is missing a quote";
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}
export default new Persons();
