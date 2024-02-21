import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { utilFunc } from '@shared';
import { usePlan } from '@hooks';
import { PageTitle } from '@components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const utilFuncNumber = utilFunc(1);
  console.log(utilFuncNumber);
  const planFunc = usePlan();
  console.log(planFunc);
  return (
    <StyledApp>
      <PageTitle text="페이지 타이틀" />
      <NxWelcome title="monorepo.user" />
    </StyledApp>
  );
}

export default App;
