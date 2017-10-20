---
layout: default
---

<div class="case-studies">
  {% for post in site.case-studies %}
    <article class="case-studies">

      <h1><a href="{{ site.baseurl }}{{ case-study.url }}">{{ case-study.title }}</a></h1>

      <div class="entry">
        {{ case-study.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ case-study.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
