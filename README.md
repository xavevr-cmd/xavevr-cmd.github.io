# XAVEVR

Single-page GitHub Pages storefront for digital drum kits and Serum preset banks.

## Stripe setup

This version uses **Stripe Payment Links**, which is ideal for a static GitHub Pages site because no secret Stripe API key is placed in the browser.

1. Create your products/prices in Stripe.
2. Create a Payment Link for each product.
3. Open `index.html`.
4. Replace each `YOUR_STRIPE_..._PAYMENT_LINK` placeholder with the corresponding Stripe Payment Link.
5. Commit `index.html` and `style.css` to your GitHub repository.
6. Enable GitHub Pages in the repository settings.

## Important

Do not put a Stripe secret key (`sk_...` or restricted secret key) in `index.html` or JavaScript. Static GitHub Pages is public.

For automatic digital delivery, configure the post-payment flow in your Stripe setup or use a secure backend/digital-delivery service. Do not expose private download URLs in public source code if the files are intended to be protected.
