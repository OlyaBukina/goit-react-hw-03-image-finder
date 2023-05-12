import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const LoadMoreBtn = ({ incrementPage }) => {
  return (
    <StyledButton type="button" onClick={incrementPage}>
      Load more
    </StyledButton>
  );
};

LoadMoreBtn.propTypes = { incrementPage: PropTypes.func.isRequired };
