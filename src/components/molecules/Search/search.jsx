import React from 'react';
import Button from '../../atoms/Button/button';
import Input from '../../atoms/Input/input';
import { searchPlaceholder, searchIcon } from '../../../utils/strings';

const btnHandler = event => event.preventDefault();

const Search = ({ searchHandler }) => (
  <form className="search">
    <Button className="search__btn" btnHandler={btnHandler}>
      <img src={searchIcon} alt="search" />
    </Button>
    <Input
      type="text"
      className="search__input"
      name="search"
      placeholder={searchPlaceholder}
      onChange={searchHandler}
    />
  </form>
);

export default Search;
