(function () {
  const d = window.SITE_DATA;
  if (!d) return;

  const $ = (id) => document.getElementById(id);
  const linkList = (links) => links.map(
    (l) => `<li>[<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>]</li>`
  ).join("");
  const personLine = (p) => {
    const nameHtml = p.website ? `<a href="${p.website}" target="_blank" rel="noopener">${p.name}</a>` : p.name;
    const details = [p.role, p.affiliation, p.note].filter(Boolean).join(", ");
    return `<li><strong>${nameHtml}</strong>${details ? ", " + details : ""}</li>`;
  };

  // ---- hero ----
  $("hero-role-eyebrow").textContent = d.person.role;
  $("hero-name").textContent = d.person.name;
  $("hero-location").textContent = `${d.person.team} · ${d.person.location}`;
  $("hero-thesis").textContent = d.person.thesis;
  $("hero-links").innerHTML = linkList(d.person.links);
  if (d.person.photo) $("hero-photo").src = d.person.photo;
  $("hero-email-link").textContent = d.person.email;
  $("hero-email-link").href = `mailto:${d.person.email}`;

  // ---- about ----
  $("about-text").textContent = d.person.about;

  // ---- projects ----
  $("projects-list").innerHTML = d.projects.map((p) => `
    <div class="project">
      <p class="project-title">${p.title}</p>
      <p class="project-period">${p.period}${p.role ? " · " + p.role : ""}</p>
      <p class="project-desc">${p.description}${p.link ? ` (<a href="${p.link}" target="_blank" rel="noopener">details</a>)` : ""}</p>
    </div>
  `).join("");

  // ---- job openings ----
  $("jobs-note").textContent = d.jobOpenings.note;
  if (d.jobOpenings.openings.length) {
    $("jobs-list").innerHTML = d.jobOpenings.openings.map((j) => `
      <div class="project">
        <p class="project-title">${j.title}</p>
        <p class="project-period">${j.status}</p>
        <p class="project-desc">${j.description}${j.link ? ` (<a href="${j.link}" target="_blank" rel="noopener">details</a>)` : ""}</p>
      </div>
    `).join("");
  }

  // ---- publications ----
  $("pub-list").innerHTML = d.publications.map((p) => {
    const linkParts = [];
    if (p.pdf) linkParts.push(`<a href="${p.pdf}" target="_blank" rel="noopener">PDF</a>`);
    if (p.link) linkParts.push(`<a href="${p.link}" target="_blank" rel="noopener">project</a>`);
    const linksHtml = linkParts.length
      ? `<p class="pub-links">${linkParts.map((l) => `[${l}]`).join(" ")}</p>`
      : "";
    const tagsHtml = (p.tags && p.tags.length)
      ? `<p class="pub-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</p>`
      : "";
    return `
      <div class="pub">
        <span class="pub-year">${p.year}</span>
        <div class="pub-body">
          ${p.thumbnail ? `<img class="pub-thumb" src="${p.thumbnail}" alt="" loading="lazy">` : `<div class="pub-thumb pub-thumb-empty"></div>`}
          <div class="pub-text">
            <p class="pub-title"><em>${p.title}</em></p>
            <p class="pub-meta">${p.authors}, <strong>${p.venue}</strong></p>
            ${linksHtml}
            ${tagsHtml}
          </div>
        </div>
      </div>
    `;
  }).join("");
  const scholar = d.person.links.find((l) => l.label.toLowerCase().includes("scholar"));
  if (scholar) {
    $("pub-more").innerHTML = `Full list on <a href="${scholar.url}" target="_blank" rel="noopener">Google Scholar</a>.`;
  }

  // ---- news ----
  $("news-list").innerHTML = d.news.map((n) => `
    <div class="news-item">
      <span class="news-date">${n.date}</span>
      <p>${n.text}</p>
    </div>
  `).join("");

  // ---- people ----
  $("people-current").innerHTML = d.peopleCurrent.map(personLine).join("");
  $("people-alumni").innerHTML = d.peopleAlumni.map(personLine).join("");
  $("people-collaborators").innerHTML = d.peopleCollaborators.map(personLine).join("");

  // ---- bio timeline ----
  $("timeline-list").innerHTML = d.timeline.map((t) => `
    <li>
      <span class="years">${t.years}</span>
      <span><span class="role">${t.role}</span><br><span class="place">${t.place}</span></span>
    </li>
  `).join("");

  $("build-year").textContent = new Date().getFullYear();
})();
