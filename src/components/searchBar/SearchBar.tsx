import { Container } from 'react-bootstrap';
import '../../scss/main.scss';
import SearchIcon from '@mui/icons-material/Search';

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
