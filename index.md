---
layout: layout.njk
title: "Home"
---

{% for post in collections.posts %}
  <article>
    <h2>{{ post.data.title }}</h2>
    <img src="{{ post.data.image }}">
    <div>{{ post.content }}</div>
  </article>
{% endfor %}
