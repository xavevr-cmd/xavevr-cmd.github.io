# XAVEVR VOID//001 delivery setup

The VOID//001 Buy button is connected to the live Stripe Payment Link.

## Important
Do not put the paid ZIP in this public GitHub Pages repository. The static site cannot securely verify a Stripe payment on its own.

The intended flow is:
1. Customer clicks BUY / DOWNLOAD.
2. Stripe Checkout collects the CA$1 payment.
3. Stripe redirects to `download/void-001.html?session_id={CHECKOUT_SESSION_ID}`.
4. A server-side fulfillment endpoint verifies the Checkout Session and payment status.
5. The server issues a short-lived download URL for the private VOID 001 ZIP.

Stripe recommends using webhooks for reliable fulfillment and supports `{CHECKOUT_SESSION_ID}` in Payment Link redirect URLs.
