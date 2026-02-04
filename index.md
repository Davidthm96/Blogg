---
layout: layout.njk
title: "Home"
templateEngineOverride: njk, md
---

{% for post in collections.posts %}
  <article>
    <h2>{{ post.data.title }}</h2>
    <img src="{{ post.data.image }}">
    <div>{{ post.content }}</div>
  </article>
{% endfor %}
