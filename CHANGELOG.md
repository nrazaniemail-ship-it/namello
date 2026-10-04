## 1.0.8 – PWA install identity fix
- Force a fresh manifest URL (`?v=1008`) so Chrome does not reuse an older install name/version.
- All icon-theme manifests now explicitly identify Namello 1.0.8.
- Service-worker cache bumped to c9.

## 1.0.8 — PWA install/version manifest fix
- همه مانیفست‌های تم آیکون به نسخه 1.0.8 هماهنگ شدند.
- کش سرویس‌ورکر برای نسخه 1.0.8 نوسازی شد تا مانیفست قدیمی در نصب PWA استفاده نشود.

## 1.0.8 — Dashboard menu logo refinement
- لوگوی لایه داشبورد در منوی لایه‌ها با تصویر اختصاصی داشبورد یکسان شد.
- همین لوگو در نوار لایه‌های پایین نیز برای داشبورد استفاده می‌شود؛ لایه نشست‌ها استثناء قبلی خود را حفظ می‌کند.


## 1.0.8 — Dashboard logo and layer terminology refinement
- Dashboard layer logo updated using the supplied gauge image.
- Main layer headings now show their layer icon/logo before the title; the نشست‌ها layer remains the exception as requested.
- In non-نشست‌ها layers, visible «سشن» wording was changed to «نشست».


## 1.0.8 — Journal checklist UI refinement
- آیتم‌های ۶، ۷ و ۳۲: عبارت‌های «برنامه روزانه»، «چارت» و «ستاپ» با رنگ زرد نمایش داده می‌شوند.
- «آمادگی ذهنی» و «اعتماد به معامله» در چک‌لیست آمادگی ستاپ به حالت تیک‌محور تغییر کردند.
- دکمه‌های ویرایش چک‌لیست‌ها در یک راستای عمودی و در سمت چپ عنوان قرار گرفتند.

# Namello 1.0.8

- یکسان‌سازی استایل دکمه‌های خروجی Excel و PDF در تمام لایه‌ها.
- افزایش عدد سوم نسخه از 1.0.7 به 1.0.8.

# Namello 1.0.7

- Added Settings-style collapse triangles to the Finance and Trading Calendar evaluation-source panels; both are collapsed by default.
- All Dashboard/Psychology collapsible sections now start collapsed by default.
- Added Excel and PDF export buttons to the Strategy layer.

# Namello 1.0.6

- Added an independent Trading Calendar evaluation-source box under the calendar title.
- Calendar can now use Journal trades or Statement trades as its data source.
- Added selectable base accounts for the calendar; statement data for other selected accounts is loaded from per-account storage.

## 1.0.5
- حذف دکمه Forward بلااستفاده از Player داخل کارت اپیزود.
- نمایش Before/Next با رنگ تأکیدی.
- رفع خطای `ChevronLeft is not defined` در پخش‌کننده شناور و تعریف ChevronLeft/ChevronRight.

## 1.0.4

- پخش صوتی Library اکنون دارای صف پخش واقعی است؛ Before/Next در حالت Shuffle می‌توانند به اپیزودهای قبلی/بعدیِ صف برگردند و تاریخچه و مسیر برگشت حفظ می‌شود.
- Shuffle یک ترتیب تصادفی واقعی برای صف می‌سازد و Loop All پس از پایان صف، دور بعدی را ایجاد می‌کند.
- سربرگ «روانشناسی ترید» در Dashboard همان استایل Chevron/مثلث بخش Settings را دارد.
- سربرگ «خروجی جامع داشبورد» در Dashboard به بخش جمع‌شونده با همان استایل تبدیل شد.
- در لایه «خروجی کل»، عنوان اصلی به «خروجی کل» تغییر کرد و «خروجی کامل Excel» به‌عنوان زیرعنوان/توضیح معرفی شد.

## 1.0.3

- Library audio player: replaced seek-back/seek-forward controls with previous/next episode controls.
- Previous/next follows the current playlist and respects Loop All at playlist boundaries.
- Dashboard collapsible section arrows now use the same chevron style as Settings.

# Namello 1.0.2

- سرعت پخش هر اپیزود هنگام شروع به‌صورت پیش‌فرض روی 1x تنظیم شد.
- کنترل Shuffle/تصادفی با ظاهر فعال و غیرفعال مشابه مرجع تصویری اضافه و واضح شد.
- کنترل Loop با سه حالت خاموش، Loop All و Loop Single اضافه شد؛ حالت Single با نشان 1 مشخص می‌شود.
- پایان اپیزود بر اساس Shuffle و حالت Loop مدیریت می‌شود.
- کنترل سرعت پخش همچنان مستقل از Shuffle باقی می‌ماند.
- بسته اصلی برنامه فاقد پوشه android-widget است.
