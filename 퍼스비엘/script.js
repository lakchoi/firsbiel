document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultForm');
  const result = document.getElementById('formResult');

  if (!form || !result) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const phone = (formData.get('phone') || '').toString().trim();

    if (!name || !phone) {
      result.textContent = '이름과 연락처를 입력해 주세요.';
      result.style.color = '#b54708';
      return;
    }

    result.textContent = `${name}님, 상담 신청이 완료되었습니다. 빠른 시일 내에 담당자가 연락드립니다.`;
    result.style.color = '#0b5c50';
    form.reset();
  });
});
