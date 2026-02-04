---
layout: layout.njk
title: "Il mio primo post"
image: "/img/tua-foto.jpg"
tags: posts
---
{% for post in collections.posts %}
  <article>
    <h2>{{ post.data.title }}</h2>
    <img src="{{ post.data.image }}">
    <div>{{ post.content }}</div>
  </article>
{% endfor %}
