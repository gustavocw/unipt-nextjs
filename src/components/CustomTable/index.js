import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useMemo } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

const CustomTable = ({
  rows = [],
  columns = [],
  actions = [],
  filterProps = [],
  defaultSortProp = "",
  sortAscendent = false,
  tableProperties = {},
  trProperties = {},
  thProperties = {},
  tdProperties = {},
  noDataFoundMessage = "No data found.",
  pageSizes = [],
  defaultPageSize,
}) => {
  const [currentPageSize, setCurrentPageSize] = useState(
    defaultPageSize || pageSizes[0] || 20
  );

  const [pageIndex, setPageIndex] = useState(0);
  const [filterByProp, setFilterByProp] = useState("");
  const [sortProp, setSortProp] = useState(defaultSortProp || "lastUpdate");
  const [sortAsc, setSortAsc] = useState(sortAscendent || false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setisSearching] = useState(false);
  const [selectFilterProps, setselectFilterProps] = useState(null);

  const tempRows = useMemo(() => {
    let newRows = rows;

    if (filterByProp && searchValue && isSearching)
      newRows = rows.filter((ele) =>
        searchValue
          ? getPropByString(ele, filterByProp)
              ?.toString()
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) >= 0
          : true
      );

    newRows = newRows.sort((a, b) => {
      const res = getPropByString(a, sortProp) > getPropByString(b, sortProp);
      return sortAsc ? res : !res;
    });

    return newRows;
  }, [
    rows,
    filterByProp,
    searchValue,
    sortProp,
    sortAsc,
    pageIndex,
    currentPageSize,
  ]);

  const onSortBy = (prop) => {
    setSortAsc(!sortAsc);
    setSortProp(prop);
    setPageIndex(0);
  };

  const handleGoToPageChangedFn = (e) => {
    e.preventDefault();
    const page = e.target.value;
    page > 0 && page <= pages && setPageIndex(page - 1);
  };

  const handleFilterByPropChangedFn = (value) => {
    const prop = filterProps.find((prop) => prop.prop == value);
    setselectFilterProps(prop);
    setFilterByProp(value);
    setSearchValue(prop?.defaultValue ?? "");
  };

  const handleSearchValueChangedFn = (value) => setSearchValue(value);

  const handleFilterByValueFn = (value) => setisSearching(value);

  const handleCancelSearchFn = () => {
    setSearchValue("");
    setFilterByProp("");
    setisSearching(false);
  };

  return (
    <Stack w={'full'}>
      <Header
        filterProps={filterProps}
        searchValue={searchValue}
        filterByProp={filterByProp}
        selectFilterProps={selectFilterProps}
        handleFilterByValue={handleFilterByValueFn}
        handleCancelSearch={handleCancelSearchFn}
        handleSearchValueChanged={handleSearchValueChangedFn}
        handleFilterByPropChanged={handleFilterByPropChangedFn}
      />
      <Body
        rows={tempRows}
        columns={columns}
        actions={actions}
        tableProperties={tableProperties}
        trProperties={trProperties}
        thProperties={thProperties}
        tdProperties={tdProperties}
        sortAsc={sortAsc}
        sortProp={sortProp}
        pageIndex={pageIndex}
        currentPageSize={currentPageSize}
        noDataFoundMessage={noDataFoundMessage}
        onSortBy={onSortBy}
        getPropByString={getPropByString}
      />
      <Footer
        rows={tempRows}
        pageSizes={pageSizes}
        pageIndex={pageIndex}
        currentPageSize={currentPageSize}
        handlePageIndexChanged={setPageIndex}
        handlePageSizeChanged={setCurrentPageSize}
        handleGoToPageChanged={handleGoToPageChangedFn}
      />
    </Stack>
  );
};

function getPropByString(obj, propString) {
  // console.log("prop to filter ", obj, propString);
  if (!propString) return obj;

  var prop,
    props = propString.split(".");

  for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
    prop = props[i];

    var candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  // console.log(obj[props[i]]);
  return obj[props[i]];
}

export default CustomTable;
