import React, { useState, Fragment, useEffect } from "react";
import { Input, ListGroup, ListGroupItem } from "reactstrap";
import "./autocomplete.scss";

interface IAutocomplete {
  onSelect(data: any): any;
  getReservations(data: any): any;
  selectedRecords: Array<any>;
}

//* This version of Autocomplete is for using with forms(final for in this case)
const AutocompleteForm = (props: IAutocomplete) => {
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onChange = (e: any) => {
    const userInput = e.currentTarget.value;
    if (userInput.length > 4) {
      getReservationsAsync(userInput.trim());
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
    setUserInput(userInput);
  };

  useEffect(() => {
    filterSuggestions();
  }, [suggestions]);

  const getReservationsAsync = async (userInput: any) => {
    const invocc = await props.getReservations(userInput);
    setShowSuggestions(true);
    setSuggestions(invocc);
  };

  const filterSuggestions = () => {
    if (props.selectedRecords.length > 0) {
      const selectedData = suggestions.filter(
        (suggestion: any) => {
          return !props.selectedRecords.some((x: any) => {
            return x.reservationNo === suggestion.reservationNo;
          });
        }
      );
      setFilteredSuggestions(selectedData);
    } else {
      setFilteredSuggestions(suggestions);
    }
  };

  const onClick = (e: any, suggestion: any) => {
    props.onSelect(suggestion);
    filterSuggestions();
    setShowSuggestions(false);
  };

  const onClickInput = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <Fragment>
      <Input
        type="search"
        onChange={onChange}
        value={userInput}
        onClick={onClickInput}
      />
      {showSuggestions &&
        userInput &&
        (filteredSuggestions.length ? (
          <div className="autocomplete">
            <ListGroup>
              {filteredSuggestions.map(
                (suggestion: any, index) => {
                  return (
                    <ListGroupItem
                      key={index}
                      onClick={e => {
                        onClick(e, suggestion);
                      }}
                    >
                      {suggestion.reservationNo} - {suggestion.touristsStr}
                    </ListGroupItem>
                  );
                }
              )}
            </ListGroup>
          </div>
        ) : (
          <div className="no-suggestions">
            <em>No suggestions</em>
          </div>
        ))}
    </Fragment>
  );
};

export default AutocompleteForm;
