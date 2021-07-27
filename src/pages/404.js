import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Eye = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background: #fff;
  transform: ${(props) => `rotate(${props.deg}deg)`};
  box-shadow: var(--base-shadow);
  &::after {
    position: absolute;
    bottom: 34px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 50%;
    content: ' ';
  }
`;
const NotFoundPage = () => {
  const [mousePos, setMousePos] = useState({
    left: 0,
    top: 0,
  });
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  function handleMouseMove(ev) {
    setMousePos({ left: ev.pageX, top: ev.pageY });
  }
  useEffect(() => {
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
    const x = leftEye.offsetLeft + 30;
    const y = leftEye.offsetTop + 30;
    const rad = Math.atan2(mousePos.left - x, mousePos.top - y);
    const rotation = rad * (180 / Math.PI) * -1 + 180;
    leftEye.style.transform = `rotate(${rotation}deg)`;
    rightEye.style.transform = `rotate(${rotation}deg)`;
  }, [mousePos]);
  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      style={{ cursor: 'crosshair' }}
    >
      <Layout>
        <Seo title="404: Not found" />
        <h1 style={{ textAlign: 'center' }}>404: Not Found</h1>
        <p style={{ textAlign: 'center' }}>Sorry, nothing here. Look around.</p>
        <div style={{ width: '100%', textAlign: 'center', padding: '100px 0' }}>
          <Eye ref={leftEyeRef} /> <Eye ref={rightEyeRef} />
        </div>
        <p style={{ textAlign: 'center' }}>
          <Link to="/">Go back home</Link>
        </p>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
