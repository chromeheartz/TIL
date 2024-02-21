## monorepo

---

### 📌 Monorepo VS Multirepo

#### Monorepo와 Multirepo의 차이점

프로젝트를 진행하면서 시스템의 각 모듈을 개별 `repository` 에서 관리할 것인지, 하나의 `repository` 에서 관리할 것인지에 따라 `멀티레포 / 모노레포` 로 나뉘게 된다.

이 때 나누어서 관리하는 것을 `멀티레포` 하나의 저장소에서 관리하는 것을 `모노레포` 라고 한다.

### MonoRepo

<img width="494" alt="모노레포" src="https://github.com/chromeheartz/TIL/assets/95161113/3e7085de-9228-4dd3-84fc-f5d75d4ffd24">

**Monorepo는 하나의 repository에서 두개 이상의 프로젝트를 관리하는 것**을 뜻한다. 여러 프로젝트가 하나의 저장소를 사용한다고 무조건 모노레포라고 할 수는 없고 프로젝트 사이 의존성이 존재하거나 하는 관계가 존재한다.

서비스 연동이 소스 단위로 이루어지며, 최상위 폴더부터 트리 구조로 구성된다.

#### ✅ 장점

- 항상 모든 서비스가 연동된 상태를 유지하여 `지속적인 소스의 무결성` 을 보장한다.
- 모든 서비스가 연동된 상태에서 하나의 버전으로 관리가 가능하여 `통합 버전관리` 가 가능하다.
- 소스 단위의 연동이 이루어져 `코드 공유 및 재사용` 이 용이하다.
- 하나의 repo에서 작업하기 때문에 프로젝트 팀 간의 협업이 쉽다.
- 한 번의 코드 리뷰에 모든 변화가 요약된다.

#### ✴️ 단점

- 의존성 연결이 쉬워 `과도한 의존 관계` 가 나타날 수 있다.
- 레파지토리 크기가 크기 때문에 형상관리 및 CI 속도 저하가 발생한다.

<img width="490" alt="멀티레포" src="https://github.com/chromeheartz/TIL/assets/95161113/622cc387-ce4d-4f91-bc52-47ec663e9d0f">

멀티레포는 시스템의 서비스별로 repo 를 각자 만들어서 관리하여 별도의 폴더로 구성된다.

#### ✅ 장점

- 자율성이 높아 강한 오너쉽 확보가 가능하다.
- 코드 베이스가 나뉘어 있어 `협업시 충돌이 일어날 확률이 적다.`
- 레파지토리의 크기가 작아 `형상관리 및 CI 속도가 빠르다.`

#### ✴️ 단점

- 코드 재사용이 쉽지 않고 `코드가 중복될 확률` 이 높아진다.
- 하나의 feature 개발을 위해 여러 repo에 merge를 해야 한다.
- 코드 리뷰가 나누어진다.
- 프로젝트가 커질 경우 의존 그래프가 매우 복잡해진다.
- 프로젝트 생성시마다 `환경 세팅 등 번거로운 과정` 을 매번 거쳐야 한다.

### ⭐️ 결론

모노레포, 멀티레포는 간단히 생각하면 리포지토리를 어떻게 나눌 것이냐에 대한 방법론이다. 하지만 깊게 들여다보면 각각의 장단점이 존재하고 있고 주요 특징별로 고려해야 할 부분이 상당수 존재한다.

그렇다면 위 방법 중 어떠한 것을 선택해야 할까? 그 선택의 기준은 현재 혹은 미래에 계획 중인 시스템 구조가 무엇인지, 그리고 그에 맞는 것이 무엇인지 고민해보아야 한다. 만약, **구조가 여러 모듈로 쪼개져 있고 의존관계가 복잡하지 않은 경우 멀티레포가 관리**에 더 편할 수도 있다. 하지만, **시스템의 규모 및 개발 조직이 거대화되고 있다면, 그로 인해 의존성 그래프가 급격히 복잡해질 것으로 예측된다면, 모노리포가 관리**에 더 유용할 수 있다.

### 📌 nx를 이용한 react monorepo

그동안 `react` 를 이용한 `app` 들을 개발하며, `monorepo` 에 대한 고민 포인트들은 지속적으로 있어왔다. 예를 들면, `nodeJS` 를 활용한 디바이스별 서버 분리, 템플릿을 분리하는 용도 등이 포함 될 수 있다.

`react` 를 이용한 서비스의 경우, 특히나 `atomic design pattern` 을 사용하는 경우에는 각 서비스가 달라도 공통으로 사용되는 `atoms / molecules ...` 등과 `library` 가 존재할 수 있어 하나의 `component` 를 각 서비스에서 사용하기 위해서는 `npm / yarn / pnpm / learna` 등의 방법이 있다.

이번에는 `typesciprt` 기반의 `monorepo 및 react` 전반적인 인프라를 지원하는 [`nx`] 를 이용하여 monorepo를 구성해볼 것이다.

### 📌 nx

`nx` 는 생각보다 많은 `인프라` 를 제공한다. `react app` 은 물론이며 `nextjs, gatsby` 프로젝트 또한 지원하고, `cypress` 등을 이용한 `e2e` , `Jest / testing-library` 를 이용한 테스팅, `storybook` 까지 지원하니 `typescript` 기반으로 프로젝트를 진행한다면 대부분의 인프라를 `CLI` 로 설정하여 사용할 수 잇게 된다. 다만 커스터마이징이 필요한 내용들도 있다.

