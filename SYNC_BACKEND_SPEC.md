# Namello 1.21 — Account & Sync Backend Contract

## هدف
این نسخه Sync را به‌صورت client-side encrypted envelope آماده می‌کند. Google فقط هویت/مجوز Drive را فراهم می‌کند؛ سرور نباید رمزگشایی داده‌های معاملاتی را انجام دهد.

## Identity
- Google OAuth/OIDC access token باید در backend با Google token verification بررسی شود.
- `sub` شناسه پایدار کاربر است؛ email فقط attribute است و نباید primary key باشد.
- client نباید access token را در localStorage/IndexedDB ذخیره کند.

## Sync envelope
- `kind: namello-sync`
- `schema: 3`
- `meta.revision`: عدد افزایشی
- `meta.deviceId`: شناسه دستگاه غیرحساس
- `meta.updatedAt`: ISO-8601
- `meta.appVersion`: نسخه Namello
- `alg: AES-GCM`
- `kdf: PBKDF2-SHA256`
- `iterations: 210000`
- `salt`, `iv`, `data`: base64url

## Conflict
1. revision بالاتر: نسخه جدیدتر است، اما قبل از overwrite باید policy مشخص شود.
2. revision برابر ولی timestamp متفاوت: Conflict؛ هیچ overwrite خودکاری انجام نشود.
3. client باید نسخه محلی را تا تأیید کاربر نگه دارد.
4. backend بهتر است immutable revisions نگه دارد تا rollback ممکن باشد.

## Backend API پیشنهادی
- `POST /v1/auth/google/verify`
- `GET /v1/sync/latest`
- `PUT /v1/sync/revisions/{revision}`
- `GET /v1/sync/revisions/{revision}`
- `DELETE /v1/account`

سرور فقط envelope رمزگذاری‌شده را ذخیره می‌کند و به plaintext معاملات دسترسی ندارد.
