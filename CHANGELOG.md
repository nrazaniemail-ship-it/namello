## 1.22.2 — Zero-configuration defaults
- Local development backend mode without Google credentials.
- PWA defaults to `http://localhost:8787`.
- Production explicitly requires Google server-side authentication.
- Added local Docker Compose profile and deployment guidance.

## 1.22.1 — Production Backend Hardening

- Production Docker/Caddy deployment
- HTTPS security headers
- `.env.example` and production deployment guide
- Atomic revision writes with race-safe conflict handling
- Persistent SQLite volume configuration
- PWA wording updated for live Backend Sync


## 1.21.0 — حساب و Sync چنددستگاهی
- شناسه مستقل دستگاه و revision برای Sync
- Sync رمزگذاری‌شده AES-GCM قبل از ارسال به Google Drive App Data
- تشخیص نسخه قدیمی/جدید و Conflict با حفظ نسخه محلی تا تأیید کاربر
- Google profile + device identity
- مسیر Drive قبلی به envelope امن و versioned ارتقا یافت
- Backend contract مستند شد؛ احراز هویت سرورمحور نیازمند OAuth verification سمت سرور است

# Namello Changelog

## 1.20.0 — Security & Google Account
- مرکز امنیت و پشتیبان رمزگذاری‌شده AES-256-GCM + PBKDF2-SHA256
- Google Sign-In برای پروفایل هویتی؛ رمز Google ذخیره نمی‌شود
- Google Drive App Data برای پشتیبان خصوصی و رمزگذاری‌شده
- بازیابی پشتیبان با بررسی رمزگشایی


## 1.19.0
- Advanced Edge Discovery
- حداقل نمونه ۱۰ معامله برای جلوگیری از الگوهای کم‌نمونه
- مقایسه هر الگو با بقیه معاملات و محاسبه Δ P&L، Δ Win Rate و ΔR
- آزمون پایداری با تقسیم معاملات الگو به دو نیمه زمانی
- تحلیل چندبعدی Setup / Session / Direction / Plan / Mistake / R / Exit Efficiency
- اتصال Edge candidateهای پایدار به Journal Coach

## 1.18.0
- Namello Intelligence، ماتریس Setup×Session×Plan×Mistake، گزارش هفتگی و Coach قابل‌اقدام

## 1.17.0
- Analytics Engine و Journal Coach مبتنی بر داده‌های واقعی

## 1.22.0 — Backend Account & Multi-device Sync
- Google ID token verification on the server.
- Stable account identity by Google `sub`.
- Short-lived HMAC backend sessions.
- Encrypted sync envelope stored server-side without trade plaintext.
- Immutable revisions and optimistic concurrency / conflict handling.
- Two-way Sync and server pull UI.
- Full server account/data deletion endpoint.
- Deployable Node.js 22 backend with SQLite WAL.
