import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-600, 600], [-360, 360]);
  const gradient = useTransform(
    x,
    [-600, 0, 600],
    [
      "linear-gradient(135deg,rgb(0,210,238),rgb(0,83,238))",
      "linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238))",
      "linear-gradient(135deg,rgb(0, 237, 155),rgb(238, 175, 0))",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default App;
