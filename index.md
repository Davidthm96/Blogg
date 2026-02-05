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

{# SE È UN POST DA YOUTUBE (MUSICA) #}
    {% if post.data.type == "youtube" %}
      <div class="youtube-audio-wrapper" style="border: 1px solid #333; overflow: hidden; height: 120px; position: relative; margin: 20px 0;">
        <iframe 
          src="https://www.youtube.com/embed/{{ post.data.video_id }}?rel=0&showinfo=0&controls=1&color=white" 
          style="position: absolute; top: -50px; left: 0; width: 100%; height: 220px;" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </div>
    {% endif %}
    
    <div class="caption">
      {{ post.content | safe }}
    </div>
  </article>
{% endfor %}
