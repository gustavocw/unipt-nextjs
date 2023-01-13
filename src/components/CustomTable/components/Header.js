import { CloseIcon, SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Header({
  filterProps,
  searchValue,
  filterByProp,
  selectFilterProps,
  handleCancelSearch,
  handleFilterByValue,
  handleFilterByPropChanged,
  handleSearchValueChanged,
}) {
  return (
    filterProps.length > 0 && (
      <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
        <HStack spacing={2} alignItems={"center"} w={300}>
          <Text whiteSpace={"nowrap"}>Filter by</Text>
          <Select
            value={filterByProp}
            onChange={({ target: { value } }) => {
              handleFilterByPropChanged(value);
              handleFilterByValue(true);
            }}
            placeholder="Select"
          >
            {filterProps.map((item) => (
              <option key={"filterProp-" + item.prop} value={item.prop}>
                {item.desc}
              </option>
            ))}
          </Select>
        </HStack>
        {selectFilterProps?.options ? (
          <Select
            defaultValue={selectFilterProps.defaultValue}
            onChange={({ target: { value } }) => {
              handleSearchValueChanged(value);
              handleFilterByValue(true);
            }}
          >
            {selectFilterProps?.options?.map((item) => (
              <option key={"filterValue-" + item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        ) : (
          <InputGroup maxW={300}>
            <InputLeftElement
              pointerEvents="none"
              color="gray.700"
              fontSize="1.2em"
            >
              <SearchIcon />
            </InputLeftElement>
            <Input
              placeholder="Type Enter to Search"
              value={searchValue}
              onChange={({ target: { value } }) =>
                handleSearchValueChanged(value)
              }
            />
            <InputRightElement
              fontSize="0.5em"
              onClick={() => handleCancelSearch()}
            >
              <CloseIcon
                size={"sm"}
                icon={<SmallCloseIcon color="green.700" />}
              />
            </InputRightElement>
          </InputGroup>
        )}
      </Stack>
    )
  );
}

export default Header;
