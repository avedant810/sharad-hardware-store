const categories = [
  ["Locks, Handles & Hinges (ताले, हैंडल और कब्ज़े)","Locks, handles, hinges and door fittings (ताले, हैंडल, कब्ज़े और दरवाज़े की फिटिंग)","locks.jpg"],
  ["Paints & Painting Supplies (पेंट और पेंटिंग का सामान)","Paint, distemper, brushes and rollers (पेंट, डिस्टेंपर, ब्रश और रोलर)","paint.jpg"],
  ["Adhesives & Chemicals (चिपकाने वाले पदार्थ और केमिकल)","Fevicol, glue, grease and sealants (फेविकोल, गोंद, ग्रीस और सीलेंट)","adhesives.jpg"],
  ["Nuts, Bolts & Fasteners (नट, बोल्ट और फास्टनर)","Nails, screws, nuts and bolts (कीलें, पेच, नट और बोल्ट)","fasteners.jpg"],
  ["Hand Tools & Measuring (हाथ के औज़ार और मापने के उपकरण)","Hammers, wood saws, mattocks, shovels and measuring tools (हथौड़े, लकड़ी की आरी, गैंती, फावड़े और मापने के औज़ार)","hand-tools.jpg"],
  ["Construction & General Materials (निर्माण और अन्य सामग्री)","Ropes, nets, wires, webbing tape, plywood and tarpaulins (रस्सियाँ, जालियाँ, तार, निवार, प्लाईवुड और तिरपाल)","construction.jpg"],
  ["Water Storage & Containers (पानी की टंकियाँ और कंटेनर)","Water tanks, plastic and metal buckets, and drums (पानी की टंकियाँ, प्लास्टिक व लोहे की बाल्टियाँ और ड्रम)","water-storage.jpg"],
  ["Cleaning Supplies (सफाई का सामान)","Brooms and cleaning brushes (झाड़ू और सफाई के ब्रश)","cleaning.jpg"],
  ["Bathroom & Kitchen Accessories (बाथरूम और रसोई के सामान)","Useful bathroom and kitchen items (बाथरूम और रसोई की उपयोगी चीज़ें)","cleaning.jpg"],
  ["Electrical Accessories (इलेक्ट्रिकल सामान)","LED bulbs, switches and sockets (एलईडी बल्ब, स्विच और सॉकेट)","electrical.jpg"],
  ["Cutting & Power Equipment (कटिंग और पावर उपकरण)","Grinders, saws and blades (ग्राइंडर, आरी और ब्लेड)","hand-tools.jpg"],
  ["Household & Other Products (घरेलू और अन्य सामान)","Stoves, weighing machines and more (चूल्हे, तौल मशीनें और अन्य सामान)","household.jpg"],
  ["Safety Equipment (सुरक्षा उपकरण)","Goggles, gloves, masks and hard hats (सुरक्षा चश्मे, दस्ताने, मास्क और हेलमेट)","safety.jpg"]
];
const categoryGrid = document.getElementById("categoryGrid");
function escapeHTML(value) { return String(value).replace(/[&<>\"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;","'":"&#039;"}[char])); }
if (categoryGrid) {
  const secondaryImageOverrides = {
    "Bathroom & Kitchen Accessories (बाथरूम और रसोई के सामान)": "bathroom-kitchen.svg",
    "Cutting & Power Equipment (कटिंग और पावर उपकरण)": "power-equipment.svg"
  };
  categoryGrid.innerHTML = categories.map(([name, description, image]) => {
    const primary = image;
    const secondary = secondaryImageOverrides[name] || image.replace(/\.jpg$/i, '.svg');
    return `
    <a class="category-card" href="products.html?category=${encodeURIComponent(name)}">
      <span class="category-image-pair">
        <img class="category-image-main" src="assets/categories/${primary}" alt="${escapeHTML(name)} – photo 1" loading="lazy">
        <img class="category-image-secondary" src="assets/categories/${secondary}" alt="${escapeHTML(name)} – photo 2" loading="lazy">
      </span>
      <span class="category-card-body"><strong>${escapeHTML(name)}</strong><small>${escapeHTML(description)}</small><span class="category-link">View products (उत्पाद देखें) ↗</span></span>
    </a>`;
  }).join("");
}
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => { const isOpen = mainNav.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(isOpen)); });
  mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));
}
