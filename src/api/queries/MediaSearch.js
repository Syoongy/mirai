const getMediaSearchQuery = `
query ($query: String!) {
    Page {
      media(search: $query, type: ANIME) {
        {mediaFields}
      }
    }
  }
`;
export { getMediaSearchQuery };
