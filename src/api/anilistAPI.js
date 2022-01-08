import ky from "ky";
import { getViewerQuery } from "./queries/Viewer.js";
import { getMediaListQuery } from "./queries/MediaListCollection.js";

const useAuthorisationApi = (accessToken) => {
  const getAuthorisationToken = async () => {
    let data = null;
    try {
      const res = await ky
        .post("https://graphql.anilist.co", {
          body: JSON.stringify({ query: getViewerQuery }),
          headers: {
            Authorization: "Bearer " + accessToken.value,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .json();
      data = { err: false, val: res };
    } catch (error) {
      const errMsg = await error.response.json();
      data = { err: true, val: errMsg };
    }
    return data;
  };
  const getMediaList = async () => {
    let data = null;
    try {
      const variables = {
        userName: localStorage.getItem("viewer-name"),
      };
      const res = await ky
        .post("https://graphql.anilist.co", {
          body: JSON.stringify({
            query: getMediaListQuery,
            variables: variables,
          }),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwtKey"),
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .json();
      data = { err: false, val: res };
    } catch (error) {
      const errMsg = await error.response.json();
      data = { err: true, val: errMsg };
    }
    return data;
  };
  return { getAuthorisationToken, getMediaList };
};

export { useAuthorisationApi };
