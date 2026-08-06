(function () {
  "use strict";

  const storageKey = "python-basic-completed-lessons";
  const totalLessons = 14;

  function readCompleted() {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (_error) {
      return [];
    }
  }

  function writeCompleted(values) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(values));
    } catch (_error) {
      // Progress remains optional when browser storage is unavailable.
    }
  }

  function normalPath(value) {
    const url = new URL(value, window.location.origin);
    return url.pathname.replace(/\/+$/, "/");
  }

  function updateProgress() {
    const completed = readCompleted();
    const count = document.querySelector("#course-progress-count");
    const bar = document.querySelector("#course-progress-value");

    if (count) count.textContent = `${completed.length} / ${totalLessons}`;
    if (bar) bar.style.width = `${(completed.length / totalLessons) * 100}%`;

    document.querySelectorAll(".nav-list-link").forEach((link) => {
      link.classList.toggle("course-complete", completed.includes(normalPath(link.href)));
    });

    const lesson = document.querySelector("[data-course-lesson]");
    const button = document.querySelector(".lesson-complete-button");
    if (!lesson || !button) return;

    const lessonPath = normalPath(lesson.dataset.courseLesson);
    const isComplete = completed.includes(lessonPath);
    button.classList.toggle("is-complete", isComplete);
    button.setAttribute("aria-pressed", String(isComplete));
    const label = button.querySelector(".lesson-complete-label");
    if (label) label.textContent = isComplete ? "Completed" : "Mark complete";
  }

  function setupCompletion() {
    const lesson = document.querySelector("[data-course-lesson]");
    const button = document.querySelector(".lesson-complete-button");
    if (!lesson || !button) return;

    button.addEventListener("click", () => {
      const path = normalPath(lesson.dataset.courseLesson);
      const completed = readCompleted();
      const position = completed.indexOf(path);
      if (position >= 0) completed.splice(position, 1);
      else completed.push(path);
      writeCompleted(completed);
      updateProgress();
    });
  }

  function classifyDetails() {
    document.querySelectorAll(".main-content details").forEach((details) => {
      const summary = details.querySelector(":scope > summary");
      const label = summary ? summary.textContent.toLowerCase() : "";
      details.classList.toggle("solution-box", label.includes("solution") || label.includes("fix"));
      details.classList.toggle("deep-box", label.includes("deeper") || label.includes("optional"));
    });
  }

  function setupReadingProgress() {
    const track = document.createElement("div");
    track.className = "reading-progress-track";
    track.setAttribute("aria-hidden", "true");
    track.innerHTML = "<span></span>";
    document.body.prepend(track);
    const bar = track.firstElementChild;

    function update() {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
      bar.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  function placeLessonNavigation() {
    const navigation = document.querySelector(".lesson-page-navigation");
    const lesson = document.querySelector(".main-content main");
    if (navigation && lesson) lesson.append(navigation);
  }

  document.addEventListener("DOMContentLoaded", () => {
    classifyDetails();
    placeLessonNavigation();
    setupCompletion();
    setupReadingProgress();
    updateProgress();
  });
}());
