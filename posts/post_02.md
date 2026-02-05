---
layout: layout.njk
title: "Nome Canzone"
track_id: "4T7CBE7nkQsiUqHLDROTwJ"
tags: posts
type: music
---
Perché ho scelto questa traccia.

<div class="music-player">
    <img src="{{ cover | url }}" class="music-cover">
    <div class="music-info">
        <span class="music-title">{{ title }}</span>
        <span class="music-artist">{{ artist }}</span>
    </div>
    <a href="{{ spotify_url }}" target="_blank" class="music-controls">▶</a>
</div>

<div class="caption">
    Perché questa canzone è importante per questo archivio.
</div>
