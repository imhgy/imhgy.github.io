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

I am currently a **Research Associate** at
[_Multimedia & Vision Group @ QMUL_](https://www.qmul.ac.uk/eecs/research/research-centres-and-groups/multimedia--vision-mmv-research-group/),
working with Prof. [Dimitrios Kollias](https://sites.google.com/view/dimitrioskollias) on *AI-Enabled Face Analysis in the Wild*.
In parallel, I also a **Research Associate** at the _University of Exeter_, focusing on *Fairness in Personality
Analysis*, in collaboration with Prof. [Zeyu Fu](https://zeyufu.github.io/)
and Prof. [Siyang Song](https://hbuglab.com/people.html).

I am a **final-year Ph.D. candidate (Viva expected: Feb. 2026)** at _Xi’an Jiaotong University_, supervised by Prof. [Xinyu Yang](https://gr.xjtu.edu.cn/web/xyyang). From 2023 to 2024, I was a **visiting researcher** at _Queen
Mary University of London_, under the supervision of Prof. [Dimitrios Kollias](https://sites.google.com/view/dimitrioskollias).

<span style="color: #ea1c25; font-weight: bold;">🔥 I’m currently open to postdoctoral opportunities starting in 2026 — feel free to reach out!</span>

# 🎯 Research Interests

<div class="intro">
  <p>
    My research focuses on 
    <span class="research-highlight">Affective Computing (Interpretable, Multimodal & Multi-task, Facial Generation) and Trustworthy AI (Fairness, Accountability, Transparency & Ethics)</span>.
    Emphasising an interdisciplinary synthesis spanning information science, cognitive psychology, and sociology, I aim to build human-centred AI by developing advanced computational methods that are principled in interpretable, fairness, robustness, and ethical accountability.
  </p>
</div>


<section class="research-tree research-grid" aria-label="Affective Computing">
  <div class="tree">
    <a class="node root">Research Interests</a>
    <div class="connectors"><span class="v-line"></span></div>
    <div class="grid-container">
      <div id="affective-analysis" class="grid-item node child">
        <h3>Multimodel & Multi-task</h3>
        <div class="section-block">
            <h4>Multi-model Modeling</h4>
            <ul>
              <li>Vision–Language Models (VLMs)</li>
              <li>Interpretable Representation Learning</li>
              <li>Cognitive-aligned Alignment</li>
              <li>Domain Adaptation & Domain Generation</li>
            </ul>
            <p class="reference-list">Featured Works:
              {% assign target_ids1 = "beyond-prompts-vega,abaw8-workshop,abaw7-competition,abaw6-competition,avda-feature-fusion,cognitive-priors-multitask,grounding-emotion-recognition,unified-affective-mtl" | split: "," %}
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
        </div>
        <div class="section-block">
          <h4>Multi-Task Learning</h4>
          <ul>
            <li>Unified Multi-task Affective Analysis</li>
            <li>Expression, AU, VA and Pose Gesture</li>
            <li>Cognitive and Semantic Aligned Learning</li>
            <li>Pareto Optimization</li>
          </ul>
          <p class="reference-list">Featured Works: [ICLR under review],
            {% assign target_ids2 = "beyond-prompts-vega,cognitive-priors-multitask,unified-affective-mtl,abaw7-competition" | split: "," %}
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
      <div id="trustworthy-ai" class="grid-item node child">
        <h3>Fair & Interpretable</h3>
        <div class="section-block">
          <h4>Fairness & Consistency</h4>
          <ul>
            <li>Fair & Consistent Analysis</li>
            <li>Domain-Generalized & Bias-Resilient Modeling</li>
            <li>Fairness-aware Multi-task optimization</li>
          </ul>
          <p  class="reference-list">Featured Works:
            {% assign target_ids1 = "fair-domain-generalization1,fairness-protocol-tbiom,demographically-aware-benchmark,bridging-fair-affect,recruitment" | split: "," %}
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
        </div>
        <div class="section-block">
          <h4>Causality & Explainability</h4>
          <ul>
            <li>Causal Discovery</li>
            <li>Counterfactual Intervention </li>
            <li>Human-Aligned Causality</li>
            <li>Visual Prototype Leaning</li>
          </ul>
          <p   class="reference-list">Featured Works: [AAAI under review], [NeurIPS under review]
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
      </div>
      <div id="behavior-generation" class="grid-item node child">
        <h3>Facial Generation</h3>
        <div class="section-block">
          <h4>Talking Head Generation</h4>
          <ul>
            <li>StyleGAN, Diffusion, NeRF Modeling</li>
            <li>Emotion-Controllable Generation</li>
            <li>Identity-aware Facial Motion Style Leaning and Transfer</li>
            <li>Multi-View & Identity-Preserving Generation</li>
          </ul>
          <p  class="reference-list">Featured Works:
            <a href="#nerf">[Second Prize]</a>
          </p>
        </div>
        <div class="section-block">
          <h4>Reaction Generation</h4>
          <ul>
            <li>Stimuli-Driven Generation</li>
            <li>Emotion Aware and Controllable</li>
            <li>Semantic-Aligned Reaction</li>
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

    </div>
  </div>
</section>

# ✨ News

- *2026.01*: &nbsp; 🎉 I passed my PhD thesis examination with a **full innovation score** of 100/100 !
- *2025.11*: &nbsp; 🎉 One conference papers accepted at **AAAI 2026 (Oral)** !
- *2025.11*: &nbsp; 🎉 One conference papers accepted at **WACV 2026** !
- *2025.08*: &nbsp; 👨‍💻 Served as **Program Committee** of 33rd International Conference on Artificial Intelligence and Cognitive Science (AICS 2025) !
- *2025.07*: &nbsp; 🎉 One conference paper accepted at **ACM MM 2025 (Oral)** !
- *2025.07*: &nbsp; 📢 Our work presented at
  the **[BMVA Symposium on AI Security](https://www.bmva.org/meetings/25-07-16-AISecurity.html)** !
- *2025.06*: &nbsp; 👨‍💻 Served as **Program Chair, Session Chair** & **Data Chair** of
  the _9th ABAW Workshop and Competition_ at **[ICCV 2025](https://affective-behavior-analysis-in-the-wild.github.io/9th/)** !
- *2025.04*: &nbsp; 🎉 One journal paper accepted
  by [**IEEE Transactions on Biometrics, Behavior, and Identity Science (TBIOM)**](https://ieeexplore.ieee.org/abstract/document/10919136) !
- *2025.01*: &nbsp; 👨‍💻 Served as **Program Chair, Session Chair** & **Data Chair** of
  the _8th ABAW Workshop and Competition_ at **[IEEE CVPR 2025](https://affective-behavior-analysis-in-the-wild.github.io/8th/index.html)** !
- *2024.08*: &nbsp; 🏆 Honored with the **Best Reviewed Paper Award** at **IEEE FG 2024** !
- *2024.08*: &nbsp; 🎉 One conference paper accepted at [**IEEE IJCB 2024**](https://ieeexplore.ieee.org/document/10744499) !
- *2024.08*: &nbsp; 🎉 Two workshop papers accepted at **ECCV 2024**
  **[[1]](https://dl.acm.org/doi/10.1007/978-3-031-91581-9_3)** **[[2]](https://dl.acm.org/doi/10.1007/978-3-031-91581-9_1)** !
- *2024.05*: &nbsp; 👨‍💻 Served as **Program Chair, Session Chair** & **Data Chair** of
  the _7th ABAW Workshop and Competition_ at **[ECCV 2024](https://affective-behavior-analysis-in-the-wild.github.io/7th/index.html)** !
- *2025.07*: &nbsp; 🎉 One journal paper accepted at **[JAMIA 2025](https://academic.oup.com/jamia/article/31/11/2749/7755392)** !
- *2024.04*: &nbsp; 🎉 One workshop paper accepted
  at [**IEEE CVPR 2024**](https://openaccess.thecvf.com/content/CVPR2024W/ABAW/html/Kollias_The_6th_Affective_Behavior_Analysis_In-the-wild_ABAW_Competition_CVPRW_2024_paper.html) !
- *2024.03*: &nbsp; 🎉 One conference paper accepted at [**IEEE FG 2024**](https://ieeexplore.ieee.org/document/10582033) !
- *2024.01*: &nbsp; 👨‍💻 Served as **Program Chair, Session Chair** & **Data Chair** of the _6th ABAW Workshop and Competition_ at
  **[IEEE CVPR 2024](https://affective-behavior-analysis-in-the-wild.github.io/6th/)** !

# 📝 Selected Publications

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
        <span>{{ pub.venue }}</span>
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
      <strong>🏅 Best Reviewed Paper</strong> | IEEE FG 2024
      <em>Bridging the Gap: Protocol Towards Fair and Consistent Affect Analysis.</em>
    </li>
    <li>
      <strong>💰 Innovative Leading Talents Scholarship </strong> | 2023
      <em>Fully-funded one-year overseas research visit.</em>
    </li>
    <li><strong>💰 Academic Scholarship</strong> | 2023 | Xi’an Jiaotong University</li>
    <li><strong>🎖️ Outstanding Student Leader</strong> | 2023 | Xi’an Jiaotong University</li>
    <li><strong>🎖️ Outstanding Student</strong> | 2022 | Xi’an Jiaotong University</li>
    <li>
      <div class="anchor-offset" id="nerf"></div>
      <strong>🏆 Second Prize</strong> | 2022 | China National Radio and Television Administration
      <em>Artificial Intelligence Application Innovation Competition</em>
      <span class="award-project">Local Language IP Broadcasting Integration Platform Based on NeRF.</span>
    </li>
    <li>
      <strong>🏆 Excellence Award</strong> ``| 2022 | China National Radio and Television Administration
      <em>New Video Technology Application Innovation Competition</em>
      <span class="award-project">Intelligent Media Activation System for Video Scenarios in the Petrochemical Industry.</span>
    </li>
    <li><strong>💰 National Encouragement Scholarship</strong> | 2016 | China Ministry of Education (MoE)</li>
  </ul>
</section>

# 📝 Patents

<div class="publication-card">
  <div class="pub-title">
    <div class="pub-index">1.</div>
    <div>
      <a>A Facial Expression Recognition Method Based on Local Temporal-Spatial Features and Global Temporal Sequence Features.</a>
    </div>
  </div>
  <div class="pub-venue">CN202110925608.5</div>
</div>

<div class="publication-card">
  <div class="pub-title">
    <div class="pub-index">2.</div>
    <div>
      <a>A Video Emotion Recognition Method Based on Body Posture Change Representation.</a>
    </div>
  </div>
  <div class="pub-venue">CN202110926712.6</div>
</div>

<div class="publication-card">
  <div class="pub-title">
    <div class="pub-index">3.</div>
    <div>
      <a>A Depression Recognition Method Based on Voice and Facial Emotion Cues.</a>
    </div>
  </div>
  <div class="pub-venue">CN202110874297.4</div>
</div>

<div class="publication-card">
  <div class="pub-title">
    <div class="pub-index">4.</div>
    <div>
      <a>A speaker face synthesis method, device and apparatus based on generative adversarial networks.</a>
    </div>
  </div>
  <div class="pub-venue">CN202211493192.5</div>
</div>

<div class="publication-card">
  <div class="pub-title">
    <div class="pub-index">5.</div>
    <div>
      <a>An Occluded Face Recognition Method Based on Multi-Scale Attention Feature Learning, Device and Equipment.</a>
    </div>
  </div>
  <div class="pub-venue">CN202211493911.3</div>
</div>

<div style="margin-bottom: 8rem"></div>
