const saveMediaListEntry = `
mutation (
    $id: Int,
    $mediaId: Int,
    $status: MediaListStatus,
    $scoreRaw: Int,
    $progress: Int,
    $repeat: Int,
    $notes: String,
    $startedAt: FuzzyDateInput,
    $completedAt: FuzzyDateInput) {
  SaveMediaListEntry (
      id: $id,
      mediaId: $mediaId,
      status: $status,
      scoreRaw: $scoreRaw,
      progress: $progress,
      repeat: $repeat,
      notes: $notes,
      startedAt: $startedAt,
      completedAt: $completedAt) {
    {mediaListFields}
    media {
      {mediaFields}
    }
  }
}
`;
export { saveMediaListEntry };
