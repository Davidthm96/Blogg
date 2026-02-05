---
layout: layout.njk
title: "Home"
templateEngineOverride: njk, md
eleventyExcludeFromCollections: true
---

{% for post in collections.posts | reverse %}
  <article>
    <h2>{{ post.data.title }}</h2>

    {# SE È UN POST FOTOGRAFICO #}
    {% if post.data.image %}
      <img src="{{ post.data.image | url }}" alt="{{ post.data.title }}">
    {% endif %}

{# SE È UN POST MUSICALE CON PLAYER REALE #}
    {% if post.data.type == "music" %}
      <div class="spotify-wrapper" style="margin: 20px 0; border: 1px solid #333;">
        <iframe 
          src="https://open.spotify.com/embed/track/{{ post.data.track_id }}?utm_source=generator&theme=0" 
          width="100%" 
          height="152" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
    {% endif %}

{% if post.data.type == "youtube" %}
      <div class="custom-player" data-video="{{ post.data.video_id }}" style="border: 1px solid #333; padding: 15px; margin: 20px 0; display: flex; align-items: center; gap: 20px;">
        <div class="yt-hidden" style="display:none;"></div>
        
        <button class="play-btn" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer; font-family: serif;">▶</button>
        
        <div class="track-info" style="flex-grow:1;">
            <div style="font-size: 0.9rem; color: #fff; margin-bottom: 5px;">{{ post.data.title }}</div>
            <div class="progress-container" style="width: 100%; height: 2px; background: #222; position: relative;">
                <div class="progress" style="width: 0%; height: 100%; background: #fff; transition: width 0.5s;"></div>
            </div>
        </div>
      </div>
    {% endif %}
    
    <div class="caption">
      {{ post.content | safe }}
    </div>
  </article>
{% endfor %}
