# Vue-todo-list

패스트캠퍼스 부트캠프 vue로 to do list만들기 과제입니다.

## 구현한 기능들

- to-do list 추가. 
- to-do list 수정. 
- to-do list 삭제. 
- to-do list 완료. 
- to-do list 모두 삭제. 


## 느낀점들

- 처음으로 vue를 사용한 프로젝트였습니다. vue를 사용하기가 겁나서 그냥 바닐라 자바스크립트로 프로젝트를 할까 생각했는데 좀 쓰다보니 익숙해지고 결국에는 바닐라 자바스크립트보다 편한긴해서 프레임워크를 쓰는 이유를 새삼느꼈습니다. 같은 의미로 vuex도 사용할까 말까 고민하다가 사용하였는데 스스로 공부도 하고 이런 저런 자료를 찾아보며 사용하였습니다.

- api를 사용하여 백엔드 서버와 데이터를 주고받는 기능을 처음으로 구현하였습니다. 처음에는 요청도 잘못보내서 500 error가 생기는 경우도 많았지만 어찌저찌 구현을 했다는 점에서 신기하고 뿌듯하였습니다. 또한 이 기능을 구현하면서 백엔드와 프론트엔드가 서로 어떻게 상호작용을 하는지, 서버를 다루려면 어떻게 생각을 해야하는지 공부도 많이 되었습니다.
 
 ## 아쉬웠던 점들
 
 - to-do list 추가 함수는 바로 vuex store의 state 데이터를 바꾸어서 바로 화면단에서 데이터가 바뀌는데 삭제 및 수정시 서버의 데이터를 처리후 그것을 다시 가지고 와서 화면단을 바꾸게 해서 로딩시간이 좀 걸립니다. 이 부분도 state 데이터를 바로 바꾸게 만들고 싶었는데 시간상 구현을 못하였습니다.
  
 - 로딩시 로딩 애니메이션이 뜨게 만들고 싶었는데 시간상 구현을 못하였습니다.  

- 할일을 한국어로 적고 엔터키를 눌러 추가시 두개가 추가되는 버그를 고치지 못하였습니다

