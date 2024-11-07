import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, err, isLoading } = useGames();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={5}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer>
              <GameSkeleton key={s} />
            </GameCardContainer>
          ))}
        {games.map((g) => (
          <GameCardContainer>
            <GameCard key={g.id} game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
