import React, { useState, useEffect, useCallback, useRef } from 'react';
import Highlighter from 'react-highlight-words';
import { PageProps } from 'gatsby';
import Fuse from 'fuse.js';
import kebabCase from 'lodash.kebabcase';

import styled from 'styled-components';

import Layout from '../components/layout';
import sections from '../data/glossaryContent';
import Seo from '../components/seo';
import LetterSection from '../components/LetterSection';

const HeadingStyles = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1em;
  margin-bottom: 2em;
  padding: 0.6em 0;
  color: var(--plum700);
  border-bottom: 2px solid var(--plum200);
  border-top: 2px solid var(--plum200);
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    letter-spacing: 0.8em;
  }
  @media screen and (max-width: 768px) {
    letter-spacing: 0.5em;
  }
  @media screen and (max-width: 550px) {
    letter-spacing: 0.25em;
  }
`;

const SubNavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  position: relative;
  position: sticky;
  top: var(--nav-height);
  z-index: 3;
  padding: 10px 0;
  background-color: var(--plum50);
  .searchPanel {
    width: 100%;
    overflow: visible;
  }
  button.reset {
    position: absolute;
    cursor: pointer;
    color: var(--mud);
    top: 0;
    right: 1rem;
    bottom: 0;
    border: none;
    outline: none;
    background: transparent;
    transition: color 0.2s;
    font-size: 2rem;
    &:hover {
      color: var(--plum);
    }
  }
  .searchArea {
    width: 100%;
    overflow: visible;
    .searchField {
      position: relative;
      display: block;
    }
    .searchResultList {
      position: absolute;
      left: 0;
      top: 3rem;
      width: 100%;
      bottom: 0;
      height: 50vh;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s, transform 0.2s;
      pointer-events: none;
      transform: translateY(-3rem);
      &[data-active='true'] {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
        ul {
          pointer-events: all;
        }
      }
    }
    input {
      width: 100%;

      font-weight: 300;
      line-height: 1;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 3rem;
      &:focus {
        outline: none;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
      }
    }
    ul {
      position: static;
      opacity: 1;
      margin: 0;
      box-sizing: border-box;
      max-height: 50vh;
      background: rgba(255, 255, 255, 0.9);
      overflow-y: scroll;
      box-shadow: var(--base-shadow);
      font-size: 1.2rem;
      list-style: none;
      padding: 1.5rem 2.5rem;
      transform: none;
      span,
      a span,
      span:hover,
      a span:hover {
        transform: none !important;
      }
    }
    li {
      line-height: 1.7;
    }
    a {
      background-color: transparent;
      text-decoration: none;
      color: var(--plum700);
      text-align: left;
      mark {
        background-color: var(--plum100);
        color: var(--plum800);
      }
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const GlossaryPage: React.FC<PageProps> = ({ location }) => {
  const currentPath = location.pathname;
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchEl = useRef(null);
  const termsSorted = (section) =>
    section.terms.sort((a, b) => (a.term > b.term ? 1 : -1));
  const dict = [];

  sections.forEach((section) => {
    const { letter } = section;
    termsSorted(section).forEach((term, index) => {
      const hash = letter === '#' ? 'num' : letter;
      dict.push({
        id: `#${hash}${index}`,
        term: term.term,
        category: term.category,
      });
    });
  });
  const fuse = new Fuse(dict, {
    isCaseSensitive: false,
    includeMatches: true,
    shouldSort: true,
    keys: ['term'],
  });
  const clickedListItem = (e) => {
    const selected = e.currentTarget.textContent;
    setSearchTerm(selected);
    setIsSearching(false);
  };
  const displaySearchResults = () => {
    if (searchResults.length === 0) return null;
    const list = searchResults.map((term) => (
      <li key={term.item.id}>
        <a href={`#${kebabCase(term.item.term)}`} onClick={clickedListItem}>
          <Highlighter
            searchWords={[...searchTerm]}
            textToHighlight={term.item.term}
          />
        </a>
      </li>
    ));
    return <ul>{list}</ul>;
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      setSearchResults([]);
      setSearchTerm('');
      return;
    }
    const foundTerms = fuse.search(e.target.value);
    setSearchResults(foundTerms);
    displaySearchResults();
  };
  const resetSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsSearching(false);
  };
  const checkEscape = useCallback(
    (e) => {
      if (!isSearching) return null;
      if (e.which === 27) {
        if (searchTerm !== '') {
          return resetSearch();
        }
        return setIsSearching(false);
      }
      if (
        e.which !== 8 &&
        e.which !== 9 &&
        e.which !== 13 &&
        e.which !== 37 &&
        e.which !== 38 &&
        e.which !== 39 &&
        e.which !== 40
      ) {
        setIsSearching(true);
        return searchEl.current.focus();
      }
    },
    [isSearching, searchTerm]
  );
  useEffect(() => {
    document.addEventListener('keydown', checkEscape, false);
    if (isSearching) {
      searchEl.current.focus();
    }
    return () => {
      document.removeEventListener('keydown', checkEscape, false);
    };
  }, [checkEscape, isSearching]);

  const SearchBlock: React.FC = () => (
    <SubNavStyle>
      <div className="searchPanel">
        <div className="searchArea">
          <span className="searchField">
            <input
              type="text"
              ref={searchEl}
              id="searchBar"
              name="searchBar"
              placeholder="Search for terms..."
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsSearching(true)}
            />
            <button
              type="button"
              className="reset"
              onClick={() => resetSearch()}
            >
              &times;
            </button>
            <div className="searchResultList" data-active={isSearching}>
              {displaySearchResults()}
            </div>
          </span>
        </div>
      </div>
    </SubNavStyle>
  );
  return (
    <Layout path={currentPath}>
      <Seo title="Mortgage Glossary" />
      <HeadingStyles>Mortgage Glossary</HeadingStyles>
      <SearchBlock />
      {sections.map((section) => (
        <LetterSection key={section.letter} section={section} />
      ))}
    </Layout>
  );
};

export default GlossaryPage;
