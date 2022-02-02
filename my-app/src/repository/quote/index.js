import axios from "axios";

class Quote {
  getPquote = async () => {
    let result = { value: null, error: null };
    try {
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/quote/random?"
      );
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}
export default new Quote();
