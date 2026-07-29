---
title: "Resources"
permalink: /resources/
---

<div class="resources-page">
  <p class="page-intro">A curated collection of resources about autism, money management, financial wellbeing, and inclusive financial technologies.</p>
  <p class="page-note">These links are not endorsements. They may be useful to autistic people, supporters, researchers, designers, and practitioners.</p>

  <div class="resource-grid">
  {% for resource in site.data.resources.resources_row %}
    <article class="resource-card">
      <h2>{{ resource.title }}</h2>
      <p>{{ resource.excerpt }}</p>
      <a class="resource-button" href="{{ resource.url }}" target="_blank" rel="noopener noreferrer">{{ resource.btn_label }}</a>
    </article>
  {% endfor %}
  </div>

  <section class="resource-suggestion" aria-labelledby="suggest-resource-title">
    <h2 id="suggest-resource-title">Suggest a resource</h2>
    <p>If you know of a useful resource, email <a href="mailto:helena.lyhme@citystgeorges.ac.uk">helena.lyhme@citystgeorges.ac.uk</a>.</p>
  </section>
</div>
