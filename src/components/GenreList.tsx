import { List, Image, HStack, Text, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/get-cropped-image";
import { Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, err } = useGenres();
  if (err) return;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((g) => (
          <Button
            fontWeight={selectedGenre?.id === g.id ? "bold" : "normal"}
            fontSize="lg"
            variant="link"
            onClick={() => onSelectGenre(g)}
            key={g.id}
            paddingY="5px"
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(g.image_background)}
              />
              <Text fontSize="lg">{g.name}</Text>
            </HStack>
          </Button>
        ))}
      </List>
    </>
  );
};

export default GenreList;
