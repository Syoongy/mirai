const getMediaSeasonQuery = `
query ($season: MediaSeason!, $seasonYear: Int!, $page: Int) {
    Page(page: $page) {
      media(season: $season, seasonYear: $seasonYear, type: ANIME, sort: START_DATE) {
        {mediaFields}
      }
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;
export { getMediaSeasonQuery };
