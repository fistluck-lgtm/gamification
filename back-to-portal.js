/* ==========================================================
   '메인으로' 버튼
   ----------------------------------------------------------
   각 게임의 index.html 맨 아래 </body> 바로 위에 아래 한 줄을 넣으면
   화면 왼쪽 위에 작은 '메인' 버튼이 생깁니다.

     <script src="../back-to-portal.js"></script>

   버튼 위치를 바꾸려면 script 태그에 data-position 을 넣으세요.
     data-position="top-left" | "top-right" | "bottom-left" | "bottom-right"
   ========================================================== */
(function () {
  var script = document.currentScript;
  var pos = (script && script.getAttribute('data-position')) || 'top-left';
  var home = (script && script.getAttribute('data-home')) || '../';

  var btn = document.createElement('a');
  btn.href = home;
  btn.textContent = '⌂ 메인';
  btn.setAttribute('aria-label', '게임 목록으로 돌아가기');

  var s = btn.style;
  s.position = 'fixed';
  s.zIndex = '2147483000';
  s.padding = '8px 14px';
  s.borderRadius = '999px';
  s.background = 'rgba(20,18,43,.72)';
  s.color = '#fff';
  s.font = '600 14px/1 system-ui, "Apple SD Gothic Neo", sans-serif';
  s.textDecoration = 'none';
  s.backdropFilter = 'blur(4px)';
  s.webkitBackdropFilter = 'blur(4px)';
  s.border = '1px solid rgba(255,255,255,.2)';

  var gap = 'max(10px, env(safe-area-inset-top))';
  if (pos.indexOf('top') === 0) s.top = gap; else s.bottom = 'max(10px, env(safe-area-inset-bottom))';
  if (pos.indexOf('left') > -1) s.left = '10px'; else s.right = '10px';

  // 게임 진행 중 실수로 나가지 않도록 한 번 확인
  btn.addEventListener('click', function (e) {
    if (!window.confirm('게임 목록으로 돌아갈까요?\n저장하지 않은 진행 상황은 사라질 수 있어요.')) {
      e.preventDefault();
    }
  });

  function mount() { document.body.appendChild(btn); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
