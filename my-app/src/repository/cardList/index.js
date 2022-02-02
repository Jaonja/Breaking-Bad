import axios from "axios";
class CardList {
  createCardList = async () => {
    let result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get(
        "https://www.breakingbadapi.com/api/characters?limit=40"
      );
      result.value = response.data;

      console.log(result);

    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}
export default new CardList();
