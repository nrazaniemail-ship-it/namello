# Changelog

## 1.0.9 — Journal checklist taps, Finance period chips, News rabbit animation
- Journal: checklist items 6 (آمادگی برنامه روزانه), 7 (ارزیابی چارت) and 32 (آمادگی ستاپ) in «ثبت ورود» / «ویرایش معامله» now toggle when the user taps anywhere on the condition row (including its title), not only the small tick box. Keyboard (Space/Enter) supported.
- Finance: the period chips (Daily, Weekly, Monthly, Quarterly, Yearly, All) are smaller and share the row width equally, so all of them — including Yearly — fit fully inside the screen without scrolling.
- Economic News: refresh-button animation redesigned. The rabbit's two front arms are now separate sprites that swing alternately (in opposite directions), and the rabbit's eye blinks (open/closed) while news is updating.
- Journal: the «ویرایش/انصراف» buttons of all items in «ثبت ورود» and «ثبت نتیجه معامله» are now pinned to the left edge of their title row, so every edit button sits on one vertical line.
- Unified package, PWA manifests and Service Worker version to 1.0.9 / Version Code 10.

## 1.0.8 — Layer header actions & Advanced Evaluation analytics
- News: the refresh emoji in the hint text is replaced with the Namello logo; the source box on the main News page now highlights the active news source (ForexFactory / FXStreet / Investing / custom URL) and shows «منبع فعال».
- Settings: Profile and Template each live in one independent box (header + content together); Library, Language, Profile and Template titles are right-aligned like the other sections.
- Settings → Library: removed the forward/back skip-amount option.
- Settings: the help dots button of «رنگ زمینه برنامه» now sits on the same row as its title, like the other cards.
- Dashboard: unified colour design for the section boxes (Statistical Analysis, Advanced Evaluation, Trading Psychology, Portfolio, Comprehensive Export): near-neutral body, soft gradient header, slim accent stripe and an icon chip in the section accent colour.
- Economic News: the refresh button now shows the Namello logo (rabbit & snail) running — front arms and back legs swing — while news is updating, on a green background. When the update finishes the motion stops and green stays; on failure the background turns red and the motion stops.
- Sessions, Economic News and Trading Calendar: the Settings button now sits inside the layer title box, on its left side. Economic News gets a title box matching the other layers.
- Journal: the «ثبت ورود» button now spans the full width of its card; the extra title/description text was removed.
- Dashboard → Advanced Evaluation: new quantitative panel (SQN, expectancy confidence interval, Kelly, VaR/CVaR, skewness/kurtosis, drawdown, equity R², edge drift, Runs Test, profit concentration, seeded Monte Carlo bootstrap) with an «چکیده ارزیابی» summary (score + one technical/strategic recommendation). Also included in the Advanced Evaluation Excel/PDF export.
- Unified package, PWA manifests and Service Worker version to 1.0.8 / Version Code 9.

## 1.0.7 — Journal layout redesign
- Moved the «ثبت ورود» action into a dedicated card immediately before «معاملات باز».
- Removed the adjacent Journal Excel export action from that area.
- Unified package, PWA manifest and Service Worker version to 1.0.7 / Version Code 8.

## 1.0.3
- Standard broker CSV templates and import guide
- Virtual list rendering and lazy media loading
- Improved sync conflict resolution with smart merge and status indicators
- Additional psychology metrics including Tilt-like and Revenge Risk
- Portfolio / multi-account view
- Prop Firm challenge rules and limits
- Trade Replay uses MT5 OHLC / imported TradingView-compatible OHLC
- Gradual TypeScript/Vite migration scaffold and unit tests


## 1.0.4
- Added professional Guide buttons for major layers and features.
- Added a centralized bilingual feature-help center with workflows, terminology, and practical tips.

## 1.0.6 — Advanced completion & validation
- CSV broker import: header mapping, required-field validation, numeric validation and duplicate detection.
- Replay: Play/Pause + Previous/Next/First/Last controls with progressive MFE/MAE/what-if metrics.
- TypeScript modules expanded for CSV import, Sync conflict helpers/history, psychology metrics, replay, portfolio and Prop Firm rules.
- Unit-test coverage expanded for import/sync/psychology/replay/portfolio/prop contracts while preserving the existing PWA.
- Version Code: 6.
