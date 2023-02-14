import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Icon,
} from './SearchBar.styled';

export const SearchBar = ({ onSearch }) => {

  const handleSubmit = event => {
    event.preventDefault();

    const { query } = event.target.elements;
    onSearch(query.value);

    event.target.reset();
  };

  return (
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput name="query" />
        <SearchFormButton>
          <Icon />
        </SearchFormButton>
      </SearchForm>
  );
};

SearchBar.propTypes ={
  onSearch: PropTypes.func.isRequired,
}