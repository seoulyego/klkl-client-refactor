# 끼룩끼룩 Web Frontend 리팩토링 대작전

끼룩끼룩 프로젝트의 프론트엔드 성능 개선을 위한 프로젝트입니다.
[[원본 레포지토리]](https://github.com/taco-official/klkl-client.git)

네트워크 요청 처리 속도를 중점으로 개선합니다.

## 📋 목차

1. **네트워크 요청 개선**

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

## 문의

### 이메일

seoulyego yeongo@student.42seoul.kr
