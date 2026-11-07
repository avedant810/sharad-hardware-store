const catalogue = {
"Locks, Handles & Hinges (ताले, हैंडल और कब्ज़े)": [
  "Door locks (दरवाज़े के ताले)", "Door handles (दरवाज़े के हैंडल)", "Hinges (कब्ज़े)", "Metal doors (लोहे के दरवाज़े)", "Metal windows (लोहे की खिड़कियाँ)", "Door fittings and accessories (दरवाज़े की फिटिंग और सामान)"
],
"Paints & Painting Supplies (पेंट और पेंटिंग का सामान)": [
  "Paint (पेंट)", "Distemper (डिस्टेंपर)", "Paint brushes (पेंट ब्रश)", "Brushes (ब्रश)", "Roller sleeves (पेंट रोलर कवर)", "Paint trays (पेंट ट्रे)", "Masking tape (मास्किंग टेप)", "Sandpaper rolls (रेगमाल रोल)", "Paint thinner (पेंट थिनर)", "Touchwood wood finish (लकड़ी की टचवुड पॉलिश)"
],
"Adhesives & Chemicals (चिपकाने वाले पदार्थ और केमिकल)": [
  "Fevicol (फेविकोल)", "Wood glue (लकड़ी का गोंद)", "Multi-purpose grease (बहुउपयोगी ग्रीस)", "Sealants (सीलेंट)", "Acid (एसिड)"
],
"Nuts, Bolts & Fasteners (नट, बोल्ट और फास्टनर)": [
  "Nails (कीलें)", "Nuts and bolts (नट और बोल्ट)", "Screws (पेच)"
],
"Hand Tools & Measuring (हाथ के औज़ार और मापने के उपकरण)": [
  "Hammer (हथौड़ा)", "Wood saw (लकड़ी काटने की आरी)", "Mattock / Pickaxe (गैंती / कुदाल)", "Shovel / Spade (फावड़ा)", "Tape measures (मापने का फीता)", "Spirit levels (स्पिरिट लेवल)", "Try squares (ट्राई स्क्वायर / समकोण मापक)", "Calipers (कैलिपर)"
],
"Construction & General Materials (निर्माण और अन्य सामग्री)": [
  "Ropes (रस्सियाँ)", "Metal wire (लोहे का तार)", "Metal net (लोहे की जाली)", "Plastic net (प्लास्टिक की जाली)", "Tarpaulin / Tripal (तिरपाल)", "Plastic polythene (प्लास्टिक पॉलिथीन)", "Webbing tape / Nivar (निवार पट्टी)", "Plywood (प्लाईवुड)", "Bullock cart metal wheel (बैलगाड़ी का लोहे का पहिया)"
],
"Water Storage & Containers (पानी की टंकियाँ और कंटेनर)": [
  "Pipes (पाइप)", "Water tank (पानी की टंकी)", "Plastic drum (प्लास्टिक ड्रम)", "Plastic buckets (प्लास्टिक की बाल्टियाँ)", "Metal buckets (धातु की बाल्टियाँ)"
],
"Cleaning Supplies (सफाई का सामान)": [
  "Broom (झाड़ू)", "Toilet brush (टॉयलेट ब्रश)", "Cleaning brushes (सफाई के ब्रश)"
],
"Bathroom & Kitchen Accessories (बाथरूम और रसोई के सामान)": [
  "Bathroom accessories (बाथरूम का सामान)", "Kitchen accessories (रसोई का सामान)"
],
"Electrical Accessories (इलेक्ट्रिकल सामान)": [
  "LED bulbs (एलईडी बल्ब)", "Bulb holders and sockets (बल्ब होल्डर और सॉकेट)", "Floodlights (फ्लडलाइट)", "Switches (स्विच)", "Wall sockets (दीवार के सॉकेट)", "MCBs / Miniature Circuit Breakers (मिनीएचर सर्किट ब्रेकर)", "Distribution boards (डिस्ट्रिब्यूशन बोर्ड)", "Fuse boxes (फ्यूज़ बॉक्स)", "Extension cords (एक्सटेंशन वायर)", "Power strips (मल्टी-प्लग बोर्ड)"
],
"Cutting & Power Equipment (कटिंग और पावर उपकरण)": [
  "Angle grinders (एंगल ग्राइंडर)", "Jigsaws (जिगसॉ मशीन)", "Circular saws (सर्कुलर सॉ मशीन)", "Reciprocating saws (रेसिप्रोकेटिंग सॉ)", "Saw blades (आरी के ब्लेड)"
],
"Household & Other Products (घरेलू और अन्य सामान)": [
  "Cooking stove (चूल्हा)", "Electric weighing machine (इलेक्ट्रॉनिक तौल मशीन)", "Non-electric weighing machine (बिना बिजली वाली तौल मशीन)", "Well-related items (कुएँ के सामान)"
],
"Safety Equipment (सुरक्षा उपकरण)": [
  "Safety goggles (सुरक्षा चश्मा)", "Heavy-duty work gloves (मज़बूत काम वाले दस्ताने)", "Dust masks (धूल से बचाव वाले मास्क)", "Hard hats (सुरक्षा हेलमेट)"
]
};
const directory = document.getElementById("productDirectory");
const search = document.getElementById("productSearch");
const filter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const clearFilters = document.getElementById("clearFilters");
const categoryNames = Object.keys(catalogue);
filter.innerHTML += categoryNames.map(name => `<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`).join("");
const params = new URLSearchParams(window.location.search);
const requestedCategory = params.get("category");
if (requestedCategory && categoryNames.includes(requestedCategory)) filter.value = requestedCategory;
function escapeHTML(value) { return String(value).replace(/[&<>\"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;","'":"&#039;"}[char])); }
function waUrl(product) {
  const message = `Namaste, Sharad Hardware Store. Mujhe ${product} ke baare mein jaankari chahiye. Kripya availability aur price batayein. / Hello, I would like to enquire about ${product}. Please share availability and price.`;
  return `https://wa.me/918817792450?text=${encodeURIComponent(message)}`;
}
function productImage(product, category) {
  const p = product.toLowerCase();
  const exact = [
    [/\b(nut|nuts and bolts)\b/, "nut.jpg"], [/\bbolt\b/, "bolt.jpg"], [/washer/, "washer.jpg"], [/nails?/, "nails.jpg"], [/screws?/, "screws.jpg"], [/hammer/, "hammer.jpg"], [/wrench/, "wrench.jpg"], [/screwdriver/, "screwdriver.jpg"],
    [/tape measures?/, "measuring-tape.jpg"], [/spirit levels?/, "spirit-level.jpg"], [/try squares?/, "adjustable-wrench.jpg"], [/calipers?/, "measuring-tape.jpg"], [/wood saw|handsaw/, "wood-saw.jpg"], [/pliers/, "pliers.jpg"], [/utility knife/, "utility-knife.jpg"], [/mattock|pickaxe|shovel|spade/, "wood-saw.jpg"]
  ];
  for (const [pattern, file] of exact) if (pattern.test(p)) return `assets/products/${file}`;
  const categoryImage = {
    "Locks, Handles & Hinges (ताले, हैंडल और कब्ज़े)":"locks.jpg",
    "Paints & Painting Supplies (पेंट और पेंटिंग का सामान)":"paint.jpg",
    "Adhesives & Chemicals (चिपकाने वाले पदार्थ और केमिकल)":"adhesives.jpg",
    "Nuts, Bolts & Fasteners (नट, बोल्ट और फास्टनर)":"fasteners.jpg",
    "Hand Tools & Measuring (हाथ के औज़ार और मापने के उपकरण)":"hand-tools.jpg",
    "Construction & General Materials (निर्माण और अन्य सामग्री)":"construction.jpg",
    "Water Storage & Containers (पानी की टंकियाँ और कंटेनर)":"water-storage.jpg",
    "Cleaning Supplies (सफाई का सामान)":"cleaning.jpg",
    "Bathroom & Kitchen Accessories (बाथरूम और रसोई के सामान)":"cleaning.jpg",
    "Electrical Accessories (इलेक्ट्रिकल सामान)":"electrical.jpg",
    "Cutting & Power Equipment (कटिंग और पावर उपकरण)":"hand-tools.jpg",
    "Household & Other Products (घरेलू और अन्य सामान)":"household.jpg",
    "Safety Equipment (सुरक्षा उपकरण)":"safety.jpg"
  };
  return `assets/categories/${categoryImage[category] || "hand-tools.jpg"}`;
}
function renderDirectory() {
  const term = search.value.trim().toLowerCase();
  const selected = filter.value;
  let total = 0;
  const sections = categoryNames.filter(category => selected === "all" || selected === category).map(category => {
    const matches = catalogue[category].filter(product => product.toLowerCase().includes(term) || category.toLowerCase().includes(term));
    if (!matches.length) return "";
    total += matches.length;
    const rows = matches.map(product => `<li class="product-row"><span class="product-title-wrap"><span class="product-name">${escapeHTML(product)}</span><img class="product-thumb" src="${productImage(product, category)}" alt="${escapeHTML(product)}" loading="lazy"></span><a class="product-enquiry" href="${waUrl(product)}" target="_blank" rel="noopener">Ask on WhatsApp (WhatsApp पर पूछें) <span>↗</span></a></li>`).join("");
    return `<section class="directory-group"><div class="directory-group-heading"><h2>${escapeHTML(category)}</h2><span>${matches.length} ${matches.length === 1 ? "item (सामान)" : "items (सामान)"}</span></div><ul>${rows}</ul></section>`;
  }).join("");
  directory.innerHTML = sections || `<div class="empty-state">No matching products found (कोई मिलता-जुलता उत्पाद नहीं मिला). Try another keyword or contact us on WhatsApp (दूसरा नाम खोजें या WhatsApp करें).</div>`;
  resultCount.textContent = `${total} products (उत्पाद)`;
}
search.addEventListener("input", renderDirectory);
filter.addEventListener("change", renderDirectory);
clearFilters.addEventListener("click", () => { search.value = ""; filter.value = "all"; renderDirectory(); });
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => { const open = mainNav.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(open)); });
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));
renderDirectory();
