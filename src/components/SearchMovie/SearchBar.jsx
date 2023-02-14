// import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Icon,
} from './SearchBar.styled';

export const SearchMovie = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const { query } = event.target.elements;
    onSearch(query.value);

    event.target.reset();
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput name="query" />
        <SearchFormButton>
          <Icon />
        </SearchFormButton>
      </SearchForm>
    </Header>
  );
};
