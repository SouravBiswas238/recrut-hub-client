import React from 'react';

const ShowingSearchResultInfo = ({ searchedResults }) => {
  searchedResults?.queries &&
    console.log(Object.values(searchedResults?.queries));
  return (
    <div>
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {searchedResults?.queries ? (
            <span>
              Filter applied "
              {Object.values(searchedResults?.queries).map(
                (singleValue, index) => (
                  <span>
                    {singleValue}{' '}
                    {index === searchedResults?.queries.length - 1 ? '' : ','}
                  </span>
                )
              )}
              "
            </span>
          ) : (
            <span>No filter applied. Showing all</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowingSearchResultInfo;
