# 🐛🔥 vscode debugging 기술문서

## breakpoints

- 디버깅을 목적으로 실행중인 디버깅 대상 프로세스를 의도적으로 멈추게 하는 장소

## logpoint

- 디버거로 중단되지 않고 대신 콘솔에 메세지를 기록하는 breakpoint의 변형
- 일시중지하거나 중지할수 없는 프로덕션 서버를 디버깅하는 동안 로깅을 삽입하는데 유용

## watch(조사식)

- 변수명을 추가하여 VARIABLES section 에 focus 되있는 동안 창에서 디버거가 인식한 올바른 모든 식을 관찰할 수 있다.

## call stack의 의미

- 컴퓨터 프로그램에서 현재 실행중인 서브루틴에 관한 저보를 저장하는 스택 자료구조
- 함수 호출을 스택구조(후입선출)로 기록하는 것
- call stack의 함수이름을 클릭하면 그 함수에서 반환된 라인이 표시된다

## debugging actions

### Continue / Pause `F5`

### Step Over `F10`

- 한줄을 실행한다. 함수가 있이도 실행후 다음으로 넘어간다. 다음줄에 나오는 명령을 실행하고 다음줄로 점프한다.

### Step Into `F11`

- 함수 내부로 들어간다. 다음줄에 함수호출이 있다면 해당함수로 점프하고 첫줄에서 멈춘다.

### Step Out `Shift+F11`

- 함수를 끝까지 실행시키고 함수호출 뒤 다음 명령문에서 일시중지 한다.

### Restart `Ctrl+Shift+F5`

### Stop `Shift+F5`