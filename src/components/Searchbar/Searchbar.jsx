import { Formik } from 'formik';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

import {
  Header,
  SearchForm,
  FormButton,
  Label,
  FormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <FormButton type="submit">
            <IoIosSearch size="2em" />
            <Label>Search</Label>
          </FormButton>

          <FormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
