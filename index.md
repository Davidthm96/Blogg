---
layout: layout.njk
title: "Home"
templateEngineOverride: njk, md
eleventyExcludeFromCollections: true
---

{% for post in collections.posts | reverse %}
  <article>
    <h2>{{ post.data.title }}</h2>
    <img src="{{ post.data.image }}" alt="{{ post.data.title }}">
    <div class="caption">
      {{ post.content | safe }}
    </div>
  </article>
{% endfor %}
