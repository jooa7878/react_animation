import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
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

const boxVars = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { borderRadius: "100px", scale: 0.5 },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVars} whileHover="hover" whileTap="click"></Box>
    </Wrapper>
  );
}

export default App;
