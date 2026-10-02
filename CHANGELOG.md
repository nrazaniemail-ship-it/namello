# Namello 1.22.17 — Version Code 50

- بهبود گرافیکی لایه‌ها و منوی ناوبری: آیکون فعال، زمینه ملایم و نوار تأکید ظریف.
- لوگوی ژورنال با تصویر اختصاصی ارسالی جایگزین شد.
- پخش‌کننده کتابخانه داخل همان آیتم/اپیزود فعال ادغام شد و دیگر بالای صفحه کتابخانه باز نمی‌شود.
- ثبت ورود و ثبت نتیجه معامله با لبه‌های رنگی متفاوت و ملایم از هم تفکیک شدند.
- باکس‌های تنظیمات با طیف‌های بسیار ملایم و هماهنگ از هم متمایز شدند.
- در Android Native، دکمه شناور بازگشت به Namello با مجوز «نمایش روی سایر برنامه‌ها» و سرویس foreground اضافه شد.
- در ثبت ورود، OCR اختیاری تصویر «چارت تایم ورود - شروع» برای استخراج Entry/TP/SL اضافه شد؛ کاربر می‌تواند مقادیر استخراج‌شده را قبل از ثبت بررسی/اصلاح کند.
- مدیریت Dashboard به «مدیریت Chart / Trade / Day Plan» ارتقا یافت و برای هر سه نوع، ایجاد/ویرایش/حذف/جابجایی ترتیب برنامه‌ها و شروط اضافه شد.
- گام‌های آماده‌سازی موجود هنگام نبود Chart Plan به‌صورت خودکار به «ارزیابی چارت» مهاجرت می‌کنند.
- چک‌لیست «آمادگی ستاپ» و «ارزیابی چارت» در ثبت ورود، بعد از خبر و قبل از فراکتال قرار گرفتند.

# Namello Changelog

## 1.22.15 — 2026-10-02
- بررسی تطبیقی Trading Journal، FX Journal و TraderSync انجام شد و قابلیت‌های قابل‌اعمال روی مسیر GitHub + PWA انتخاب شدند.
- «Strategy Checker» به فرم ثبت ورود ژورنال اضافه شد تا قبل از ثبت معامله، چک‌لیست Trade Plan و درصد رعایت/نقض قوانین دیده شود؛ پاسخ‌های چک‌لیست از همان لحظه ورود در Review ذخیره می‌شوند.
- برای ثبت ورود، TP/SL قیمتی برنامه‌ریزی‌شده اضافه شد و R:R برنامه‌ریزی‌شده به‌صورت خودکار محاسبه می‌شود؛ داده در ویرایش معامله نیز قابل تغییر است.
- قابلیت‌های مشابهِ موجود در Namello مانند اسکرین‌شات، Voice Note، Psychology، فیلترها، Replay/What-if، MFE/MAE، Plan Analysis و Journal Coach حفظ شدند و از ایجاد قابلیت‌های تکراری جلوگیری شد.
- VersionCode: 48

## 1.22.14 — 2026-10-02
- «ارزیابی استیتمنت» از لایه مستقل به Dashboard منتقل شد؛ منبع Dashboard بین ژورنال و استیتمنت قابل انتخاب است.
- ایمپورت استیتمنت MT4/MT5/CSV/Excel مستقیماً در Dashboard و بر اساس حساب مبنا انجام می‌شود و تحلیل آماری/ارزیابی پیشرفته از همان داده محاسبه می‌شوند.
- نصب PWA از داخل Settings بهبود یافت و fallback رسمی Chrome برای Install app اضافه شد.
- لوگوی لایه ژورنال با تصویر جدید جایگزین شد.
- About / Update به آخرین نسخه و changelog واقعی پروژه به‌روزرسانی شد.

# Namello 1.22.13

