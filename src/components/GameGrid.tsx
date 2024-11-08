import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, err, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={5}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameSkeleton />
            </GameCardContainer>
          ))}
        {data.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
