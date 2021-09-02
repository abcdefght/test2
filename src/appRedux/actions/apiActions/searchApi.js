import {
  searchSetIsLoading,
} from '../search';
// Third party.
import axios from "axios";

async function search(keyword) {
  const reqBody = {
    login_token: "INTERVIEW_SIMPLY2021",
    search_phrase: keyword,
  };

  const res = await axios
    .post("http://3.141.23.218:5000/interview/keyword_search", reqBody)
    .then(async (res) => {
      return res?.data?.data;
    })
    .catch((err) => {
      console.error(err);
    });

  return res;
}

export const apiActionSearch = (keyword) => {
  return async (dispatch, getState) => {
    dispatch(searchSetIsLoading(true));

    const res = await search(keyword);
    console.log('Search results: ', res);

    dispatch(searchSetIsLoading(false));
  };
};
