---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<h1 id="Hello" style="margin-top: 1rem">👋 Hello!</h1>

I am a **final-year Ph.D. candidate** at Xi’an Jiaotong University, under the supervision
of [Prof. Xinyu Yang](https://gr.xjtu.edu.cn/web/xyyang), and was a **visiting Ph.D.** (2023–2024) at Queen
Mary University of London, supervised by [Prof. Dimitrios Kollias](https://sites.google.com/view/dimitrioskollias).

I currently work as a **Research Associate** at
[Multimedia & Vision Group @ QMUL](https://www.qmul.ac.uk/eecs/research/research-centres-and-groups/multimedia--vision-mmv-research-group/),
focusing on *AI-Enabled Face Analysis in the Wild*
with [Prof. Dimitrios Kollias](https://sites.google.com/view/dimitrioskollias).
In parallel, I work as a **Research Associate** at the University of Exeter, focusing on *Fairness in Personality
Analysis*, in collaboration with [Prof. Zeyu Fu](https://zeyufu.github.io/)
and [Prof. Siyang Song](https://hbuglab.com/people.html).

<span style="color: #ea1c25; font-weight: bold;">🔥I am currently open to Postdoctoral Research opportunities starting in
2025/2026!</span>

# 🎯 Research Interests

<section class="research-grid">
  <div class="grid-container">
    <div class="grid-item">
      <h3>Human Behavior Analysis</h3>
      <h4>Facial Behavior Analysis</h4>
      <ul>
        <li>Expressions, Action-Units (AUs), Valence-Arousal (VA) Analysis</li>
      </ul>
      <p class="reference-list">Featured Works:
        {% assign target_ids1 = "cognitive-priors-multitask,unified-affective-mtl,beyond-prompts-vega" | split: "," %}
        {% assign pubs = site.data.publications %}
        {% assign result_links1 = "" | split: "" %}
        {% for pub in pubs %}
          {% assign current_id = pub.id %}
          {% if target_ids1 contains current_id %}
            {% assign item = forloop.index | append: '|' | append: current_id %}
            {% assign result_links1 = result_links1 | push: item %}
          {% endif %}
        {% endfor %}
        {% for item in result_links1 %}
          {% assign parts = item | split: '|' %}
          <a href="#{{ parts[1] }}">[{{ parts[0] }}]</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
      <h4>Multi-Task Modeling</h4>
      <ul>
        <li>Unified Expr AU VA Analysis</li>
      </ul>
      <p class="reference-list">Featured Works:
        {% assign target_ids2 = "beyond-prompts-vega,abaw6-competition" | split: "," %}
        {% assign result_links2 = "" | split: "" %}
        {% for pub in pubs %}
        {% assign current_id = pub.id %}
        {% if target_ids2 contains current_id %}
        {% assign item = forloop.index | append: '|' | append: current_id %}
        {% assign result_links2 = result_links2 | push: item %}
        {% endif %}
        {% endfor %}
        {% for item in result_links2 %}
        {% assign parts = item | split: '|' %}
        <a href="#{{ parts[1] }}">[{{ parts[0] }}]</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
    <div class="grid-item">
      <h3>Trustworthy AI</h3>
      <h4>Fairness & Bias</h4>
      <ul>
        <li>Fair & Consistent Affect Analysis</li>
        <li>Domain & Fair Generalization</li>
      </ul>
      <p  class="reference-list">Featured Works:
        {% assign target_ids1 = "fair-domain-generalization,fairness-protocol-tbiom,bridging-fair-affect" | split: "," %}
        {% assign pubs = site.data.publications %}
        {% assign result_links1 = "" | split: "" %}
        {% for pub in pubs %}
          {% assign current_id = pub.id %}
          {% if target_ids1 contains current_id %}
            {% assign item = forloop.index | append: '|' | append: current_id %}
            {% assign result_links1 = result_links1 | push: item %}
          {% endif %}
        {% endfor %}
        {% for item in result_links1 %}
          {% assign parts = item | split: '|' %}
          <a href="#{{ parts[1] }}">[{{ parts[0] }}]</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
      <h4>Causal & Explainability</h4>
      <ul>
        <li>Counterfactual Intervention</li>
        <li>Causal Discovery</li>
        <li>Interpretable Modeling</li>
      </ul>
      <p   class="reference-list">Featured Works:
        {% assign target_ids2 = "affective-causal-discovery,beyond-prompts-vega" | split: "," %}
        {% assign result_links2 = "" | split: "" %}
        {% for pub in pubs %}
        {% assign current_id = pub.id %}
        {% if target_ids2 contains current_id %}
        {% assign item = forloop.index | append: '|' | append: current_id %}
        {% assign result_links2 = result_links2 | push: item %}
        {% endif %}
        {% endfor %}
        {% for item in result_links2 %}
        {% assign parts = item | split: '|' %}
        <a href="#{{ parts[1] }}">[{{ parts[0] }}]</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
    <div class="grid-item">
      <h3>Multimodal Learning</h3>
      <h4>Vision-Language Model</h4>
      <ul>
        <li>VLMs Representation Learning</li>
      </ul>
      <p class="reference-list">Featured Works:
        {% assign target_ids1 = "cognitive-priors-multitask" | split: "," %}
        {% assign pubs = site.data.publications %}
        {% assign result_links1 = "" | split: "" %}
        {% for pub in pubs %}
          {% assign current_id = pub.id %}
          {% if target_ids1 contains current_id %}
            {% assign item = forloop.index | append: '|' | append: current_id %}
            {% assign result_links1 = result_links1 | push: item %}
          {% endif %}
        {% endfor %}
        {% for item in result_links1 %}
          {% assign parts = item | split: '|' %}
          <a href="#{{ parts[1] }}">[{{ parts[0] }}]</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
      <h4>Cross-Modal Representation Alignment</h4>
      <ul>
        <li>Audio, Visual, Language Representation Alignment</li>
        <li>Prototypes Learning</li>
      </ul>
      <p  class="reference-list">Featured Works:
        {% assign target_ids2 = "grounding-emotion-recognition" | split: "," %}
        {% assign result_links2 = "" | split: "" %}
        {% for pub in pubs %}
        {% assign current_id = pub.id %}
        {% if target_ids2 contains current_id %}
        {% assign item = forloop.index | append: '|' | append: current_id %}
        {% assign result_links2 = result_links2 | push: item %}
        {% endif %}
        {% endfor %}
        {% for item in result_links2 %}
        {% assign parts = item | split: '|' %}
        <a href="#{{ parts[1] }}">[{{ parts[0] }}]</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
    <div class="grid-item">
      <h3>Human Behavior Generation</h3>
      <h4>Talking Head Generation</h4>
      <ul>
        <li>Emotion-controllable, facial and head motion transfer</li>
      </ul>
      <p  class="reference-list">Featured Works:
        <a href="#nerf">[Second Prize]</a>
      </p>
      <h4>Reaction Generation</h4>
      <ul>
        <li>Facial Responses (Reaction) Generation.</li>
      </ul>
      <p  class="reference-list">Featured Works:
        {% assign target_ids2 = "robust-reaction-generation" | split: "," %}
        {% assign result_links2 = "" | split: "" %}
        {% for pub in pubs %}
        {% assign current_id = pub.id %}
        {% if target_ids2 contains current_id %}
        {% assign item = forloop.index | append: '|' | append: current_id %}
        {% assign result_links2 = result_links2 | push: item %}
        {% endif %}
        {% endfor %}
        {% for item in result_links2 %}
        {% assign parts = item | split: '|' %}
        <a href="#{{ parts[1] }}">[{{ parts[0] }}]</a>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </p>
    </div>
  </div>
</section>

# ✨ News

- *2025.07*: &nbsp; 🎉 One paper accepted at **ACM MM 2025**
- *2025.07*: &nbsp; 📢 Our work presented at
  the [BMVA Symposium on AI Security](https://www.bmva.org/meetings/25-07-16-AISecurity.html)
- *2025.06*: &nbsp; 🚀 Served as **Program Chair, Session Chair**, and **Data Chair** of
  the [9th ABAW Workshop and Competition](https://affective-behavior-analysis-in-the-wild.github.io/9th/) at **ICCV 2025**
- *2025.04*: &nbsp; 🎉 One journal paper accepted
  by [IEEE Transactions on Biometrics, Behavior, and Identity Science](https://ieeexplore.ieee.org/abstract/document/10919136)
- *2025.01*: &nbsp; 🚀 Served as **Program Chair, Session Chair**, and **Data Chair** of
  the [8th ABAW Workshop and Competition](https://affective-behavior-analysis-in-the-wild.github.io/8th/index.html) at **CVPR 2025**
- *2024.08*: &nbsp; 🏆 Honored with the **Best Reviewed Paper Award** at **IEEE FG 2024**
- *2024.08*: &nbsp; 🎉 One paper accepted at [IEEE IJCB 2024](https://ieeexplore.ieee.org/document/10744499)
- *2024.08*: &nbsp; 🎉 Two workshop papers accepted at **ECCV 2024**
  [[1]](https://dl.acm.org/doi/10.1007/978-3-031-91581-9_3) [[2]](https://dl.acm.org/doi/10.1007/978-3-031-91581-9_1)
- *2024.05*: &nbsp; 🚀 Served as **Program Chair, Session Chair**, and **Data Chair** of
  the [7th ABAW Workshop and Competition](https://affective-behavior-analysis-in-the-wild.github.io/7th/index.html) at **ECCV 2024**
- *2024.04*: &nbsp; 🎉 One paper accepted
  at [IEEE CVPR 2024](https://openaccess.thecvf.com/content/CVPR2024W/ABAW/html/Kollias_The_6th_Affective_Behavior_Analysis_In-the-wild_ABAW_Competition_CVPRW_2024_paper.html)
- *2024.03*: &nbsp; 🎉 One paper accepted at [IEEE FG 2024](https://ieeexplore.ieee.org/document/10582033)
- *2024.01*: &nbsp; 🚀 Served as **Program Chair, Session Chair**, and **Data Chair** of the [6th ABAW Workshop and Competition](https://affective-behavior-analysis-in-the-wild.github.io/6th/) at
  **IEEE CVPR 2024**

# 📝 Publications & Preprints

<section class="publications">
  {% for pub in site.data.publications %}
    <div class="anchor-offset" id="{{ pub.id }}"></div>
    <div class="publication-card">
      <div class="pub-title">
        <span class="pub-index">{{ forloop.index }}.</span>
        <a href="{{ pub.url }}" target="_blank">{{ pub.title }}</a>
      </div>
      <div class="pub-authors">{{ pub.authors }}</div>
      <div class="pub-venue">
        <em>{{ pub.venue }}</em>
      </div>
    </div>
  {% endfor %}
</section>

<h1 id="code">
  <img src="https://github.com/favicon.ico" alt="GitHub icon" />
  Published Databases
</h1>
<div class="published-database">
  <div class="section-header">
    <h2>Towards Fair and Consistent Affect Analysis</h2>
    <a class="code-link" href="https://github.com/dkollias/Fair-Consistent-Affect-Analysis/tree/main" target="_blank">🔗 Access Data & Code on GitHub</a>
  </div>

  <p>
    Evaluating affective computing methods remains challenging due to inconsistencies in database partitioning and evaluation protocols, which often result in unfair or biased performance comparisons. While many studies report steady performance gains, our analysis questions the validity of such claims. Motivated by these insights, we introduce a unified evaluation protocol to ensure fairness and comparability across benchmarks.
  </p>

  <p>
    Specifically, for six widely used affective datasets, we provide comprehensive demographic annotations—including <strong>race</strong>, <strong>gender</strong>, and <strong>age</strong>—alongside standardized evaluation metrics and a shared protocol for <strong>expression recognition</strong>, <strong>action unit detection</strong>, and <strong>valence-arousal estimation</strong>.
  </p>

  <p>
    Additionally, we release multiple pre-trained models (ranging from baselines to state-of-the-art systems) trained under this unified protocol. A dedicated leaderboard is also introduced to encourage future research with a stronger emphasis on fairness, consistency, and reproducibility.
  </p>
</div>

# 🏆 Honors and Awards

<section class="awards-section">
  <ul class="award-list">
    <li>
      <strong>Best Reviewed Paper</strong> | IEEE FG 2024
      <em>Bridging the Gap: Protocol Towards Fair and Consistent Affect Analysis.</em>
    </li>
    <li>
      <strong>Second Prize</strong> | 2022 | China National Radio and Television Administration
      <em>Artificial Intelligence Application Innovation Competition</em>
      <span class="award-project" id="nerf">Local Language IP Broadcasting Integration Platform Based on NeRF.</span>
    </li>
    <li>
      <strong>Excellence Award</strong> | 2022 | China National Radio and Television Administration
      <em>New Video Technology Application Innovation Competition</em>
      <span class="award-project">Intelligent Media Activation System for Video Scenarios in the Petrochemical Industry.</span>
    </li>
    <li>
      <strong>Second Prize</strong> | 2021 | China National Radio and Television Administration
      <em>Artificial Intelligence Application Innovation Competition</em>
      <span class="award-project">Audio-Visual Content Editing AI Platform Based on “Silk Road Cloud”.</span>
    </li>
    <li>
      <strong>Second Prize</strong> | 2021 | China National Radio and Television Administration
      <em>New Video Technology Application Innovation Competition</em>
      <span class="award-project">Ultra-HD Program Intelligent Production Project Based on Multimodal Fusion.</span>
    </li>
    <li><strong>Outstanding Student Cadre</strong> | 2022, 2023 | Xi’an Jiaotong University</li>
    <li><strong>Outstanding Student</strong> | 2022, 2023 | Xi’an Jiaotong University</li>
    <li><strong>Outstanding Student Scholarship</strong> | 2023 | Xi’an Jiaotong University</li>
    <li><strong>National Encouragement Scholarship</strong> | 2016 | China Ministry of Education (MoE)</li>
  </ul>
</section>


