const deleteMediaListEntry = `
mutation ($id: Int!) {
    DeleteMediaListEntry (id: $id) {
      deleted
    }
  }
`;
export { deleteMediaListEntry };
