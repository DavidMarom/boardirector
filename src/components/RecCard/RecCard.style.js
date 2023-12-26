"use client";
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 15px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 170px;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
  height: 130px;
`;