- Dashboard: خروجی جامع داشبورد کاملاً مستقل از بخش ارزیابی پیشرفته و خارج از accordion آن قرار گرفت.
- PWA: manifest با display_override، prefer_related_applications و launch_handler تقویت شد و جریان Install App به تنظیمات اضافه شد تا به‌جای میانبر Chrome از نصب واقعی PWA استفاده شود.
- Settings: محتوای Profile بلافاصله زیر کارت Profile و محتوای Template بلافاصله زیر کارت Template نمایش داده می‌شود؛ عرض هر دو با سایر بخش‌های Settings یکسان شد.
- VersionCode: 45

# Namello 1.22.13

- Dashboard: خروجی جامع کاملاً مستقل از بخش ارزیابی پیشرفته و خارج از accordion آن قرار گرفت.
- PWA: manifest و جریان نصب واقعی تقویت شد؛ دکمه Install App به تنظیمات اضافه شد تا میانبر Chrome با اپ PWA اشتباه نشود.
- Settings: محتوای Profile بلافاصله زیر کارت Profile و محتوای Template بلافاصله زیر کارت Template نمایش داده می‌شود؛ عرض هر دو با سایر بخش‌های Settings یکسان شد.
- VersionCode: 45

# Namello 1.22.11

- Dashboard split into three visually distinct sections: Statistical Analysis, Advanced Evaluation, and Comprehensive Dashboard Export.
- Added section-specific Excel/PDF exports.
- Renamed the Advanced Evaluation export box to `خروجی ارزیابی پیشرفته`.
- Added `خروجی جامع داشبورد` for a combined dashboard report.
- Reduced Settings duplication: local backup, backend multi-device sync, and storage-capacity tools are separated by purpose; the legacy parallel Google Drive storage UI was removed from the settings flow.
- Dashboard logic remains based on the stable 1.22.5 baseline to avoid the blank-dashboard regression.

## 1.22.8 — Dashboard Blank Fix
- Dashboard widget error isolation so one broken analytics widget cannot blank the entire Dashboard.
- Corrupted/obsolete Dashboard layout IDs are sanitized and reset safely.
- Defensive handling for missing account-selection arrays.

# Namello 1.22.6

- Dashboard sections visually separated: Statistical Analysis, Advanced Evaluation, Comprehensive Dashboard Export.
- Statistical and Advanced Evaluation exports separated; comprehensive dashboard export added as third section.
- Security/backup/cloud guidance consolidated to avoid overlapping backup paths.

## 1.22.5 — 2026-10-02
- Dashboard split into collapsible Statistical Analysis and Advanced Evaluation sections.
- Plan management moved into Advanced Evaluation.
- Equity Curve aligned left-to-right.
- Dashboard and full exports expanded with dashboard KPIs, base-account selection, plans and discipline data.
- Podcast resume state persists across app restarts and page lifecycle events.
- Profile and Template controls shown as separate Settings boxes.

## 1.22.4 — Dashboard / Settings / Analysis Simplification
- تحلیل آماری داشبورد به‌صورت کاملاً جمع‌شونده درآمد و با کلیک روی عنوان باز/پنهان می‌شود.
- پروفایل از لایه مستقل خارج و داخل تنظیمات در دو بخش «پروفایل» و «تمپلت» سازمان‌دهی شد.
- لایه مستقل «تحلیل» حذف شد و مسیر تحلیل به داشبورد منتقل شد.


## 1.22.3 — Dashboard / Statistical Analysis / Library Player
- سفارشی‌سازی حساب‌های مبنای داشبورد با انتخاب همه، فقط واقعی، فقط آزمایشی یا ترکیبی از حساب‌ها.
- انتقال بخش تحلیل آماری به بالای فیلترهای داشبورد.
- همگام‌سازی تحلیل آماری داشبورد با حساب‌های مبنای انتخاب‌شده.
- پلیر کتابخانه: حالت کامل چپ‌چین در کتابخانه و حالت شناور کوچک در سایر لایه‌ها؛ مینی‌پلیر اکنون سمت راست دکمه تم قرار دارد.
- خروج از کتابخانه، پلیر را به حالت کوچک برمی‌گرداند.
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
