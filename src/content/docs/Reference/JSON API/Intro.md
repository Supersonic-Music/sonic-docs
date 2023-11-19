---
title: Intro to JSON API
description: About the JSON API
---
## Interacting with Sonic Screwdriver through the JSON API
You may interact with Sonic Screwdriver's JSON API. To help understand, here is a 'General Formula' for JSON file paths on the server:

**List of artists:**

```http://localhost:6969/.cal_sonic_library/meta/artists.json```

**List of albums for each artist in each file:**

```http://localhost:6969/.cal_sonic_library/albums/{artist}_albums.json```

**List of songs in each album in each file:**

```http://localhost:6969/.cal_sonic_library/songs/{artist}_{album}.json```
