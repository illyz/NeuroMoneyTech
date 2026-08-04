---
title: "Resources"
permalink: /resources/
---

<div class="resources-page">
  <p class="page-intro">This is a collection of resources I came across during my research and thought might be helpful to visitors to this website.</p>
  <p class="page-note"><strong>I have not reviewed every resource in full, so including something here does not mean that I endorse everything it says.</strong></p>

  <div class="resource-filters" data-resource-filters>
    <p class="resource-filters__label" id="resource-filter-label">Filter by topic</p>
    <div class="resource-filters__buttons" role="group" aria-labelledby="resource-filter-label">
      <button type="button" class="resource-filter is-active" data-resource-filter="all" aria-pressed="true" aria-controls="resource-list">All resources</button>
      <button type="button" class="resource-filter" data-resource-filter="money" aria-pressed="false" aria-controls="resource-list">Money and financial wellbeing</button>
      <button type="button" class="resource-filter" data-resource-filter="general" aria-pressed="false" aria-controls="resource-list">Autism and neurodiversity</button>
    </div>
    <p class="resource-filter-status" data-resource-filter-status aria-live="polite"></p>
  </div>

  <div class="resource-grid" id="resource-list">
  {% for resource in site.data.resources.resources_row %}
    <article class="resource-card" data-resource-card data-resource-categories="{{ resource.categories | join: ' ' }}">
      <h2>{{ resource.title }}</h2>
      <p>
        {{ resource.excerpt }}
      {% if resource.related_url %}
        {{ resource.related_before }} <a href="{{ resource.related_url | relative_url }}">{{ resource.related_label }}</a> {{ resource.related_after }}
      {% endif %}
      </p>
      <a class="resource-button" href="{{ resource.url }}" target="_blank" rel="noopener noreferrer">{{ resource.btn_label }}</a>
    </article>
  {% endfor %}
  </div>

  <section class="resource-suggestion" aria-labelledby="suggest-resource-title">
    <h2 id="suggest-resource-title">Suggest a resource</h2>
    <p>If you know of a useful resource, email <a href="mailto:helena.lyhme@citystgeorges.ac.uk">helena.lyhme@citystgeorges.ac.uk</a>.</p>
  </section>
</div>
