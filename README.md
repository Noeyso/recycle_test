# 분리수거 테스트 프로젝트


## 개요

헷갈리는 분리수거 쓰레기를 직접 분류해보는 분리수거 테스트 사이트이다.

## 사용언어

 React,typescript
 
## 데모 사이트
https://recycle-test.netlify.app/

## 프로젝트 진행단계

다음과 같은 단계를 거쳐서 프로젝트를 완성할 수 있었다.

1. 프로토타입 & UI 작성
2. react-router를 사용해서 페이지 나누기
3. 페이지별 기능 구현
    1. 메인페이지 ( ⇒ 테스트 시작 버튼)
    2. 퀴즈페이지 ( ⇒ Progress Bar, 이미지 드래그 & 드롭, 점수계산)
    3. 결과페이지 ( ⇒ 점수에 따른 결과화면)
    4. 정답페이지 ( ⇒ 모든 퀴즈의 정답 및 해설 화면)
    5.  카카오톡 공유하기
4. 기능 개선
    1. 이미지 드래그&드롭 ⇒ 모바일 화면에서 동작시키기 위해 Touch로 구현
    2. 초기 로딩이 느린 문제 - 해결중
    

### 1. 프로토타입 & UI 작성

PPT를 사용해서 대략적인 프로토타입을 만든 후 UI를 작성했다.

프로토타입을 만들면서 가장 많은 시간이 걸렸던건 캐릭터였다. 이왕 프로젝트를 만드는김에 캐릭터도 직접 제작해보고 싶었다. 퀄리티는 낮지만 단계별로 커지는 캐릭터들을 완성해서 사용했다.

(완성된 메인화면)
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/48446896/188550913-77ade14b-3478-4fb8-a3d6-f89c6e39e318.png">


### 2. react-router 사용해서 페이지 나누기

구현할 페이지는 총 4개 : 홈 , 퀴즈 , 결과 , 정답 

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Intro />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/result" element={<Result />} />
    <Route path="/answer" element={<Answer />} />
  </Routes>
</BrowserRouter>
```

- 가장 상위에 BrowserRouter를 사용해서 감싸줍니다.
- 페이지 개수만큼 Route를 생성해주고 Route들을 Routes 태그로 감싸줍니다.
- 각각의 Route에 해당 페이지의 컴포넌트를 할당해줍니다. (⇒ path에 페이지 경로 설정하기!)

### 3. 페이지별 기능 구현

1. 홈 : 퀴즈로 이동하는 이동버튼
2. 퀴즈 : 퀴즈 진행 단계 (Progress Bar), 쓰레기정보 표시, 쓰레기를 Drag&Drop으로 쓰레기통에 버리기
3. 결과 : 퀴즈 결과 화면 (입문,초보,중급,상급,전문)
4. 정답 : 퀴즈 문제의 모든 정답 보여주기
5. 카카오톡 공유 : 카카오톡으로 url 공유하기

### 4. 기능 개선

- 폰트 파일 사이즈 줄이기 (otf→ woff)
- 이미지 파일 크기 줄이기
- 모바일에서 touch 이벤트의 약간의 지연 문제를 해결중에 있다.
