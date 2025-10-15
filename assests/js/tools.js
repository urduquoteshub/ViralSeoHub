// === YouTube SEO Optimizer ===
function optimizeYouTubeTitle(input) {
  if (!input) return "";
  let base = input.trim();
  // Simple example: capitalize & add trending keyword
  return base.charAt(0).toUpperCase() + base.slice(1) + " | Viral SEO Boost 2025";
}

// === Hashtag Generator (Dummy Demo) ===
function generateHashtags(text) {
  if (!text) return "";
  let words = text.split(" ").slice(0, 5);
  return words.map(w => "#" + w.replace(/[^\w]/g, '')).join(" ");
}

// === Keyword Finder (Dummy Demo) ===
function findKeywords(seed) {
  if (!seed) return [];
  return [
    seed + " tips",
    seed + " 2025",
    "best " + seed,
    seed + " tutorial",
    seed + " SEO"
  ];
}
