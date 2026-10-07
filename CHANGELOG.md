## 1.0.8 — News/Journal display hotfix
- Hardened stored News and Journal data normalization.
- Normalized legacy trade array fields before rendering.
- Added safe handling for malformed stored records without deleting raw data.
- Bumped service-worker cache from c9 to c10 to prevent stale cached UI.
- Simplified the News/Journal layer headers to remove the shared heading component from these two layers.

# Changelog

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
