// 제조1-B 갤럭시(안드로이드) "앱 설치"용 최소 서비스워커
// ⚠️ 아무것도 저장(캐시)하지 않음 → 항상 최신 화면, 자동 업데이트에 영향 없음
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () { /* 그대로 통과 (캐시 안 함) */ });
