(function () {
  const content = document.querySelector("#content");
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file") || "README.md";

  function isSafePath(path) {
    return path && !path.includes("..") && path.endsWith((".md"));
  }

  function linkToSitePath(href, currentFile) {
    if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("?")) return href;
    const clean = href.split("#")[0];
    if (!clean.endsWith(".md")) return href;
    const currentParts = currentFile.split("/");
    currentParts.pop();
    const result = [];
    for (const part of (currentParts.concat(clean.split("/")))) {
      if (!part || part === ".") continue;
      if (part === "..") result.pop(); else result.push(part);
    }
    const target = result.join("/");
    return isSafePath(target) ? `?file=${encodeURIComponent(target)}` : href;
  }

  function rewriteLinks(currentFile) {
    content.querySelectorAll("a[href]").forEach((anchor) => {
      anchor.setAttribute("href", linkToSitePath(anchor.getAttribute("href"), currentFile));
    });
  }

  async function loadPage(path) {
    if (!isSafePath(path) && path !== "README.md") {
      content.innerHTML = "<h1>Page not found</h1><p>Choose a chapter from the menu.</p>";
      return;
    }
    content.innerHTML = '<div class="loading">Loading...</div>';
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error("Page could not be loaded");
      const markdown = await response.text();
      content.innerHTML = marked.parse(markdown);
      rewriteLinks(path);
      content.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      content.innerHTML = `<h1>We could not open this lesson</h1><p>${error.message}</p><p>Use the chapter menu to try again.</p>`;
    }
  }

  document.addEventListener("click", (event) => {
    const anchor = event.target.closest("a[href^='?file=']");
    if (!anchor) return;
    event.preventDefault();
    const next = new URL(anchor.href).searchParams.get("file");
    history.pushState({ file: next }, "", `?file=${encodeURIComponent(next)}`);
    loadPage(next);
  });

  window.addEventListener("popstate", () => {
    loadPage(new URLSearchParams(window.location.search).get("file") || "README.md");
  });

  loadPage(file);
}());
