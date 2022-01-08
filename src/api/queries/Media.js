const getMediaQuery = `
query ($id: Int!) {
    Media (id: $id, type: ANIME) {
      {mediaFields}
    }
  }
`;
export { getMediaQuery };
