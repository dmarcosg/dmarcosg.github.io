// Dark mode switch: remembers the visitor's choice.
(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  var root = document.documentElement;
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function label() { btn.textContent = isDark() ? "light mode" : "dark mode"; }
  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  label();
})();

// Filter by research direction (Projects and Publications pages).
// A link like /publications/#biodiversity opens the page with that filter selected.
(function () {
  var bar = document.querySelector("[data-filter]");
  if (!bar) return;
  var items = document.querySelectorAll("[data-labels]");
  var groups = document.querySelectorAll(".filter-group");
  function apply(label) {
    var found = false;
    bar.querySelectorAll("button").forEach(function (b) {
      var on = b.getAttribute("data-label") === label;
      if (on) found = true;
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (!found) { label = ""; bar.querySelector('button[data-label=""]').setAttribute("aria-pressed", "true"); }
    items.forEach(function (it) {
      var labels = it.getAttribute("data-labels").split("|");
      it.hidden = !(label === "" || labels.indexOf(label) !== -1);
    });
    groups.forEach(function (g) { g.hidden = g.querySelectorAll("[data-labels]:not([hidden])").length === 0; });
  }
  bar.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var label = b.getAttribute("data-label");
    apply(label);
    history.replaceState(null, "", label ? "#" + label : location.pathname);
  });
  apply(decodeURIComponent(location.hash.slice(1)));
})();
