import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrder = [
    { label: "Relevance", value: "" },
    { label: "Date Added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average Rating", value: "-rating" },
  ];
  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((o) => (
          <MenuItem
            key={o.value}
            value={o.value}
            onClick={() => onSelectSortOrder(o.value)}
          >
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
