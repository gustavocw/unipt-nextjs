import {
  Button,
  HStack,
  IconButton,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useMemo } from "react";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

function Footer({
  rows,
  pageSizes,
  pageIndex,
  currentPageSize,
  handleGoToPageChanged,
  handlePageIndexChanged,
  handlePageSizeChanged,
}) {
  const pages = useMemo(
    () => Math.ceil(rows.length / currentPageSize),
    [rows, currentPageSize]
  );

  return (
    rows.length > 0 && (
      <HStack
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={10}
        w="full"
      >
        <HStack whiteSpace={"nowrap"}>
          <Text>Go to Page</Text>
          <Input type={"number"} size={"sm"} onChange={handleGoToPageChanged} />
        </HStack>
        <HStack spacing={2}>
          {pageIndex > 0 && (
            <IconButton
              size={"sm"}
              icon={<BsChevronDoubleLeft />}
              onClick={() => handlePageIndexChanged(0)}
            />
          )}
          {pageIndex > 0 && (
            <IconButton
              size={"sm"}
              icon={<BsChevronLeft />}
              onClick={() =>
                pageIndex - 1 >= 0 && handlePageIndexChanged(pageIndex - 1)
              }
            />
          )}
          <Button size={"sm"} colorScheme={"teal"}>
            <Text>{`${pageIndex + 1} of ${pages} items`}</Text>
          </Button>
          {pageIndex < Math.ceil(rows.length / currentPageSize) - 1 && (
            <IconButton
              size={"sm"}
              icon={<BsChevronRight />}
              onClick={() =>
                pageIndex + 1 <= Math.ceil(rows.length / currentPageSize) - 1 &&
                handlePageIndexChanged(pageIndex + 1)
              }
            />
          )}
          {pageIndex < Math.ceil(rows.length / currentPageSize) - 1 && (
            <IconButton
              size={"sm"}
              icon={<BsChevronDoubleRight />}
              onClick={() =>
                handlePageIndexChanged(
                  Math.ceil(rows.length / currentPageSize) - 1
                )
              }
            />
          )}
        </HStack>
        <HStack justifySelf={"flex-end"} alignItems={"center"} spacing={2}>
          <Select
            maxW={100}
            value={currentPageSize}
            onChange={({ target: { value } }) =>
              handlePageSizeChanged(Number(value))
            }
          >
            {pageSizes.map((opt) => (
              <option key={"page-size-opt-" + opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          <Text whiteSpace={"nowrap"}>Per page</Text>
        </HStack>
      </HStack>
    )
  );
}

export default Footer;
