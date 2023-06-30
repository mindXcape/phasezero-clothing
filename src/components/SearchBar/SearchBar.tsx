import { Container } from 'react-bootstrap';
import { SearchIcon } from 'assets/icons';

function SearchBar() {
  return (
    <Container>
      <div className="search__bar__wrapper">
        <input type="text" placeholder="WHAT ARE YOU LOOKING FOR ....?" />
        <span>
          <SearchIcon sx={{ fontSize: '32px' }} />
        </span>
      </div>
    </Container>
  );
}

export default SearchBar;
