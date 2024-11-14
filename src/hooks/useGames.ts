import { GameQuery } from "../App.tsx";
import useData from "./useData.ts";

export interface Platform {
  name: string;
  id: number;
  slug: string;
}

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
      },
    },
    [gameQuery]
  );

export default useGames;
