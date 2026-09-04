(function () {
  const yearSelect = document.getElementById("year-select");
  const content = document.getElementById("course-content");

  const years = Object.keys(COURSE_DATA)
    .map(Number)
    .sort((a, b) => b - a);

  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }

  function render(year) {
    const data = COURSE_DATA[year];
    if (!data) {
      content.innerHTML = "<p>No data available for this year.</p>";
      return;
    }

    const outcomesHtml = data.outcomes.map((o) => `<li>${escapeHtml(o)}</li>`).join("");

    const scheduleHtml = data.schedule
      .map((row) => {
        const parsed = new Date(`${row.date}T00:00:00`);
        const label = isNaN(parsed)
          ? row.date
          : parsed.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
        const links = [
          row.pdf ? `<a class="mat-link" href="${escapeAttr(row.pdf)}" target="_blank" rel="noopener">Slides (PDF)</a>` : "",
          row.handson ? `<a class="mat-link" href="${escapeAttr(row.handson)}" target="_blank" rel="noopener">Hands-on</a>` : ""
        ].join("");
        return `
        <tr${row.holiday ? ' class="holiday-row"' : ""}>
          <td class="week-cell">${escapeHtml(label)}</td>
          <td>
            <div class="topic">${escapeHtml(row.topic)}</div>
            ${row.detail ? `<div class="detail">${escapeHtml(row.detail)}</div>` : ""}
            ${links ? `<div class="mat-links">${links}</div>` : ""}
          </td>
        </tr>`;
      })
      .join("");

    const breakdownHtml = data.assessment.breakdown
      .map((b) => `<li><span>${escapeHtml(b.label)}</span><strong>${escapeHtml(b.weight)}</strong></li>`)
      .join("");

    const gradingHtml = data.assessment.grading
      .map((g) => `<li><span>${escapeHtml(g.range)}</span><strong>${escapeHtml(g.grade)}</strong></li>`)
      .join("");

    const textbooksHtml = data.textbooks.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    const specialtiesHtml = data.specialties.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join("");

    content.innerHTML = `
      <section class="meta-grid">
        <div class="meta-card"><span class="meta-label">Term</span><span class="meta-value">${escapeHtml(data.term)}</span></div>
        <div class="meta-card"><span class="meta-label">Credits</span><span class="meta-value">${escapeHtml(String(data.credits))}</span></div>
        <div class="meta-card"><span class="meta-label">Course Type</span><span class="meta-value">${escapeHtml(data.courseType)}</span></div>
        <div class="meta-card"><span class="meta-label">Instructor</span><span class="meta-value">${escapeHtml(data.instructor)}</span></div>
        <div class="meta-card"><span class="meta-label">Class Days</span><span class="meta-value">${escapeHtml(data.meetingDays)}</span></div>
        <div class="meta-card"><span class="meta-label">First Class</span><span class="meta-value">${escapeHtml(data.firstClass)}</span></div>
      </section>

      <section class="card">
        <h2>Course Aim</h2>
        <p>${escapeHtml(data.aim)}</p>
      </section>

      <section class="card">
        <h2>Student Learning Outcomes</h2>
        <p>Successful students will be able to:</p>
        <ul class="bullet-list">${outcomesHtml}</ul>
      </section>

      <section class="card">
        <h2>Course Description</h2>
        <p>${escapeHtml(data.description)}</p>
      </section>

      <section class="card">
        <h2>Weekly Schedule</h2>
        ${data.scheduleNote ? `<p class="schedule-note">${escapeHtml(data.scheduleNote)}</p>` : ""}
        <table class="schedule-table">
          <thead><tr><th>Date</th><th>Topic</th></tr></thead>
          <tbody>${scheduleHtml}</tbody>
        </table>
      </section>

      <section class="card two-col">
        <div>
          <h2>Assessment</h2>
          <ul class="kv-list">${breakdownHtml}</ul>
        </div>
        <div>
          <h2>Grading Scale</h2>
          <ul class="kv-list">${gradingHtml}</ul>
        </div>
      </section>

      <section class="card">
        <h2>Prerequisites</h2>
        <p>${escapeHtml(data.prerequisites)}</p>
      </section>

      <section class="card">
        <h2>Primary Textbooks</h2>
        <ul class="bullet-list">${textbooksHtml}</ul>
      </section>

      <section class="card">
        <h2>Research Specialties</h2>
        <div class="pill-row">${specialtiesHtml}</div>
      </section>
    `;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedYear = Number(params.get("year"));
  const initialYear = COURSE_DATA[requestedYear] ? requestedYear : DEFAULT_YEAR;

  yearSelect.value = String(initialYear);
  render(initialYear);

  yearSelect.addEventListener("change", (e) => {
    const year = Number(e.target.value);
    render(year);
    const url = new URL(window.location);
    url.searchParams.set("year", year);
    window.history.replaceState({}, "", url);
  });
})();
