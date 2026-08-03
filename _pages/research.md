---
title: "Reinventing the Future of Financial Technologies with Autistic Adults"
permalink: /research/
classes: wide
contents:
  - id: "phd-overview"
    label: "PhD overview"
  - id: "research-questions"
    label: "Research questions"
  - id: "research-method"
    label: "Research methods"
  - id: "completed-study"
    label: "Completed research"
  - id: "current-study"
    label: "Research underway"
---

<div class="research-page">
  <div class="research-page__opening">
    <div class="research-page__intro">
      <p class="research-page__lede">This PhD explores how financial technologies could be designed differently by working with autistic adults and learning from their experiences, practices, and ideas.</p>
    </div>
  </div>

  <div class="research-page__quick-start">
    {% include on-this-page.html %}

    <section class="research-featured" aria-labelledby="featured-research-title">
      <span id="featured-research-title">Featured research</span>
      <div class="research-featured__links">

       <a class="research-featured__link" href="{{ '/research/navigating-financial-lives/' | relative_url }}">
          <span class="research-featured__image research-featured__image--contain" aria-hidden="true">
            <img src="{{ '/assets/images/research/nfl-moneywork-examples.svg' | relative_url }}" width="520" height="585" alt="" loading="lazy">
          </span>
          <span class="research-featured__copy">
            <span>Completed study</span>
            <strong>Navigating Financial Lives</strong>
          </span>
          <span class="research-featured__arrow" aria-hidden="true">→</span>
        </a>
        
        <a class="research-featured__link" href="{{ '/research/collaborative-visual-thinking/' | relative_url }}">
          <span class="research-featured__image" aria-hidden="true">
            <img src="{{ '/assets/images/research/cvt-example-sticky-notes.png' | relative_url }}" width="1448" height="1086" alt="" loading="lazy">
          </span>
          <span class="research-featured__copy">
            <span>Research method</span>
            <strong>Collaborative Visual Thinking</strong>
          </span>
          <span class="research-featured__arrow" aria-hidden="true">→</span>
        </a>
        
      </div>
    </section>
  </div>

  <section class="research-overview" id="phd-overview" aria-labelledby="phd-overview-title">
    <span class="research-section-label">PhD overview</span>
    <h2 id="phd-overview-title">Why this research matters</h2>

    < p> Nowadays, digital technologies shape almost every aspect of how we manage money and have become increasingly difficult to avoid. They have become a central part of how people manage, understand, and make decisions about their finances. They can make financial tasks easier, but they can also introduce new barriers and unintended consequences. These barriers can deepen financial exclusion, particularly for people who already experience financial difficulty, inaccessible services, or other forms of inequality.</p>

    <p>This research is working with autistic adults to explore new approaches to money management, treating them as designers of their own solutions, not only as users of technology. Together, we critically examine existing financial tools and services, identify where they do not work well, and explore how they could be designed differently.</p>

    <p>Autistic adults bring diverse lived experiences, creative practices, and ways of thinking about technology. These perspectives can reveal overlooked problems and open up new possibilities for the future of financial design.</p>

  </section>

  <section class="research-framework" id="research-questions" aria-labelledby="research-framework-title">
    <span class="research-section-label">Research questions</span>
    <h2 id="research-framework-title">From understanding current experiences to designing differently</h2>
    <p>The PhD is organised around four connected questions. They move from understanding autistic adults' experiences and adaptations to exploring what financial technologies could become.</p>

    {% include research-figure.html figure="research_framework" %}

    <details class="research-transcript">
      <summary>Read the research questions as text</summary>
      <div class="research-transcript__content research-transcript__content--phases">
        <div class="research-question-phase">
          <span class="research-question-phase__label">Discover and define</span>
          <ol>
            <li><strong>Challenges:</strong> What challenges do autistic adults experience with money management and financial technologies?</li>
            <li><strong>Adaptations:</strong> What strategies and adaptations have autistic adults developed to manage their financial lives?</li>
          </ol>
        </div>
        <div class="research-question-phase">
          <span class="research-question-phase__label">Design and deliver</span>
          <ol start="3">
            <li><strong>Learning from practice:</strong> What can autistic perspectives and practices teach us about the design of existing financial technologies?</li>
            <li><strong>Designing differently:</strong> How could financial technologies be different if they were designed from autistic perspectives?</li>
          </ol>
        </div>
      </div>
    </details>
  </section>

  <section class="research-method" id="research-method" aria-labelledby="research-method-title">
    <span class="research-section-label">Research methods</span>
    <h2 id="research-method-title">How the research is carried out</h2>

    <p>The research follows a participatory design ethos, involving people not just as informants, but as active participants shaping the design and direction of the research. This also means involving <i>experts by experience</i> throughout the process: in shaping research questions, in the design of the methods, and the interpretation of findings.</p>

    <p>The methods used have been designed or adapted for the specific needs of participants and the goals of the study.</p>

    
    <h3>{{ site.data.methods.collaborative_visual_thinking.title }}</h3>
    <p class="research-study__lead">{{ site.data.methods.collaborative_visual_thinking.summary }}</p>

    <p>The method can support different communication preferences and help participants explore complex topics, relationships, and experiences. It was used in the first study to explore participants' financial lives, the tools they used, and the people involved.</p>

    {% include cvt-examples.html preview=true %}

    <div class="research-actions">
      <a class="research-action research-action--secondary" href="{{ site.data.methods.collaborative_visual_thinking.page | relative_url }}">Learn about the method and see more examples</a>
    </div>
  </section>

  <section class="research-study research-study--complete" id="completed-study">
    <header class="research-study__header">
      {% include study-status.html study="navigating_financial_lives" %}
      <h2>{{ site.data.studies.navigating_financial_lives.title }}</h2>
      <p class="research-study__lead">{{ site.data.studies.navigating_financial_lives.summary }}</p>
    </header>

    {% include study-facts.html study="navigating_financial_lives" %}

    <p>Interviews with 20 autistic adults highlighted both challenges and strengths associated with money management. Participants described creating highly individual systems involving bank accounts, spreadsheets, reminders, automation, routines, and other forms of support.</p>

    <p>The findings show that there is no single autistic way of managing money. Financial technologies should therefore offer flexibility and personal control rather than assuming that one approach will work for everyone.</p>

    <div class="research-actions">
      <a class="research-action research-action--primary" href="{{ site.data.studies.navigating_financial_lives.page | relative_url }}">Explore the study and findings</a>
      <a class="research-action research-action--secondary" href="{{ '/publications/' | relative_url }}">View the publication</a>
    </div>
  </section>

  <section class="research-study research-study--current" id="current-study">
    <header class="research-study__header">
      {% include study-status.html study="autistic_joy" %}
      <h2>{{ site.data.studies.autistic_joy.title }}</h2>
      <p class="research-study__lead">{{ site.data.studies.autistic_joy.summary }}</p>
    </header>

    <p>Rather than focusing only on difficulties and barriers, the research considers enjoyable, meaningful, and affirming aspects of autistic money practices. It asks what these experiences could teach us about designing financial tools and systems differently.</p>

    <div class="research-update" role="note" aria-label="Current study status">
      <div><strong>Research is underway</strong><p>There are no findings to share yet. Updates will be added as the study progresses.</p></div>
    </div>

    <div class="research-actions">
      <a class="research-action research-action--secondary" href="{{ site.data.studies.autistic_joy.page | relative_url }}">Learn about the current study</a>
    </div>
  </section>
</div>
