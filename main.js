/* ============================================
// 아주 간단한 규칙 기반 답변(키워드 매칭)
function haengdolReply(user) {
const text = user.toLowerCase();
const rules = [
{
when: /감도|dpi|센시|sensi|sensitivity/,
say: () => (
'감도는 일단 800dpi, 인게임 0.4~0.5 근처로 시작해봐. 중요한 건 **일관성**. 2주만 유지하고 트래킹 훈련 (봇 100킬, 데스매치 10분) 루틴 고정. 흔들리면 기록부터.'
)
},
{
when: /크로스헤어|crosshair|십자선/,
say: () => (
'크로스헤어는 작은 점+얇은 라인 추천. 색은 배경 대비되는 밝은색. **오프센터 습관 금지**—벽에서 살짝 떼고 각 기다리기. 필요하면 코드도 만들어줄게.'
)
},
{
when: /제트|jett/,
say: () => (
'제트는 **진입 전 스택**이 핵심. 대쉬는 엔트리 순간에 쓰는 게 정답. 연막은 팀각 맞춰 2개 한 묶음으로. “들어가자마자 머리 한 발” 마인드로.'
)
},
{
when: /랭크|mmr|티어|아이언|레디언트/,
say: () => (
'랭크 올리는 공식: **(의사소통 + 1데스 뒤 포지션 리셋 + 이코 라운드 절제)**. 혼자 캐리하려다 무너지지 말고, 이코·세이브 판단 빨리.'
)
},
{
when: /에임|스프레이|트래킹|플리크/,
say: () => (
'에임 루틴: 트래킹 5분 → 플리크 5분 → 스프레이 5분. 데스매치 10분 마무리. 매일 25분 고정이 진짜 쌓인다. 표적은 **머리 높이**만.'
)
},
{
when: /업로드|스트림|방송|유튜브|스케줄/,
say: () => (
'스케줄은 공지 탭 확인! 기본은 저녁 시간대 라이브, 하이라이트는 다음날 편집 업로드. 궁금한 클립 주제 주면 내가 코멘트 해줄게.'
)
},
{
when: /안녕|hi|hello|hola|yo/,
say: () => '왔네? 오늘도 가보자고~ 무엇부터 손대볼까?'
}
];

for (const r of rules) {
if (r.when.test(text)) return r.say();
}
// 기본 응답(잡담/기타)
return '그건 이렇게 하자. 짧게 **상황-목표-한 줄 질문**으로 말해줘. 예: “에임 흔들림-헤드 비율 올리기-감도 내릴까?” 그러면 바로 처방 간다.';
}

form.addEventListener('submit', (e) => {
e.preventDefault();
const msg = input.value.trim();
if (!msg) return;
addMessage('user', msg);
input.value = '';

// typing 지연 효과
const thinking = setTimeout(() => addMessage('bot', '...'), 250);
setTimeout(() => {
clearTimeout(thinking);
// 직전 "..." 제거
const dots = [...chat.querySelectorAll('.msg.bot .bubble')];
const last = dots[dots.length - 1];
if (last && last.textContent === '...') last.parentElement.remove();

const reply = haengdolReply(msg);
addMessage('bot', reply);
}, 500 + Math.random()*400);
});

// 초기화
boot();
