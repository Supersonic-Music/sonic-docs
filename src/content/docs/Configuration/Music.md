---
title: 1. Music
description: Getting started with your own music collection
sidebar:
    order: 4
---

To configure your music, you can open up config.py in your Sonic Screwdriver installation directory.

**Changing the Directory of your Music**
You can change your music directory in Sonic Screwdriver by changing the MUSIC_DIR variable to your desired file path in config.py.

```python
from dataclasses import dataclass

# Choose your desired options below.
@dataclass
class UserOptions:
    MUSIC_DIR = "/home/deck/Music"
    CAL_DIR = ".cal_sonic_library"
    PLAYLIST_EXTENSION = ".tardis"
    SCAN_COLLECTION_ON_STARTUP = True
```
