// 제조1-B 서비스워커
// 1) 🔔 폰 알림 (OneSignal) — 알림을 받아서 띄워주는 부분
// 2) 갤럭시 "앱 설치"용
// ⚠️ 화면은 아무것도 저장(캐시)하지 않음 → 항상 최신 화면, 자동 업데이트에 영향 없음
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
