---
layout: index
pagination:
   data: authors
   size: 1
   alias: author
permalink: "/authors/{{author.key}}/"
eleventyComputed:
   title: "{{author.name}}"
---

<h2>{{ author.name }}</h2>

<p>
Website: <a href="{{author.website}}" target="_new">{{author.website}}</a><br/>
</p>

<img src="{{author.photo}}" style="float:left; max-height: 300px; padding-right: 10px">

<br clear="left" />

<h2>Posts by Author</h2>

{% assign posts = collections.post | getPostsByAuthor: author.key %}

<ul>
{% for post in posts %}
	<li><a href="{{post.url}}">{{post.data.title}}</a></li>
{% endfor %}
</ul>