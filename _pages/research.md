---
title: "Research"
permalink: /research/
---

NeuroMoneyTech explores the intersection of neurodiversity, money, and technology.


<div class="resource-grid">
{% for project in site.data.research.projects %}
  <div class="resource-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.excerpt }}</p>
    <a class="resource-button" href="{{ project.url }}">{{ project.btn_label }}</a>
  </div>
{% endfor %}
</div>
