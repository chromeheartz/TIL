import React from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
}

const PageTitleComponent = styled.p`
  color: red;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const PageTitle = ({ text }: IProps) => (
  <PageTitleComponent>{text}</PageTitleComponent>
);

export default PageTitle;
