---
title: "Resources"
permalink: /resources/
---

This page contains a collection of resources related to autism, neurodiversity, money management, financial wellbeing, and inclusive financial technologies.

The resources listed here are not endorsements. They have been selected because they may be useful to neurodivergent people, researchers, designers, and practitioners interested in the intersection of neurodiversity, money, and technology.

<div class="resource-grid">
{% for resource in site.data.resources.resources_row %}
  <div class="resource-card">
    <h3>{{ resource.title }}</h3>
    <p>{{ resource.excerpt }}</p>
    <a class="resource-button" href="{{ resource.url }}"> {{ resource.btn_label }} </a>
  </div>
{% endfor %}
</div>

---

## Suggest a Resource

If you know of a resource that would be useful to include on this page, please get in touch [helena.lyhme@citystgeorges.ac.uk](mailto:helena.lyhme@citystgeorges.ac.uk).
