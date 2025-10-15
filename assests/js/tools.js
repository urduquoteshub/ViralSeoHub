// Simple front-end tools (no external API) — works offline in browser

function copyToClipboard(text){
  navigator.clipboard?.writeText(text).catch(()=>{
    const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
  });
}

// YouTube tool
if(document.getElementById('analyze-yt')){
  document.getElementById('analyze-yt').addEventListener('click',()=>{
    const title = document.getElementById('yt-title').value.trim();
    const desc = document.getElementById('yt-description').value.trim();
    const sug = document.getElementById('yt-suggestions');
    sug.innerHTML='';
    if(!title){document.getElementById('title-feedback').textContent='Please add a title';return}
    // Title length suggestions
    const tlen = title.length; document.getElementById('title-feedback').textContent = `Length: ${tlen} chars`;
    if(tlen<40) sug.innerHTML += '<p>Add more descriptive keywords to reach 40+ chars.</p>';
    if(tlen>100) sug.innerHTML += '<p>Title is long; try to keep it under 100 chars for best results.</p>';
    // Extract keywords simple
    const words = title.toLowerCase().split(/\W+/).filter(Boolean);
    const top = words.slice(0,6).join(', ');
    sug.innerHTML += `<p><strong>Suggested keywords:</strong> ${top}</p>`;
    if(desc.length<100) document.getElementById('desc-feedback').textContent = 'Description is short — add 1-2 keyword-rich paragraphs.'; else document.getElementById('desc-feedback').textContent='';
  });
  document.getElementById('copy-yt').addEventListener('click',()=>{
    const title = document.getElementById('yt-title').value.trim();
    const desc = document.getElementById('yt-description').value.trim();
    copyToClipboard(`${title}\n\n${desc}`);
    alert('Copied optimized title + description');
  });
}

// Hashtag generator
if(document.getElementById('generate-tags')){
  document.getElementById('generate-tags').addEventListener('click',()=>{
    const seed = document.getElementById('hashtag-seed').value.trim().toLowerCase();
    const out = document.getElementById('tags-output'); out.innerHTML='';
    if(!seed){out.textContent='Enter a keyword';return}
    const parts = seed.split(/\s+/).slice(0,3);
    const tags = [];
    parts.forEach(p=>{tags.push(`#${p.replace(/[^a-z0-9]/g,'')}`); tags.push(`#${p}tips`);});
    tags.push(`#${parts.join('')}`, `#${parts[0]}101`);
    out.textContent = tags.slice(0,12).join(' ');
  });
  document.getElementById('copy-tags').addEventListener('click',()=>{
    const text = document.getElementById('tags-output').textContent; if(!text) return; copyToClipboard(text); alert('Hashtags copied');
  });
}

// Keyword finder
if(document.getElementById('find-keywords')){
  document.getElementById('find-keywords').addEventListener('click',()=>{
    const seed = document.getElementById('keyword-seed').value.trim().toLowerCase();
    const list = document.getElementById('keyword-list'); list.innerHTML='';
    if(!seed){list.innerHTML='<li>Please enter a keyword</li>';return}
    const base = seed.split(/\s+/).slice(0,3);
    const suggestions = [seed, base.join(' tips'), base.join(' ideas'), base.join(' tutorial'), `best ${seed}`];
    suggestions.forEach(s=>{const li=document.createElement('li');li.textContent=s;list.appendChild(li)});
  });
  document.getElementById('copy-keywords').addEventListener('click',()=>{
    const items = Array.from(document.querySelectorAll('#keyword-list li')).map(li=>li.textContent).join(', ');
    if(items) {copyToClipboard(items); alert('Keywords copied');}
  });
}

// Meta tags generator
if(document.getElementById('generate-meta')){
  document.getElementById('generate-meta').addEventListener('click',()=>{
    const topic = document.getElementById('meta-topic').value.trim();
    if(!topic) return;
    const title = `${topic} — Tips & Guide | ViralSEOHub`;
    const desc = `Learn how to ${topic.toLowerCase()} with simple steps, tips, and SEO advice to reach more viewers.`;
    document.getElementById('meta-title').textContent = title;
    document.getElementById('meta-desc').textContent = desc;
  });
  document.getElementById('copy-meta').addEventListener('click',()=>{
    const t = document.getElementById('meta-title').textContent; const d = document.getElementById('meta-desc').textContent; if(!t && !d) return; copyToClipboard(`${t}\n\n${d}`); alert('Meta copied');
  });
}
