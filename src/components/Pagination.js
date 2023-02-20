import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div`
   margin: 0 10px;
  font-size: 20px;
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  cursor: pointer;
  
  // Add styles for selected page
  background-color: ${(props) => (props.isSelected ? "#007bff" : "transparent")};
  color: ${(props) => (props.isSelected ? "#fff" : "inherit")};

  &:hover {
    text-decoration: underline;
  }
`;

const PrevNextButton = styled.div`
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

 pointer-events: ${(props) => (props.disabled ? "none" : "all")}; 
 opacity: ${(props) => (props.disabled ? "0.5" : "1")}; 
 user-select: none;


  &:hover {
    text-decoration: underline;
  }
`;

const Pagination = ({ pageCount, selectedIndex, onPageClick }) => {
    const handlePageClick = (pageIndex) =>
    {

        onPageClick(pageIndex);
    };

    const prevPageIndex = selectedIndex - 1;
    const nextPageIndex = selectedIndex + 1;

    const prevButton = (
        <PrevNextButton
            key="prev"
            onClick={() => handlePageClick(prevPageIndex)}
            disabled={selectedIndex === 0}
        >
            &lt; Prev
        </PrevNextButton>
    );

    const nextButton = (
        <PrevNextButton
            key="next"
            onClick={() => handlePageClick(nextPageIndex)}
            disabled={selectedIndex === pageCount-1}
        >
            Next &gt;
        </PrevNextButton>
    );

    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(
            <PageNumber
                key={i}
                isSelected={i === selectedIndex}
                onClick={() => handlePageClick(i)}
            >
                {i+1}
            </PageNumber>
        );
    }

    return (
        <PaginationWrapper>
            {prevButton}
            {pages}
            {nextButton}
        </PaginationWrapper>
    );
};

export default Pagination;
