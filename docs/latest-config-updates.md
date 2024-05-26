---
title: Latest Config Changes
---

## Config Updates

All recent Config Updates will be documented on this page.

### ETF2L Gameserver Config GitHub

- Checkout our latests config update releases on our [GitHub](https://github.com/ETF2L/gameserver-configs/releases).
- A documentation about our Gameserver Configs can be found [here](/docs/server-configs.md).

### Config Changes Prior 2022

Updates prior the use of our [GitHub](https://github.com/ETF2L/gameserver-configs/) can be viewed [here](https://etf2l.org/latest-rules-configs-updates/).

---

## 1.0.16 (25.05.2024)

- update extra configs
- update echo messages for configs being loaded

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.16)

---

## 1.0.15 (25.05.2024)

- add pass time configs
- update whitelists

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.15)

---

## 1.0.14 (22.03.2024)

Changes:

- whitelist updated to accomodate removal of Wrap Assassing in 6v6
- `sm_gunboats_always_apply` is now gamemode specific
- `sm_gunboats_always_apply` changed to `1` for Highlander
- `sm_gunboats_always_apply` changed to `0` for 6v6

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.14)

---

## 1.0.13 (20.02.2024)

Changes:

- fixed `spec_freeze_time` not being applied properly

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.13)

---

## 1.0.12 (19.02.2024)

Changes:

- added `spec_freeze_time -1` for BBall and `spec_freeze_time 4` for all other gamemodes

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.12)

---

## 1.0.11 (07.10.2023)

Changes:

- fix `sm_remove_medic_attach_speed 1` order in Throwback configs

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.11)

---

## 1.0.10 (07.10.2023)

Changes:

- add Throwback Cup configs
- update whitelists

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.10)

---

## 1.0.9 (14.08.2023)

Changes:

- `tf_enable_glows_after_respawn` from undefined `(1)` to `0`
- `sm_deterministic_fall_damage` from `0` to `1`
- updated whitelists for August

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.9)

---

## 1.0.8 (30.06.2023)

Changes:

- update whitelists in order to align with [6v6 Summer 2023](https://etf2l.org/2023/06/30/6v6-summer-2023-provisional-tiers-map-pool-whitelist-updates/)

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.8)

---

## 1.0.7 (25.05.2023)

This release resolves issues with whitelists not loading properly.

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.7)

---

## 1.0.6 (28.07.2022)

Changes:

- hange `sm_fix_reflect_self_damage` from `0` to `1`
- move tf2-comp-fixes vars to `etf2l.cfg`
- add version number to the say command in `etf2l.cfg`
- add `tf_fall_damage_disablespread 1` and change `sm_deterministic_fall_damage` from `1` to `0`
- change `sm_override_pipe_size` from `4.0` to `0`

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.6)

---

## 1.0.5 (22.06.2022)

Changes:

- Added `tv_maxrate 0` in `etf2l_custom.cfg`.

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.5)

---

## 1.0.4 (28.05.2022)

- Applied [6v6 Season 42 preseason changes](https://etf2l.org/2022/06/01/6v6-season-42-config-changes/) into the main 6v6 5CP config.

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.4)

---

## 1.0.3 (11.05.2022)

Changes:

- change `sm_rest_in_peace_rick_may` to `255`
- add `round_time_override 300`. `mp_timelimit_improved 0`, `mp_timelimit_improved_visibility 0` and `sm_improvedtimers_chat 1` and change `mp_winlimit` to `5` in a `etf2l_6v6_5cp_s42pre` config for a test in ETF2L 6v6 5CP games,
- add `round_time_override -1`. `mp_timelimit_improved 0`, `mp_timelimit_improved_visibility 0` and `sm_improvedtimers_chat 1` to all other gamemodes and types of maps,
- set a proper comment character in the configs.

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.3)

---

## 1.0.2 (11.01.2022)

Changes:

- fix: change `sm_grounded_rj_resistance` to `0`
Thanks to Bodolaz for catching this change which was made by mistake.

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.2)

---

## 1.0.1 (10.01.2022)

Changes:

- feat: add whitelists, generate config script, funding info, license and rewrite readme
- feat: add [tf2-comp-fixes v1.16.0](https://github.com/ldesgoui/tf2-comp-fixes/releases/tag/v1.16.0) variables set to `0`
- refactor: better `README`
- feat: add current map configs
- refactor: change `sm_inhibit_extendfreeze` to `1`

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.1)

---

## 1.0.0 (10.01.2022)

Initial GitHub release.

- feat: add change `sm_fix_post_pause_state 1`
- feat: add `sm_empty_active_ubercharges_when_dropped 1`
- refactor: change `sm_override_pipe_size` to `4.0`

[GitHub](https://github.com/ETF2L/gameserver-configs/releases/tag/1.0.0)