# 인덕원 퍼스비엘 랜딩페이지

GitHub Pages로 배포할 수 있는 정적 랜딩페이지입니다.

## GitHub 업로드

저장소 루트(`D:\Github site`)에서 실행합니다.

```bash
git init
git add .
git commit -m "Create landing page"
git branch -M main
git remote add origin <GitHub 저장소 URL>
git push -u origin main
```

`main` 브랜치에 push하면 `.github/workflows/pages.yml`이 GitHub Pages 배포를 자동으로 진행합니다.

GitHub 저장소의 **Settings > Pages**에서 Source가 **GitHub Actions**로 설정되어 있는지 확인하세요.

## 로컬 실행

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.