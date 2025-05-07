# 끼룩끼룩 Web Frontend 리팩토링 대작전

끼룩끼룩 프로젝트의 프론트엔드 성능 개선을 위한 프로젝트입니다.
[[원본 레포지토리]](https://github.com/taco-official/klkl-client.git)

네트워크 요청 처리 속도를 중점으로 개선합니다.

## 📋 목차

1. **네트워크 요청 개선**
2. **Vite 번들링 압축**

## ✨ 네트워크 요청 개선

다중 네트워크 요청이 발생하는 loader 함수의 요청을 병렬 처리하여 로딩 시간을 약 40% 단축하였습니다.

- 서로 영향을 주지 않는 독립적인 요청 작업에 대해 Promise.all() 메소드의 사용으로 병렬 처리하였습니다.
- reject 발생 시 페이지 이용에 문제가 있으므로 Error Page로 redirect됩니다.

**병렬 처리 적용 loader 목록**

  - feedLoader
  - homeLoader
  - productEditLoader

### ✅ Before

<img src="https://github.com/user-attachments/assets/fead2c5b-30f0-41f2-b510-9b588f30146d">

### ✅ After

<img src="https://github.com/user-attachments/assets/dca473e3-91d0-4c9c-8c99-30d3e6267381">

---

## 🎁 Vite 번들링 압축

번들 분석 툴을 활용하여 패키지의 사이즈를 분석하고 불필요하게 큰 패키지들을 작은 단위로 import하여 번들의 사이즈를 최적화합니다.

### ✅ Before (vite-bundle-analyzer)

<img width="1536" alt="스크린샷 2025-05-07 오후 10 55 51" src="https://github.com/user-attachments/assets/ad35c24b-4f16-42c1-9ac6-9af060562f53" />


### ✅ After

---

## 문의

### 이메일

seoulyego yeongo@student.42seoul.kr
