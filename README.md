# Small-goliath Resume

이 프로젝트는 **React**와 **Next.js**를 사용하여 개발된 자기소개 웹사이트입니다.


## 🚀 기술 스택

- **Frontend**: React 19, Next.js 15
- **Language**: TypeScript
- **Linting & Formatting**: ESLint

## 📦 프로젝트 구조
📦resume<br />
 ┣ api<br />
 ┃ ┣ 📜index.py<br />
 ┣ 📂pages<br />
 ┃ ┣ 📂components<br />
 ┃ ┃ ┣ 📜NavBar.tsx<br />
 ┃ ┃ ┣ 📜Profile.tsx<br />
 ┃ ┃ ┗ 📜TabContent.tsx<br />
 ┃ ┣ 📜App.tsx<br />
 ┃ ┣ 📜_app.tsx<br />
 ┃ ┣ 📜_document.tsx<br />
 ┃ ┣ 📜data.ts<br />
 ┃ ┣ 📜dataProp.ts<br />
 ┃ ┗ 📜index.tsx<br />
 ┣ 📂public<br />
 ┃ ┣ 📜github-logo.png<br />
 ┃ ┣ 📜profile.png<br />
 ┃ ┗ 📜tistory-logo.svg<br />
 ┣ 📂styles<br />
 ┃ ┗ 📜App.css<br />
 ┣ 📜.env<br />
 ┣ 📜.gitignore<br />
 ┣ 📜README.md<br />
 ┣ 📜env.d.ts<br />
 ┣ 📜eslint.config.mjs<br />
 ┣ 📜next-env.d.ts<br />
 ┣ 📜next.config.ts<br />
 ┣ 📜package-lock.json<br />
 ┣ 📜package.json<br />
 ┣ 📜requirements.txt<br />
 ┗ 📜tsconfig.json<br />

## 📌 실행 방법

### 1. 환경변수 설정
<pre>
  1. MINIO_*: 이력서 및 경력기술서 다운로드를 위한 minio 설정
  2. NEXT_PUBLIC_*: resume 내 노출시킬 나의 정보
  3.: cp ./example.env ./.env
</pre>

### 2. 실행
```bash
npm install
npm run build
npm start
```

### 3. 코드 품질 관리
```bash
npm run lint
```

### 4. fastapi
<pre>
  fastapi base url: http://localhost:3000/api
  documents: http://localhost:3000/api/py/docs
  openapi json: http://localhost:3000/api/py/openapi.json
</pre>