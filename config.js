/* ==========================================================
   교과 학습 게임 포털 — 설정 파일
   ----------------------------------------------------------
   ✏️ 이 파일만 고치면 포털을 우리 학교에 맞게 쓸 수 있습니다.
   - 따옴표(' ') 안의 글자만 바꾸세요.
   - 쉼표(,)와 괄호({ } [ ])는 지우지 마세요.
   ========================================================== */

window.PORTAL_CONFIG = {

  /* 1. 사이트 정보 ------------------------------------------- */
  siteTitle: '교과 학습 게임',          // 브라우저 탭·메인 화면 큰 제목
  schoolName: '',                       // 예: '○○중학교' (비워 두면 표시 안 함)
  greeting: '',                         // 대표 이미지 아래 안내 문구 (비워 두면 표시 안 함)

  // 맨 위 대표 이미지 (비워 두면 큰 글씨 제목이 나옵니다)
  heroImage: './assets/hero.jpg',

  /* 2. 게임 목록 -----------------------------------------------
     url         : https://script.google.com/macros/s/AKfycby2ITApzdfhlqSS8t4q9SDDJK1hPstbJsY5nMO59FInNc7uRRXajeIdMxJFSmmRQ0lg/exec
                   - 이 저장소 안 폴더면 './olympos/' 처럼 적기
                   - 다른 곳(Apps Script 웹앱 등)이면 https:// 전체 주소
                   - 비워 두면 '준비 중'으로 표시
     teacherUrl  : 교사용 관리(서버) 페이지 주소 — 비워 두면 표시 안 함
     image       : 배너 이미지 경로 (예: './assets/olympos.jpg')
                   - 가로:세로 약 2:1 권장 (예: 1600×790)
                   - 비워 두면 기본 일러스트가 나옵니다
     newTab      : true 이면 새 탭으로 열기
     visible     : false 이면 메인 화면에서 숨기기
  ------------------------------------------------------------ */
  games: [
    {
      id: 'olympos',
      title: '올림포스의 서고',
      tagline: '신들의 세계를 누비며 퀘스트를 해결하는 3D 오픈월드 RPG',
      tags: ['3D 오픈월드', '퀘스트', '협동 레이드'],
      url: './olympos/',
      teacherUrl: '',
      image: './assets/olympos.jpg',
      newTab: false,
      visible: true
    },
    {
      id: 'baeum',
      title: '배움섬',
      tagline: '모둠 친구들과 함께 섬을 가꾸며 배우는 캐주얼 학습 게임',
      tags: ['모둠 협동', '섬 꾸미기', '학급 목표'],
      url: 'https://script.google.com/macros/s/AKfycby2ITApzdfhlqSS8t4q9SDDJK1hPstbJsY5nMO59FInNc7uRRXajeIdMxJFSmmRQ0lg/exec',
      teacherUrl: '',
      image: './assets/baeum.jpg',
      newTab: false,
      visible: true
    },
    {
      id: 'braincube',
      title: '브레인 큐브',
      tagline: '퍼즐과 아케이드로 사고력·문제해결력을 키우는 두뇌 게임',
      tags: ['퍼즐', '아케이드', '사고력'],
      url: 'https://script.google.com/macros/s/AKfycbx0ffmWPLRgs4Bwh5Kp2Yy4aKNKHbHuYIt-TQ3IedBRbLA_YcOZw4bJ62vwfWtm_pyr/exec',
      teacherUrl: '',
      image: './assets/braincube.jpg',
      newTab: false,
      visible: true
    }
  ],

  /* 3. 하단 안내 ------------------------------------------- */
  footerNote: '게임 입장 코드는 담임·교과 선생님께 받으세요.'
};
