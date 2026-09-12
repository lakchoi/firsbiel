document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultForm');
  const result = document.getElementById('formResult');

  if (!form || !result) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();
    const unit = (formData.get('unit') || '39㎡').toString().trim();
    const inquiryType = (formData.get('inquiryType') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    if (!name || !phone) {
      result.textContent = '이름과 연락처를 입력해 주세요.';
      result.style.color = '#b54708';
      return;
    }

    const subject = encodeURIComponent(`[퍼스비엘 상담신청] ${name}님`);
    const body = encodeURIComponent([
      `이름: ${name}`,
      `연락처: ${phone}`,
      `희망 평형: ${unit}`,
      `상담 방식: ${inquiryType || '미선택'}`,
      `문의 내용: ${message || '없음'}`,
    ].join('\n'));

    window.location.href = `mailto:audsim@naver.com?subject=${subject}&body=${body}`;
    result.textContent = '메일 작성창을 열었습니다. 전송 버튼을 눌러 상담 신청을 완료해 주세요.';
    result.style.color = '#0b5c50';
  });
});
