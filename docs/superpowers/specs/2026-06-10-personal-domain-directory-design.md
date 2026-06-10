# Personal Domain Directory Design

## Goal

Turn the existing portfolio deployment into a small personal-domain website at
`syedmubashirali.com` with clear entry points for the portfolio, Flutter
packages, projects, and contact information.

The existing portfolio remains intact but moves from `/` to `/portfolio`.

## Approved Routes

| Route | Purpose |
| --- | --- |
| `/` | Professional Directory homepage |
| `/portfolio` | Existing full portfolio |
| `/packages` | Flutter package catalog |
| `/projects` | Apps and project catalog |
| `/contact` | Contact methods and resume access |

All routes stay in one Next.js App Router project and one Vercel deployment.
DNS connects a hostname to the deployment; the `/portfolio` path is provided by
the Next.js route, not by a DNS record.

## Homepage Design

Use the approved **Professional Directory** direction.

The page contains:

- A compact header with the owner name and availability status.
- Profile image, `Senior Flutter Developer` role, and a short introduction.
- Four prominent destination cards: Portfolio, Flutter Packages, Apps &
  Projects, and Contact.
- GitHub and LinkedIn links as secondary actions.
- The current blue, slate, white, and dark-mode visual language.

The cards use a two-column grid on tablet and desktop widths and a single-column
stack on mobile. Each card is fully clickable, keyboard accessible, and has a
clear icon, title, description, and directional affordance.

## Route Structure and Shared UI

The root layout owns fonts, theme support, global metadata defaults, and global
styles. It does not render the current portfolio navigation globally.

The portfolio route owns the current `Navbar` through a nested
`app/portfolio/layout.tsx`. Portfolio anchor links use absolute route-aware
targets such as `/portfolio#projects` so they work from any page and after a
refresh.

The directory, packages, projects, and contact pages use a small shared site
header with links to the five top-level routes. This header is visually lighter
than the portfolio section navigation.

## Content Model

Static typed data drives the directory cards and package listings.

The existing `projects` and `contact` data remain the source for project and
contact content. The `/projects` page reuses that project data instead of
duplicating descriptions and links.

The package catalog supports:

- Package name and short description.
- Platform and technology tags.
- pub.dev and GitHub URLs when confirmed.
- A status such as `Published`, `In development`, or `Coming soon`.

An item without a confirmed URL renders a non-clickable status label. It never
renders a broken or placeholder external link. If no package has a confirmed
public listing during implementation, the page shows an honest empty state and
links to the GitHub profile.

## Metadata and Discoverability

Set `metadataBase` to `https://syedmubashirali.com`.

Each top-level route receives a distinct title, description, canonical URL, and
social-sharing metadata. Add a sitemap containing the five public routes and a
robots configuration that allows indexing.

The canonical hostname is `syedmubashirali.com`. `www.syedmubashirali.com`
redirects to the apex domain to avoid duplicate URLs.

## Link and Failure Behavior

- Internal navigation uses `next/link`.
- External links open in a new tab with `noopener noreferrer`.
- Email, phone, and WhatsApp links use their native URL schemes.
- Missing optional project or package links show status text rather than an
  inactive-looking button.
- Existing public assets remain root-relative, including the profile image,
  resume, certificates, and experience documents.
- Unknown routes use the framework's normal 404 behavior.

## Domain Migration

The site remains hosted by Vercel. GoDaddy continues to manage the domain and
DNS.

Deployment sequence:

1. Deploy the route changes to the existing Vercel project and verify the
   generated Vercel production URL.
2. In the Vercel project's Domains settings, add both
   `syedmubashirali.com` and `www.syedmubashirali.com`.
3. Set `syedmubashirali.com` as primary and configure `www` to redirect to it.
4. In GoDaddy DNS, remove only conflicting web-hosting records for `@` and
   `www`. Preserve MX and TXT records used for email or verification.
5. Add the exact A and CNAME records displayed by Vercel for this project.
   Vercel currently documents `76.76.21.21` for a general apex A record and
   `cname.vercel-dns-0.com` for a general `www` CNAME, but project-specific
   values shown in Vercel take precedence.
6. Wait for DNS verification, then confirm Vercel has provisioned HTTPS.
7. Test the apex domain, the `www` redirect, and all five routes.

DNS propagation may be quick but can take up to 48 hours globally. The existing
`vercel.app` URL can remain available.

## Verification

Before deployment:

- Run `npm run lint`.
- Run `npm run build`.
- Verify `/`, `/portfolio`, `/packages`, `/projects`, and `/contact` locally.
- Check desktop and mobile layouts in the browser.
- Check portfolio anchor navigation and all internal route cards.
- Confirm the resume and document assets still load from `/portfolio`.
- Confirm missing optional links render as statuses.

After DNS configuration:

- Confirm `https://syedmubashirali.com/` loads with a valid certificate.
- Confirm `https://syedmubashirali.com/portfolio` loads the existing portfolio.
- Confirm `https://www.syedmubashirali.com` redirects to the apex domain.
- Confirm canonical metadata does not reference the old Vercel hostname.

## Scope

This change does not introduce a CMS, database, authentication, analytics, or
contact-form backend. Content remains source-controlled and data-driven. Those
features can be added later without changing the approved route structure.
