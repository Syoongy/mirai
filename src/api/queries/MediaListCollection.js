const getMediaListQuery = `
query ($userName: String!) {
  MediaListCollection (userName: $userName, type: ANIME) {
    lists {
      entries {
        ...mediaListFragment
      }
    }
  }
}

fragment mediaListFragment on MediaList {
  
  id
  status
  score(format: POINT_10)
  progress
  repeat
  private
  notes
  startedAt { year month day }
  completedAt { year month day }
  updatedAt
  
  media {
    ...mediaFragment
  }
}

fragment mediaFragment on Media {
  id
  idMal
  title {
    romaji(stylised: true)
    english(stylised: true)
    native(stylised: true)
    userPreferred
  }
  format
  status
  description
  startDate { year month day }
  endDate { year month day }
  episodes
  duration
  countryOfOrigin
  updatedAt
  coverImage { large }
  genres
  synonyms
  averageScore
  popularity
  studios { edges { node { name } } }
  nextAiringEpisode { airingAt episode }
}
`;
export { getMediaListQuery };
