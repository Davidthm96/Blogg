---
layout: layout.njk
title: "Il mio Blog"
---

{% for post in collections.posts %}
  <article>
    <h2>{{ post.data.title }}</h2>
    <img src="{{ post.data.image }}">
    <div class="caption">
      {{ post.content | safe }}
    </div>
  </article>
{% endfor %}
