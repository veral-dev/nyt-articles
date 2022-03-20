import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  flex-direction: column;
  > div {
    display: flex;
    @media (max-width: 768px) {
      justify-content: space-between;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  margin-bottom: 10px;
  padding-left: 15px;
  border-radius: 10px;
  background-color: #efefef;
  border: 1px solid gray;
  width: 100%;
  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const DateForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 10px;
  margin-bottom: 30px;
  > div:not(:first-child) {
    margin-left: 1rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  > div {
    width: 100%;
    @media (min-width: 768px) {
      width: 200px;
    }
  }
  button {
    margin-left: 1rem;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 1rem;
      margin-left: 0;
    }
  }
  button:hover {
    @media (min-width: 768px) {
      transition: 0.4s;
      transform: translateY(3px);
    }
  }
`;

export const InputDate = styled.input`
  height: 40px;
  border-radius: 10px;
  background-color: #efefef;
  border: 1px solid gray;
  width: 100%;
`;

export const Select = styled.select`
  height: 40px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  background-color: #efefef;
  border: 1px solid gray;
  width: 120px;

  @media (min-width: 768px) {
    width: 150px;
  }

  option {
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px;
  }
`;
