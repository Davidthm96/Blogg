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

    {# SE È UN POST MUSICALE #}
    {% if post.data.type == "music" %}
      <div class="music-player">
          <img src="{{ post.data.cover | url }}" class="music-cover" style="width:60px; height:60px; float:left; margin-right:15px;">
          <div class="music-info">
              <span class="music-title" style="color:#fff; display:block;">{{ post.data.title }}</span>
              <span class="music-artist" style="color:#888; font-size:0.9rem;">{{ post.data.artist }}</span>
          </div>
          <a href="{{ post.data.spotify_url }}" target="_blank" style="text-decoration:none; font-size:1.5rem;">▶</a>
          <div style="clear:both;"></div>
      </div>
    {% endif %}

    <div class="caption">
      {{ post.content | safe }}
    </div>
  </article>
{% endfor %}
