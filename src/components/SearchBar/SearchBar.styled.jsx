import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #666782;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form.attrs({ autoComplete: 'off' })`
  display: flex;
  align-items: center;
  min-height: 54px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
  /* border: 1px solid rgb(37, 12, 39); */
  overflow: hidden;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const SearchFormInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Search movies...'
})`
  display: inline-block;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 4px;
  padding-left: 10px;

  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;

export const SearchFormButton = styled.button.attrs({ type: 'submit' })`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: transparent;
  opacity: 0.6;
  padding: 10px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled(ImSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30%;
  left: 30%;
`;