import React from 'react';
import {
  IconKnowledge,
  IconBook,
  IconMortgage,
  IconAffordability,
  IconTime,
  IconLibrary,
} from '../assets/icons';

const menuItems = [
  {
    title: 'Mortgage Basics',
    icon: <IconKnowledge color="var(--turquoise)" />,
    color: 'var(--turquoise)',
    subhead: 'What are some fundamentals you should know?',
    slug: '/basics',
  },
  {
    title: 'Glossary',
    icon: <IconBook color="var(--eggplant)" />,
    color: 'var(--eggplant)',
    subhead: 'What do all these gibberish actually mean?',
    slug: '/glossary',
  },
  {
    title: 'Mortgage Calculator',
    icon: <IconMortgage color="var(--plum)" />,
    color: 'var(--plum)',
    subhead: 'What will your monthly payment look like?',
    slug: '/mortgage-calculator',
  },
  {
    title: 'Affordability Calculator',
    icon: <IconAffordability color="var(--orange)" />,
    color: 'var(--orange)',
    subhead: 'How much can you really afford?',
    slug: '/affordability-calculator',
  },
  {
    title: 'Amortization Schedule Calculator',
    icon: <IconTime color="var(--berry)" />,
    color: 'var(--berry)',
    subhead: 'What will your principal and interest be over time?',
    slug: '/amortization-calculator',
  },
  {
    title: 'Other Resources',
    icon: <IconLibrary color="var(--sky600)" />,
    color: 'var(--sky600)',
    subhead: 'What else should you know?',
    slug: '/resources',
  },
];

export default menuItems;
