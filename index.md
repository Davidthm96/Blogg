---
layout: layout.njk
title: "Home"
templateEngineOverride: njk, md
eleventyExcludeFromCollections: true
---

{% for post in collections.posts | reverse %}
  <article>
    
    {# 1. IL CONTENUTO (FOTO O PLAYER) #}
    
    {% if post.data.image %}
      <img src="{{ post.data.image | url }}" alt="{{ post.data.title }}">
    {% endif %}

    {% if post.data.type == "music" %}
      <div class="spotify-wrapper" style="margin-bottom: 15px; border: 1px solid #333; line-height: 0;">
        <iframe 
          src="https://open.spotify.com/embed/track/{{ post.data.track_id }}?utm_source=generator&theme=0" 
          width="100%" 
          height="152" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
    {% endif %}

    {% if post.data.type == "youtube" %}
      <div class="custom-player" data-video="{{ post.data.video_id }}" style="border: 1px solid #333; padding: 15px; margin-bottom: 15px; display: flex; align-items: center; gap: 20px;">
        <div class="yt-hidden" style="display:none;"></div>
        <button class="play-btn" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer; font-family: serif;">▶</button>
        <div class="track-info" style="flex-grow:1;">
            <div class="progress-container" style="width: 100%; height: 2px; background: #222; position: relative;">
                <div class="progress" style="width: 0%; height: 100%; background: #fff; transition: width 0.5s;"></div>
            </div>
        </div>
      </div>
    {% endif %}

    {# 2. METADATI (TITOLO CORPO 14 E DESCRIZIONE) #}
    
    <div class="post-metadata" style="font-size: 14px; line-height: 1.2;">
        <div class="post-title" style="color: #fff; text-transform: uppercase; margin-bottom: 4px;">
            {{ post.data.title }}
        </div>
        <div class="post-description" style="color: #888;">
            {{ post.content | safe }}
        </div>
    </div>

  </article>
{% endfor %}
