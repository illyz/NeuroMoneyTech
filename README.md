# NeuroMoneyTech website

PhD research at the intersection of autism, moneywork, and technology.

## Where to edit website text

Most longer text is written directly in Markdown pages:

| Website content | File to edit |
| --- | --- |
| Homepage | `index.md` |
| Research overview | `_pages/research.md` |
| Navigating Financial Lives findings | `_pages/navigating-financial-lives.md` |
| Collaborative Visual Thinking | `_pages/collaborative-visual-thinking.md` |
| Current autistic joy study | `_pages/autistic-joy.md` |
| Resources page introduction | `_pages/resources.md` |

Short information that appears in more than one place is stored separately. Editing it once updates every page that uses it:

| Shared content | File to edit |
| --- | --- |
| Study titles, status, summaries, links, and key facts | `_data/studies.yml` |
| Research-method title, summary, and link | `_data/methods.yml` |
| Publication details, DOI links, and abstracts | `_data/publications.yml` |
| Figure descriptions, captions, and text alternatives | `_data/research_figures.yml` |
| Collaborative Visual Thinking example labels and descriptions | `_data/visual_artefacts.yml` |
| Resource links | `_data/resources.yml` |
| Main navigation | `_data/navigation.yml` |

Files in `_includes` control repeated visual elements such as the “On this page” list, study facts, figures, and publication entries. Files in `assets/css` control the design. These usually do not need to be changed when updating wording.

## Preview and publish

Start the local preview from this folder:

```bash
bundle exec jekyll serve
```

After checking the changes in the browser:

```bash
git status
git add .
git commit -m "Update website text"
git push
```
