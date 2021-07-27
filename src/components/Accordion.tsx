import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Chevron from '../assets/chevron';

type accordionProps = {
  isExpanded?: boolean;
  title: string;
};
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 1rem;
  margin-top: 1.5rem;
  .accordion {
    box-shadow: var(--base-shadow);
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: none;
    outline: none;
    background-color: var(--plum100);
    transition: border-radius 0.2s, background-color 0.2s, box-shadow 0.2s;
    padding: 0 1.2rem;
    border-radius: 1rem;
    &:hover {
      box-shadow: var(--hover-shadow);
    }
    &__title {
      color: var(--plum700);
      font-size: 1rem;
      font-weight: 600;
      transition: color 0.2s;
      padding: 0.8rem 0 !important;
      margin: 0;
    }
    &__icon {
      margin-left: auto;
      transform: rotate(90deg);
      width: 1.4rem;
      height: 1.4rem;
      transition: fill 0.2s, transform 0.2s, box-shadow 0.2s;
      fill: var(--plum);
    }
    &__content {
      background-color: white;
      overflow: hidden;
      border-radius: 0 0 1rem 1rem;
      background: var(--hp-off-white);
      transition: max-height 0.2s, box-shadow 0.2s;
      box-shadow: inset var(--base-shadow);
    }
    &__body {
      padding: 18px;
      border-radius: 0 0 1rem 1rem;
      font-size: 1.8rem;
    }
  }
  .active {
    border-radius: 1rem 1rem 0 0;
    background-color: var(--plum700);
    .accordion__title {
      color: #fff;
    }
  }
  .rotate {
    transform: rotate(-90deg);
    fill: #fff;
  }
`;

const Accordion: React.FC<accordionProps> = ({
  isExpanded,
  title,
  children,
}) => {
  const [setActive, setActiveState] = useState(isExpanded ? 'active' : '');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState(
    isExpanded ? 'accordion__icon rotate' : 'accordion__icon'
  );

  const content = useRef(null);

  useEffect(() => {
    setHeightState(isExpanded ? `${content.current.scrollHeight}px` : '0px');
  }, [isExpanded]);
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    );
  }

  return (
    <AccordionSection>
      <button
        className={`accordion ${setActive}`}
        type="button"
        onClick={toggleAccordion}
      >
        <h3 className="accordion__title">{title}</h3>
        <Chevron className={`${setRotate}`} width={10} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__body">{children}</div>
      </div>
    </AccordionSection>
  );
};

export default Accordion;
