import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ background }) => background};
  padding: 20px;
  border-radius: 15px 0px 0px 15px;
  margin-top: 0px;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  overflow: hidden;
`;
