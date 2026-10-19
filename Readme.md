**# G&A Natural Foods**

A static website skeleton for a small shop selling makhana, grams, rice, atta, and a few other staples. Orders go out on WhatsApp, so the site does not need a server, database, or payment checkout.

The shop name, phone, prices, and address are placeholders. Change them before you share the link.

**## Edit before publishing**

1\. Shop name, phone, WhatsApp, email, address, hours, delivery area, UPI id, and FSSAI number: \`js/config.js\`
&#x20;  WhatsApp must be country code plus number, digits only. Example: \`919876543210\`.
2\. Product names and prices in \`products.html\`, and the matching prices on the home page.
3\. The story on \`about.html\`.

**## Preview on your computer**

From this folder:

\`\`\`bash
python3 -m http.server 8080
\`\`\`

Open \`[http://localhost:8080](http://localhost:8080)\`.

**## Cheapest way to put it online**

Host the folder as a static site. A reasonable first year is **\*\*₹0 for hosting\*\***, plus a domain only if you want your own name.

\| Choice | Yearly cost | Use it when |
\| --- | --- | --- |
\| Cloudflare Pages | ₹0 | Best default. Free HTTPS, fast in India, custom domain supported. |
\| Netlify or Vercel free plan | ₹0 | Same idea if you already have an account there. |
\| GitHub Pages | ₹0 | Fine for a first public link. |
\| \`.in\` or \`.com\` domain | about ₹700–1,500 | Only after the free link looks right. Buy it from Cloudflare Registrar, Namecheap, or Porkbun. |
\| Shopify, WooCommerce hosting, or a VPS | ₹2,000–40,000+ | Wait. Those charge every month for a cart you do not need yet. |

**### Cloudflare Pages, short version**

1\. Create a free GitHub account and put this folder in a repository.
2\. Create a free Cloudflare account.
3\. In Cloudflare, open Workers & Pages → Create → Pages → connect the repository.
4\. Build command: leave empty. Output directory: \`/\` (the repository root).
5\. Publish. You get a free \`\*.pages.dev\` address with HTTPS.
6\. When you buy a domain, add it in the same Pages project. Cloudflare will issue the certificate.

There is no build step. Do not add a database.

**## Taking payment without a store platform**

\- Confirm the order on WhatsApp, then share your UPI id, or take cash on pickup.
\- When card or UPI links are worth it, use **\*\*Razorpay Payment Links\*\***. You create a link for the confirmed total. The website still stays static.
\- Add a full cart only after WhatsApp replies become hard to keep up with.

**## Free things that help a local shop**

\- Google Business Profile, so the shop shows on Maps.
\- Phone photos of the real packs. Export them small (under about 200 KB) and drop them into an \`images\` folder.
\- A WhatsApp Business app catalog, using the same product names as this site.