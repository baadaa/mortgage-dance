import React from 'react';

type iconProps = {
  color?: string;
};

const IconKnowledge: React.FC<iconProps> = ({ color = '#0c3258' }) => (
  <svg
    height="60"
    width="60"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill={color} stroke={color} strokeLinecap="square" strokeWidth="3">
      <circle cx="29" cy="21" fill="none" r="4" stroke={color} />
      <path
        d="M38,46V35.725A19,19,0,1,0,7,21v2L3,32l4,2v8a4,4,0,0,0,4,4h8A10,10,0,0,0,29,36V25"
        fill="none"
        stroke={color}
      />
      <path d="M36.071,28.071a10,10,0,0,0,0-14.142" fill="none" />
      <path d="M21.929,13.929a10,10,0,0,0,0,14.142" fill="none" />
    </g>
  </svg>
);

const IconBook: React.FC<iconProps> = ({ color = '#0c3258 ' }) => (
  <svg
    height="60"
    width="60"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill={color} stroke={color} strokeLinecap="square" strokeWidth="3">
      <polyline fill="none" points=" 35,2 35,19 29,15 23,19 23,2 " />
      <path
        d="M42,38V2H10C7.791,2,6,3.791,6,6v36"
        fill="none"
        stroke={color}
        strokeLinecap="butt"
      />
      <path
        d="M42,46v-8H10 c-2.209,0-4,1.791-4,4v0c0,2.209,1.791,4,4,4H42z"
        fill="none"
        stroke={color}
      />
      <line fill="none" stroke={color} x1="12" x2="12" y1="38" y2="10" />
    </g>
  </svg>
);

const IconMortgage: React.FC<iconProps> = ({ color = '#0c3258 ' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 48 48"
  >
    <g
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="3"
      transform="translate(0.5 0.5)"
      fill={color}
      stroke={color}
    >
      <line x1="24" y1="11" x2="24" y2="37" fill="none" strokeMiterlimit="10" />
      <path
        d="M30,15.41c-2.912-1.6-12.085-2.8-12.085,2.719,0,6.6,11.648,4.271,11.648,10.095s-7.571,5.387-12.813,3.493"
        fill="none"
        strokeMiterlimit="10"
      />
      <polyline
        points="5.932 2.26 4.474 13.854 15.858 10.682"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
      />
      <path
        d="M4.474,13.854A22,22,0,1,1,2,24"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="butt"
      />
    </g>
  </svg>
);

const IconAffordability: React.FC<iconProps> = ({ color = '#0c3258 ' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 48 48"
  >
    <g
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="3"
      transform="translate(0.5 0.5)"
      fill={color}
      stroke={color}
    >
      <line
        x1="21.2"
        y1="21.2"
        x2="13"
        y2="13"
        fill="none"
        strokeMiterlimit="10"
      />
      <circle cx="24" cy="24" r="4" fill="none" strokeMiterlimit="10" />
      <path
        d="M18.8,11A14.007,14.007,0,0,1,38,24"
        fill="none"
        strokeMiterlimit="10"
        strokeLinecap="butt"
      />
      <path
        d="M10,24a13.956,13.956,0,0,1,1-5.2"
        fill="none"
        strokeMiterlimit="10"
        strokeLinecap="butt"
      />
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
      />
    </g>
  </svg>
);

const IconTime: React.FC<iconProps> = ({ color = '#0c3258 ' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 48 48"
  >
    <g
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="3"
      transform="translate(0.5 0.5)"
      fill={color}
      stroke={color}
    >
      <polyline
        points="42 28 42 46 6 46 6 28"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="butt"
      />
      <line x1="17" y1="2" x2="31" y2="2" fill="none" strokeMiterlimit="10" />
      <line
        x1="24"
        y1="28"
        x2="32.5"
        y2="19.5"
        fill="none"
        strokeMiterlimit="10"
      />
      <line x1="24" y1="2" x2="24" y2="5" fill="none" strokeMiterlimit="10" />
      <circle
        cx="24"
        cy="28"
        r="18"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
      />
      <line x1="24" y1="16" x2="24" y2="18" fill="none" strokeMiterlimit="10" />
      <line x1="36" y1="28" x2="34" y2="28" fill="none" strokeMiterlimit="10" />
      <line
        x1="32.485"
        y1="36.485"
        x2="31.071"
        y2="35.071"
        fill="none"
        strokeMiterlimit="10"
      />
      <line x1="24" y1="40" x2="24" y2="38" fill="none" strokeMiterlimit="10" />
      <line
        x1="15.515"
        y1="36.485"
        x2="16.929"
        y2="35.071"
        fill="none"
        strokeMiterlimit="10"
      />
      <line x1="12" y1="28" x2="14" y2="28" fill="none" strokeMiterlimit="10" />
      <line
        x1="15.515"
        y1="19.515"
        x2="16.929"
        y2="20.929"
        fill="none"
        strokeMiterlimit="10"
      />
    </g>
  </svg>
);

const IconLibrary: React.FC<iconProps> = ({ color = '#0c3258 ' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 48 48"
  >
    <g
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="3"
      transform="translate(0.5 0.5)"
      fill={color}
      stroke={color}
    >
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="2"
        y1="32"
        x2="14"
        y2="32"
        strokeLinecap="butt"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="14"
        y1="32"
        x2="26"
        y2="32"
        strokeLinecap="butt"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="31.509"
        y1="32.107"
        x2="43.402"
        y2="30.509"
        strokeLinecap="butt"
      />
      <rect
        x="2"
        y="4"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        width="12"
        height="40"
      />
      <line fill="none" strokeMiterlimit="10" x1="8" y1="10" x2="8" y2="20" />
      <rect
        x="14"
        y="4"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        width="12"
        height="40"
      />
      <line fill="none" strokeMiterlimit="10" x1="20" y1="10" x2="20" y2="20" />
      <rect
        x="30.391"
        y="3.379"
        transform="matrix(0.9911 -0.1331 0.1331 0.9911 -2.7886 5.0529)"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        width="12"
        height="40"
      />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="34.527"
        y1="9.504"
        x2="35.858"
        y2="19.415"
      />
    </g>
  </svg>
);

export {
  IconKnowledge,
  IconBook,
  IconMortgage,
  IconAffordability,
  IconTime,
  IconLibrary,
};
