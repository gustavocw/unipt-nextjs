import React from "react";
import {
  HStack,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Body({
  rows,
  columns,
  actions,
  pageIndex,
  currentPageSize,
  tableProperties,
  trProperties,
  thProperties,
  tdProperties,
  sortProp,
  sortAsc,
  noDataFoundMessage,
  onSortBy,
  getPropByString,
}) {
  const tempRows = rows.slice(
    pageIndex * Number(currentPageSize),
    pageIndex * Number(currentPageSize) + Number(currentPageSize)
  );

  return (
    <Table {...tableProperties}>
      <Thead>
        <Tr {...trProperties}>
          <Th {...thProperties} w={"0px"}></Th>
          {columns.map((col, ind) => (
            <Th
              key={"customTableTh-" + ind}
              {...thProperties}
              onClick={() => onSortBy(col.prop)}
            >
              <HStack>
                {sortProp == col.prop &&
                  (sortAsc ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />)}
                <Text>{col.desc}</Text>
              </HStack>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.length > 0 ? (
          tempRows.map((row) => (
            <Tr key={row.id} {...trProperties}>
              {actions ? (
                <Td
                  {...tdProperties}
                  w={`${actions.length * 24 + actions.length * 5}px`}
                >
                  <HStack spacing={2}>
                    {actions.map((act, ind) => (
                      <IconButton
                        key={"iconbtn-" + ind}
                        size={act.size}
                        icon={act.icon}
                        colorScheme={act.colorScheme}
                        onClick={() => act.onClick(row)}
                      />
                    ))}
                  </HStack>
                </Td>
              ) : (
                <Td></Td>
              )}
              {columns.map((col, ind) => (
                <Td key={"customTableTd-" + ind} {...tdProperties}>
                  {col.translate
                    ? col.translate(getPropByString(row, col.prop))
                    : getPropByString(row, col.prop)}
                </Td>
              ))}
            </Tr>
          ))
        ) : (
          <Tr>
            <Td colSpan={columns.length + 1}>{noDataFoundMessage}</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
}

export default Body;
