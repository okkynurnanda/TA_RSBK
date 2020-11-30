import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid #dfe5ef;
`;

const SearchIcon = styled.div`
  display: inline-flex;
  height: 24px;
  width: 24px;

  color: #000000;

  font-size: 14px;
  font-weight: bolder;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const SearchInput = styled.input`
  height: 24px;
  width: 100%;
  margin-left: 10px;

  border: none;
  background-color: transparent;
  color: #000000;

  font-size: 14px;
  font-weight: bolder;
`;

export { SearchBarContainer, SearchIcon, SearchInput };
