"use client";
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-start;
  width: fit-content;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding-right: 1rem;
  padding-left: 1rem;
  border-bottom: ${({ active }) => active ? '3px solid var(--primary);' : '3px solid #ffffff'};
`;
