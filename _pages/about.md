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

I am a **final-year Ph.D. candidate** at _Xi’an Jiaotong University_, supervised by Prof. [Xinyu Yang](https://gr.xjtu.edu.cn/web/xyyang). From 2023 to 2024, I was a **visiting researcher** at _Queen
Mary University of London_, under the supervision of Prof. [Dimitrios Kollias](https://sites.google.com/view/dimitrioskollias).

<span style="color: #ea1c25; font-weight: bold;">🔥 I’m currently open to industry and postdoctoral opportunities starting in 2025/2026 — feel free to reach out!</span>

# 🎯 Research Interests

<p>
  My research centers on human affective behavior 
  <span class="research-highlight">understanding and generation</span>, 
  <span class="research-highlight">trustworthy AI</span>, and 
  <span class="research-highlight">multimodal and multi-task learning</span>, 
  with the goal of enabling 
  <span class="research-highlight">interpretable, fair, and robust</span> systems for human-centered interaction.
</p>

<section class="research-grid">
  <div class="grid-container">
    <div class="grid-item">
      <h3>Affective Analysis</h3>
      <div class="section-block">
          <h4>Facial & Body Behavior</h4>
          <ul>
            <li>Expressions Recognition</li>
            <li>Action-Unit (AU) Detection</li>
            <li>Valence-Arousal (VA) Estimation</li>
            <li>Gesture & Pose Analysis</li>
          </ul>
          <p class="reference-list">Featured Works:
            {% assign target_ids1 = "cognitive-priors-multitask,unified-affective-mtl,emotions-to-violence-abaw9,beyond-prompts-vega,abaw8-workshop,abaw7-competition,abaw6-competition,avda-feature-fusion" | split: "," %}
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
        <h4>Multi-Task Modeling</h4>
        <ul>
          <li>Unified Affective Analysis Framework</li>
          <li>Shared representation learning & task-specific adaptation</li>
        </ul>
        <p class="reference-list">Featured Works:
          {% assign target_ids2 = "beyond-prompts-vega,cognitive-priors-multitask,abaw7-competition" | split: "," %}
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
    <div class="grid-item">
      <h3>Trustworthy AI</h3>
      <div class="section-block">
        <h4>Fairness & Consistent</h4>
        <ul>
          <li>Fair & Consistent Analysis</li>
          <li>Domain-Generalized & Bias-Resilient Modeling</li>
          <li>Fairness in Continuous Tasks</li>
        </ul>
        <p  class="reference-list">Featured Works:
          {% assign target_ids1 = "fair-domain-generalization,fairness-protocol-tbiom,demographically-aware-benchmark,bridging-fair-affect,recruitment" | split: "," %}
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
        <h4>Causal & Explainability</h4>
        <ul>
          <li>Counterfactual Reasoning</li>
          <li>Causal Discovery</li>
          <li>Interpretable Affective Modeling</li>
        </ul>
        <p   class="reference-list">Featured Works: [under review]
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
    <div class="grid-item">
      <h3>Multimodal Learning</h3>
      <div class="section-block">
        <h4>VLMS</h4>
        <ul>
          <li>Representation Learning</li>
          <li>Prompt Learning</li>
          <li>Visual-Language Alignment</li>
        </ul>
        <p class="reference-list">Featured Works:
          {% assign target_ids1 = "cognitive-priors-multitask,beyond-prompts-vega,grounding-emotion-recognition,unified-affective-mtl" | split: "," %}
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
        <h4>Multimodal Fusion & Alignment</h4>
        <ul>
          <li>Audio, Visual & Language</li>
          <li>Prototype-based multimodal representation learning</li>
          <li>Body–Facial Behavior Fusion</li>
        </ul>
        <p  class="reference-list">Featured Works:
          {% assign target_ids2 = "grounding-emotion-recognition,emotions-to-violence-abaw9,abaw8-workshop,video-emotion-facial-body,msrf-graph-emotion,avda-feature-fusion" | split: "," %}
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
    <div class="grid-item">
      <h3>Behavior Generation</h3>
      <div class="section-block">
        <h4>Talking Head Generation</h4>
        <ul>
          <li>StyleGAN, Diffusion, NeRF</li>
          <li>Controllable Facial and Head Motion Transfer</li>
          <li>Multi-view and identity-preserving generation</li>
        </ul>
        <p  class="reference-list">Featured Works:
          <a href="#nerf">[Second Prize]</a>
        </p>
      </div>
      <div class="section-block">
        <h4>Reaction Generation</h4>
        <ul>
          <li>Generation of Facial Reactions to Stimuli</li>
          <li>Personalized and Affect-aware Response</li>
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
</section>

# ✨ News

- *2025.07*: &nbsp; 🎉 One conference paper accepted at **ACM MM 2025** !
- *2025.07*: &nbsp; 📢 Our work presented at
  the [BMVA Symposium on AI Security](https://www.bmva.org/meetings/25-07-16-AISecurity.html) !
- *2025.06*: &nbsp; 👨‍💻 Served as **Program Chair, Session Chair** & **Data Chair** of
  the _9th ABAW Workshop and Competition_ at **[ICCV 2025](https://affective-behavior-analysis-in-the-wild.github.io/9th/)** !
- *2025.04*: &nbsp; 🎉 One journal paper accepted
  by [**IEEE Transactions on Biometrics, Behavior, and Identity Science (TBIOM)**](https://ieeexplore.ieee.org/abstract/document/10919136) !
- *2025.01*: &nbsp; 👨‍💻 Served as **Program Chair, Session Chair** & **Data Chair** of
  the _8th ABAW Workshop and Competition_ at **[IEEE CVPR 2025](https://affective-behavior-analysis-in-the-wild.github.io/8th/index.html)** !
- *2024.08*: &nbsp; 🏆 Honored with the **Best Reviewed Paper Award** at **IEEE FG 2024** !
- *2024.08*: &nbsp; 🎉 One conference paper accepted at [**IEEE IJCB 2024**](https://ieeexplore.ieee.org/document/10744499) !
- *2024.08*: &nbsp; 🎉 Two workshop papers accepted at **ECCV 2024**
  [[1]](https://dl.acm.org/doi/10.1007/978-3-031-91581-9_3) [[2]](https://dl.acm.org/doi/10.1007/978-3-031-91581-9_1) !
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
      <strong>💰 Innovative Talents International Cooperative Training Project Scholarship</strong> | 2023
      <em>Fully-funded one-year overseas research visit.</em>
    </li>
    <li><strong>💰 Academic Scholarship</strong> | 2023 | Xi’an Jiaotong University</li>
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
    <li><strong>🎖️ Outstanding Student Cadre</strong> | 2022, 2023 | Xi’an Jiaotong University</li>
    <li><strong>🎖️ Outstanding Student</strong> | 2022, 2023 | Xi’an Jiaotong University</li>
    <li><strong>🎖️ Outstanding Student Scholarship</strong> | 2023 | Xi’an Jiaotong University</li>
    <li>
      <strong>🏆 Second Prize</strong> | 2021 | China National Radio and Television Administration
      <em>Artificial Intelligence Application Innovation Competition</em>
      <span class="award-project">Audio-Visual Content Editing AI Platform Based on “Silk Road Cloud”.</span>
    </li>
    <li>
      <strong>🏆 Second Prize</strong> | 2021 | China National Radio and Television Administration
      <em>New Video Technology Application Innovation Competition</em>
      <span class="award-project">Ultra-HD Program Intelligent Production Project Based on Multimodal Fusion.</span>
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
