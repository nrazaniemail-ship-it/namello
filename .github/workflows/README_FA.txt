پچ تست ساخت APK برای مخزن nrazaniemail-ship-it/namello

این پچ فایل زیر را اضافه/جایگزین می‌کند:
.github/workflows/android-apk.yml

روش اعمال:
1) فایل را در ریشه مخزن با همان مسیر قرار دهید.
2) در GitHub به Actions بروید.
3) گردش‌کار «Namello Android APK Build» را انتخاب و Run workflow را بزنید.
4) پس از موفقیت، از بخش Artifacts فایل APK را دریافت کنید.

این گردش‌کار برای مخزن منتشرشده‌ی استاتیک تنظیم شده است: فایل‌های PWA و index_scripts/assets/logos را به dist می‌برد و به‌جای اجرای اسکریپت build مربوط به بک‌اند، مستقیماً Capacitor را راه‌اندازی می‌کند. نسخه و versionCode از version.json خوانده می‌شوند.

نکته: تلاش برای نوشتن مستقیم فایل در GitHub با مجوز فعلی اتصال رد شد (403 Resource not accessible by integration)، بنابراین فایل در این مرحله مستقیماً روی main مخزن ثبت نشده است.
