# Sharad Hardware Store Website

Bilingual (English + Hindi) responsive business catalogue website for Sharad Hardware Store, Ukwa.

## Run locally
1. Extract the ZIP and open the `sharad-hardware-store` folder in VS Code.
2. Open `index.html` with the VS Code Live Server extension, or open it directly in a browser.
3. The homepage shows the shop, bilingual category cards, gallery, location and contact details. Select Products (उत्पाद) for the separate product directory.

## Files
- `index.html` — bilingual homepage
- `products.html` — bilingual product list page
- `styles.css` — responsive styles and Devanagari typography
- `script.js` — homepage category cards and navigation
- `products.js` — bilingual product catalogue, search, filter and WhatsApp enquiries
- `assets/shop-interior.jpg` and `assets/shop-exterior.jpg` — shop photographs supplied by the owner
- `assets/categories/` — category images supplied by the owner, cropped from their uploads and bundled locally; two categories retain simple local SVG artwork where no matching photo was supplied

## Product directory
The product page displays a compact bilingual list, with English product names followed by Hindi names in brackets. Search and category filtering include both languages. Each item has a bilingual WhatsApp enquiry link. The list is informational, not a live stock register.

## Before publishing
Confirm current product availability, product names, phone numbers, address, email and opening hours. Category images are bundled locally and do not rely on third-party image hosts. The Devanagari font is loaded from Google Fonts when internet access is available. Some uploaded category images are collages or screenshots supplied by the owner.

## Publish with GitHub and Vercel
Create an empty GitHub repository, then run these commands in the project folder:

```bash
git init
git add .
git commit -m "Update bilingual Sharad Hardware Store website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sharad-hardware-store.git
git push -u origin main
```

Import the repository into Vercel. This is a static website: no build command is required and the output directory can be left at the default.


## Recent visual updates
- Owner portrait is used as the small header avatar and in the owner introduction.
- Homepage category cards show two visuals (category photo plus matching local illustration).
- Product rows show compact local thumbnails beside product names; where a dedicated item crop exists it is used, otherwise a representative category photo is used.
- Directions button now uses the latest Google Maps short link supplied by the owner.
