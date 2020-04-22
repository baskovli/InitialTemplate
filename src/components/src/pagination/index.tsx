import React, { useState, Fragment, useEffect } from "react";
import {
  Pagination as PaginationBoostrap,
  PaginationItem,
  PaginationLink,
  Row,
  Col,
  Label
} from "reactstrap";

interface IPager {
  totalItems: any;
  currentPage: any;
  pageSize: any;
  totalPages: any;
  startPage: any;
  endPage: any;
  startIndex: any;
  endIndex: any;
  pages: Array<any>;
}

export interface IPagination {
  items: any;
  onChangePage(page: any, pageSize: any): any;
  initialPage: any;
  pageSize: any;
}

const Pagination = React.memo((props: IPagination) => {
  const [pageData, setPageData] = useState<IPager>();

  useEffect(() => {
    setPage(props.initialPage, props.pageSize);
  }, []);

  const onPageChange = (page: any) => {
    setPage(page, props.pageSize);
    props.onChangePage(page, props.pageSize);
  };

  const onPageSizeChange = (pageSize: any) => {
    setPage(1, pageSize);
    props.onChangePage(1, pageSize);
  };

  const setPage = (page: any, pageSize: any) => {
    const pager = getPager(props.items, page, pageSize);
    // const pageOfItems = props.items.slice(pager.startIndex, pager.endIndex + 1);
    setPageData(pager);
    //setSelectedPage(pageOfItems);
  };

  const getPager = (
    totalItems: any,
    currentPage: any,
    pageSize: any = 10
  ): IPager => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    // less than 10 total pages so show all
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages >= 10) {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  };

  return (
    <div>
      {pageData && pageData.pages.length > 0 && (
        <Fragment>
          <Row>
            <Col md={6}>
              <PaginationBoostrap aria-label="Page navigation">
                <PaginationItem>
                  <PaginationLink first onClick={() => onPageChange(1)} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    previous
                    onClick={() => onPageChange(pageData.currentPage - 1)}
                  />
                </PaginationItem>
                {pageData.pages.map((page: any, index: any) => (
                  <PaginationItem
                    key={index}
                    className={pageData.currentPage === page ? "active" : ""}
                  >
                    <PaginationLink onClick={() => onPageChange(page)}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationLink
                    next
                    onClick={() => onPageChange(pageData.currentPage + 1)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    last
                    onClick={() => onPageChange(pageData.totalPages)}
                  />
                </PaginationItem>
              </PaginationBoostrap>
            </Col>
            <Col md={4}>
              <Label className="float-right">
                Found {props.items} items on {pageData.totalPages} pages.
              </Label>
            </Col>
            <Col md={2}>
              <Label className="float-right">
                Page size{' '} 
                <select
                  onChange={e => {
                    onPageSizeChange(e.target.value);
                  }}
                  value={props.pageSize}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
              </Label>
            </Col>
          </Row>
        </Fragment>
      )}
    </div>
  );
});

export default Pagination;