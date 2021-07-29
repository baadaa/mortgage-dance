import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const LetterSectionStyle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  box-shadow: 0 1px 2rem rgba(0, 0, 0, 0.05);
  padding: 2rem;
  background: #fff;
  margin: 1.2rem 0;
  border-radius: 1.2rem;
  &:first-of-type {
    margin-top: 0;
  }
  h2 {
    position: sticky;
    flex: 0 0 3rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4rem;
    top: calc(var(--nav-height) + 90px);
    box-sizing: border-box;
    text-transform: uppercase;
    margin: 0 1.5rem 0 0;
    background: var(--plum50);
    border: 1px solid var(--plum200);
    /* box-shadow: 0 1px 15px rgba(0, 0, 0, 0.21); */
    color: var(--plum700);
    font-size: 1.1rem;
    @media screen and (max-width: 600px) {
      top: calc(var(--nav-height) + 85px);
    }
  }
  h3,
  p {
    margin: 0;
  }
  h3 {
    color: var(--hp-indigo);
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    flex: 0 0 200px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 1rem;
  }
  .defs {
    width: 100%;
  }
  .def {
    display: flex;
    align-items: flex-start;
    padding: 1.5rem 0;
    border-bottom: 3px solid var(--plum50);
    &:first-of-type {
      padding-top: 0;
    }
    &:last-of-type {
      padding-bottom: 0;
      border-bottom: none;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      h3 {
        flex-basis: auto;
        width: 100%;
        margin-bottom: 1.5rem;
      }
      p {
        margin-left: 0;
      }
    }
  }
`;
const LetterSection = ({ section }) => {
  const hash = section.letter === '#' ? 'num' : section.letter;
  const termsSorted = section.terms.sort((a, b) => (a.term > b.term ? 1 : -1));
  if (termsSorted.length === 0) return null;
  return (
    <LetterSectionStyle>
      <h2>{section.letter}</h2>
      <div className="defs">
        {termsSorted.map((item, index) => (
          <div className="def" key={`${item}${index}`}>
            <h3 id={`${hash}${index}`}>{item.term}</h3>
            <p>{parse(item.meaning)}</p>
          </div>
        ))}
      </div>
    </LetterSectionStyle>
  );
};

export default LetterSection;
