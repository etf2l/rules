---
title: Server Configs
---
---
Server configs contain the settings necessary for ETF2L matches and whitelists enforce the unlockable weapon restrictions.

To install ETF2L configs on your server, upload the .cfg and .txt files to your server’s orangebox/tf/cfg folder. You must execute the appropriate ETF2L config before any league match, by using the “exec [configname]” command.

ETF2L configs and whitelists can be downloaded separately or as a package:

If you need just the latest configs and whitelists, download [[this](https://github.com/ETF2L/gameserver-configs/releases/latest/download/etf2l_configs.zip)] package.

If you want the appropriate configs to be executed automatically*, download
the [[extra pack](https://github.com/ETF2L/gameserver-configs/releases/latest/download/etf2l_configs_extra.zip)] containing all ETF2L and map-specific configs.

\* *Configs will be executed automatically only for maps that are not played in both 6v6 and 9v9 in ETF2L at this time.*

Alternatively, if you use [[TFTrue](https://github.com/AnAkkk/TFTrue)] (thanks to ![France](https://etf2l.org/images/flags/France.gif) AnAkkk), it will automatically download the latest configs and whitelists and execute them when appropriate.

If you want to have a graphic overview of the whitelists, visit [[whitelist.tf](https://whitelist.tf/)]

#### tf2-comp-fixes plugin

Thanks to ![France](https://etf2l.org/images/flags/France.gif) [TwiiKuu](https://etf2l.org/forum/user/65513) we use a plugin called tf2-comp-fixes with a purpose of improving competitive gameplay. It’s a SourceMod plugin, meaning you have to have SourceMod 1.10.x installed on your game server with all dependencies mentioned in the plugin README file. After the installation, make sure it works by executing a command rcon sm_cf etf2l. ETF2L configs will execute commands matching the ETF2L preset on every load in order to make sure all fixes for our league are used.

### Config files

---

#### Base configs

These configs are called automatically by other configs.

- [etf2l.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l.cfg) – base config, automatically executed by all ETF2L configs.
- [etf2l_custom.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_custom.cfg) – optional settings recommended by ETF2L staff, automatically executed by all ETF2L configs.
- [etf2l_6v6.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_6v6.cfg) – base 6v6 config, automatically executed by all 6v6 map configs.
- [etf2l_9v9.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_9v9.cfg) – base 9v9 config, automatically executed by all 9v9 map configs.

#### Gamemode-specific configs

Make sure to execute the correct config for your match!

- 6v6:
  - [etf2l_6v6_5cp.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_6v6_5cp.cfg) – ETF2L rules for 6v6 5CP maps, such as cp_badlands
  - [etf2l_6v6_koth.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_6v6_koth.cfg) – ETF2L rules for 6v6 KOTH maps, such as koth_viaduct
  - [etf2l_6v6_ctf.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_6v6_ctf.cfg) – ETF2L rules for 6v6 CTF maps, such as ctf_turbine
  - [etf2l_6v6_stopwatch.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_6v6_stopwatch.cfg) – ETF2L rules for 6v6 Stopwatch maps, such as cp_gravelpit

- Highlander:
  - [etf2l_9v9_5cp.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_9v9_5cp.cfg) – ETF2L rules for Highlander 5CP maps, such as cp_process_final
  - [etf2l_9v9_ctf.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_9v9_ctf.cfg) – ETF2L rules for Highlander CTF maps, such as ctf_haunt
  - [etf2l_9v9_koth.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_9v9_koth.cfg) – – ETF2L rules for Highlander KOTH maps, such as koth_lakeside
  - [etf2l_9v9_stopwatch.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_9v9_stopwatch.cfg) – ETF2L rules for Highlander Stopwatch maps, such as pl_badwater and cp_steel

- Other:
  - [etf2l_ultiduo.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_ultiduo.cfg) – ETF2L rules for Ultiduo.
  - [etf2l_bball.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_bball.cfg) – ETF2L rules for BBall.
  - [etf2l_golden_cap.cfg](https://github.com/ETF2L/gameserver-configs/blob/master/configs/etf2l_golden_cap.cfg) – ETF2L rules for a golden cap on 5cp maps.

#### Whitelists

*maintained by [whitelist.tf](https://whitelist.tf/)*

- [6v6](https://whitelist.tf/etf2l_whitelist_6v6.txt)
- [Highlander](https://whitelist.tf/etf2l_whitelist_9v9.txt)
- [BBall](https://whitelist.tf/etf2l_whitelist_bball.txt)
- [Ultiduo](https://whitelist.tf/etf2l_whitelist_ultiduo.txt)
