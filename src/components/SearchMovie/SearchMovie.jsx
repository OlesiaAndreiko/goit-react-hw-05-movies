// import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchMovie.styled';

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
          <ImSearch size={20} />
        </SearchFormButton>
      </SearchForm>
    </Header>
  );
};