#### nx를 이용하여 App 생성하기

`nx` 는 `npx` 를 이용하여 `workspace` 를 생성할 수 있다.

```
// MyAppName이 루트 폴더의 이름이 된다.
npx create-nx-workspace MyAppName --preset=react
```

![스크린샷 2024-02-21 오후 12 53 26](https://github.com/chromeheartz/TIL/assets/95161113/f0ae8908-2da3-478f-9af7-1ddfb74067c9)

커맨드 입력후 내가 원하는 인프라를 구성하면 된다. `react` 용으로 만들기 위해서 `--preset=react` 를 이용하여 만들고, 이외에 `react` 용으로 설정할 수 있는 다른 preset도 있다

- next : `--preset=next`
- gatsby : `--preset=gatsby`

![스크린샷 2024-02-21 오후 12 56 53](https://github.com/chromeheartz/TIL/assets/95161113/bd62c6c7-9bc8-49bd-b704-55e05dce5b48)

기본적으로 `app` 을 설치할 시에 `apps` 폴더 내에 위치하게 되며, 프로젝트로 생성시에는 `e2e` 프로젝트도 같이 생성된다. 기본적으로 `jest 플러그인` 뿐만 아니라 `tsconfig / prettier` 까지 모두 기본 세팅이 완료되어 있어, 개발만 진행해도 충분할 정도로 되어있다.

#### ⭐️ 또 다른 app 추가 하기

```bash
npx nx g @nx/react:app myAppName2 --directory=apps/myAppName2
```

새로운 `app` 을 추가하려면 해당 명령어를 사용하고 `myAppName2` 자리에 내가 원하는 이름을 넣어주면 인프라 설정이 시작된다.

![스크린샷 2024-02-21 오후 1 17 56](https://github.com/chromeheartz/TIL/assets/95161113/a84d0794-f1d7-469d-9bb5-fbbbecdda421)

설정이 완료되면 `apps` 폴더 구조에 새로운 앱이 생긴것을 볼 수 있다.

![스크린샷 2024-02-21 오후 1 18 46](https://github.com/chromeheartz/TIL/assets/95161113/433c1988-637a-4e4f-ae47-faa8df5eaf3a)

#### ⭐️⭐️ 로컬 라이브러리 만들기

`monorepo` 를 사용하려는 제일 큰 이유중 하나였던 `소스 단위의 연동 / 코드 공유 및 재사용` 을 설정할 때가 되었다.
도메인 영역에 `assets / component / hooks / types / utils / ...` 등 일반적인 디자인 시스템 컴포넌트인 ui가 포함된다고 가정해보자. react 라이브러리 제네레이터를 사용하여 이러한 각 영역에 대한 새 라이브러리를 생성할 수 있다.

**--directory** 플래그를 사용하여 라이브러리를 하위 폴더에 배치하는 방법에 주목해야한다. 원하는 폴더 구조를 선택할 수 있으며, 모든 폴더를 루트 레벨로 유지할 수도 있다.

```bash
nx g @nx/react:library shared --unitTestRunner=vitest --bundler=none --directory=libs/shared
```

![스크린샷 2024-02-21 오후 1 24 14](https://github.com/chromeheartz/TIL/assets/95161113/c982491e-5cea-406c-8621-fe222cc66f22)

⭐️ `tsconfig.base.json` 에 각각 설정해주어서 import해서 사용할 수 있도록 구현했다.

```json
"paths": {
  "@shared": ["libs/shared/src/index.ts"],
  "@components": ["libs/shared/src/components/index.tsx"],
  "@types": ["libs/shared/src/types/index.ts"],
  "@common": ["libs/shared/src/assets/index.ts"],
  "@hooks": ["libs/shared/src/hooks/index.ts"]
}
```

![스크린샷 2024-02-21 오후 2 11 24](https://github.com/chromeheartz/TIL/assets/95161113/95bc6dae-4fb9-49d6-8d0b-efa26634261b)

```js
// monorepo.user/app.tsx
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
```

### 📍 nx reset / nx serve

`공유중인 로컬 라이브러리` 에서 변경사항이 생겼을 때 간혹 변경사항이 바로 적용 되지 않는 경우가 있다. 그런 때엔 `reset` 명령어를 한번 실행해주자

```bash
nx reset
```

추가로 `nx serve` 로 로컬에 띄워서 개발할 수 있다

```bash
nx serve monorepo.user
```

#### typescript + monorepo

확실히 `typescript` 를 이용한 `monorepo` 구성에는 좋은 인상을 받았다. 다만, 설정되어 있는 내용이 조금 복잡할 수 있으나, 이 부분은 어느정도 흐름에 따라 파악하면 커스터마이징이 가능한 수준이다.

다만, `react` 의 장점중 하나라고 볼 수 있는 자유도면에서 떨어질 수 있으며, 각 프로젝트에 필요하지 않은 플러그인도 설치될 수 있기 때문에, 프로젝트 구성에서는 조금 더 고민해볼 필요가 있다.

### 🫶🏻 최종 폴더구조

```
├── apps
│   ├── monorepo.admin
│   ├── monorepo.admin-e2e
│   ├── monorepo.user
│   └── monorepo.user-e2e
├── libs
│   ├── shared
│   │   └── src
│   │	  	└── assets
│   │    	└── components
│   │    	└── hooks
│   │    	└── types
│   │    	└── utils
│	└── index.ts
└── tsconfig.base.json
```

[`nx`]: https://nx.dev/
