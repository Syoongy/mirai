const getViewerQuery = `
query {
  Viewer {
    id
    name
    mediaListOptions {
      scoreFormat
    }
  }
}
`;
export { getViewerQuery };
