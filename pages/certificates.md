---
layout: default
title: Certificate
weight: 3
permalink: /certificates/
---

<div class="container mt-5">
  <div class="row g-4 px-3">
    {% for project in site.data.certificates %}
      <div class="col-md-4 mb-4 wow animated fadeIn" data-wow-delay=".15s">
        <a href="{{ project.external_url }}" class="project card text-themed h-100" target="_blank">
          <img id="{{ project.name | slugify }}-img" class="card-img-top" src="{{ project.image }}" alt="{{ project.name }}" />
          <div class="card-body">
            <h5 id="{{ project.name | slugify }}-name" class="card-title">{{ project.name }}</h5>
            <p id="{{ project.name | slugify }}-desc" class="card-text">{{ project.provider }}<br>{{ project.date }}</p>
            <p id="{{ project.name | slugify }}-tools" class="card-text">
              ID Credential: {{ project.credential }}
            </p>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
