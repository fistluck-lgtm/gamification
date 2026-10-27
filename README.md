# 교과 학습 게임 포털

세 가지 교과 학습 게임 — **올림포스의 서고**, **배움섬**, **브레인 큐브** — 를 한 주소에서 고를 수 있는 메인 화면입니다.
학생은 주소 하나만 기억하면 되고, 배너를 누르면 해당 게임의 입장 코드 화면으로 들어갑니다.

> 각 게임의 서버(Apps Script + 구글 시트)와 3D 에셋 저장소는 게임별로 따로 운영합니다. 이 포털은 **입구만 모아 주는 역할**입니다.

---

## 폴더 구조

```
├─ index.html           메인 화면 (고칠 필요 없음)
├─ config.js            ✏️ 학교 이름·게임 주소 설정 — 이 파일만 고치면 됩니다
├─ back-to-portal.js    게임 화면에 '메인' 버튼을 붙이는 스크립트
├─ manifest.webmanifest 태블릿 '홈 화면에 추가'용 설정
├─ assets/              아이콘·배너 이미지
├─ olympos/             올림포스의 서고 게임 파일
├─ baeum/               배움섬 게임 파일
└─ braincube/           브레인 큐브 게임 파일
```

---

## 우리 학교에 설치하기 (처음 한 번)

### 1. 저장소 복사
1. 이 저장소 페이지 오른쪽 위 **Use this template → Create a new repository** (또는 **Fork**)를 누릅니다.
2. 저장소 이름을 정합니다. 예: `learning-games`
3. **Public**으로 만듭니다. (GitHub Pages 무료 공개에 필요)

### 2. 웹사이트 켜기 (GitHub Pages)
1. 복사한 저장소에서 **Settings → Pages**로 갑니다.
2. **Source**: `Deploy from a branch`, **Branch**: `main` / `/ (root)` → **Save**
3. 1~2분 뒤 `https://내아이디.github.io/learning-games/` 주소가 생깁니다. 이 주소가 학생들이 들어올 메인 주소입니다.

### 3. 각 게임 서버 준비
게임별 설치 매뉴얼(PDF)을 따라 Apps Script 서버와 구글 시트를 각자 만들고, **웹앱 배포 주소**를 메모해 둡니다.
- 3D 에셋 저장소도 매뉴얼에 따라 각자 GitHub에 복사합니다.

### 4. 게임 파일 넣기
게임이 어떤 형태인지에 따라 둘 중 하나를 고르세요.

| 게임 형태 | 방법 | `config.js`의 `url` |
|---|---|---|
| **HTML 파일**로 받은 경우 | 해당 폴더(`olympos/` 등)의 `index.html`을 게임 파일로 교체 (파일 이름은 반드시 `index.html`) | `'./olympos/'` 그대로 |
| **Apps Script 웹앱 주소**로 실행하는 경우 | 파일은 넣지 않아도 됨 | `'https://script.google.com/macros/s/.../exec'` |

GitHub 웹에서 파일 교체: 폴더 열기 → **Add file → Upload files** → 파일을 끌어다 놓고 **Commit changes**.

### 5. `config.js` 고치기
GitHub에서 `config.js` → 연필(✏️) 아이콘 → 아래 항목 수정 → **Commit changes**.

```js
schoolName: '○○중학교',
...
{
  id: 'olympos',
  title: '올림포스의 서고',
  url: './olympos/',                         // 4단계에서 고른 방식대로
  teacherUrl: 'https://script.google.com/...', // 교사용 관리 페이지 주소
  ...
}
```

- 아직 준비가 안 된 게임은 `url: ''`로 비워 두면 **'준비 중'**으로 표시됩니다.
- 쓰지 않는 게임은 `visible: false`로 숨길 수 있습니다.
- `teacherUrl`을 넣으면 메인 화면 아래 **선생님 메뉴**에 관리 페이지 링크가 생깁니다.

---

## 선택 설정

### 배너 이미지 바꾸기
기본으로 그림이 들어 있지만, 게임 스크린샷으로 바꿀 수 있습니다.
1. `assets/` 폴더에 이미지 업로드 (가로:세로 **16:10** 권장, 예: 1280×800)
2. `config.js`에서 `image: './assets/olympos.jpg'`

### 게임 화면에 '메인' 버튼 붙이기
게임 HTML 파일 맨 아래 `</body>` 바로 위에 한 줄을 넣습니다.

```html
<script src="../back-to-portal.js"></script>
```

버튼 위치를 바꾸려면: `<script src="../back-to-portal.js" data-position="bottom-right"></script>`
(`top-left` · `top-right` · `bottom-left` · `bottom-right`)

> 게임이 Apps Script 웹앱 주소로 열리는 경우에는 이 버튼을 쓸 수 없습니다. 학생들에게 브라우저 뒤로 가기를 안내해 주세요.

### 태블릿 홈 화면에 추가
안드로이드 크롬에서 메인 주소 접속 → 오른쪽 위 **⋮ → 홈 화면에 추가**.
앱처럼 아이콘이 생겨 수업 시작이 빨라집니다.

---

## 폰트와 저작권

포털에 쓰인 폰트는 모두 **SIL Open Font License 1.1** 무료 폰트이며, `fonts/` 폴더에 파일로 들어 있습니다. 외부 폰트 서버에 접속하지 않아 학교 네트워크에서도 안정적으로 보입니다.

| 쓰는 곳 | 폰트 | 라이선스 |
|---|---|---|
| 제목·버튼·태그 | 배민 주아체 (Jua) | OFL 1.1 — `fonts/OFL-Jua-Regular.txt` |
| 본문 | 고운돋움 (Gowun Dodum) | OFL 1.1 — `fonts/OFL-GowunDodum-Regular.txt` |

OFL 폰트는 상업적 이용·수정·재배포가 허용됩니다. 다른 선생님께 배포할 때 `fonts/` 폴더의 라이선스 파일을 **지우지 말고 함께** 두세요. (조건은 폰트 파일 자체를 단독으로 판매하지 않는 것뿐입니다.)

> 폰트를 바꾸고 싶다면 OFL 폰트이거나 교육부·KERIS가 제공하는 저작권 걱정 없는 폰트 중에서 고르세요. 개인용 무료 폰트나 출처를 모르는 폰트 파일은 넣지 마세요.

---

## 자주 묻는 질문

**Q. 수정했는데 화면이 그대로예요.**
GitHub Pages 반영에 1~2분 걸립니다. 그래도 그대로면 태블릿에서 새로고침(또는 브라우저 캐시 삭제)을 해 보세요.

**Q. 학생 개인정보가 이 사이트에 저장되나요?**
아니요. 포털은 링크만 보여 주는 정적 페이지라 아무 정보도 저장하지 않습니다. 학생 기록은 각 게임의 구글 시트(선생님 계정)에만 저장됩니다.

**Q. 게임이 업데이트되면 어떻게 하나요?**
새 게임 파일을 받아 해당 폴더의 `index.html`을 다시 교체하면 됩니다. `config.js`는 그대로 두세요.

**Q. 저장소를 Public으로 해도 괜찮나요?**
게임 파일과 설정 주소만 공개되며, 학생 데이터는 Apps Script 서버 쪽에 있어 공개되지 않습니다. 단, `config.js`나 게임 파일에 **비밀번호·관리자 키를 직접 적지 마세요.**
