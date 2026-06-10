# Connect syedmubashirali.com to Vercel

The app remains hosted on Vercel. GoDaddy manages the domain's DNS.

## 1. Deploy the application

Push the completed route changes to the branch connected to the existing Vercel
project. Verify these routes on the generated Vercel production URL:

- `/`
- `/portfolio`
- `/packages`
- `/projects`
- `/contact`

## 2. Add domains in Vercel

Open the Vercel project, then open **Settings > Domains**.

Add:

- `syedmubashirali.com`
- `www.syedmubashirali.com`

Set `syedmubashirali.com` as the primary domain. Configure `www` to redirect to
the apex domain.

## 3. Update GoDaddy DNS

Open the domain in GoDaddy and select **DNS**.

Delete only existing records for `@` or `www` that conflict with Vercel. Do not
delete MX or TXT records used for email and domain verification.

Add the exact records shown by Vercel. Vercel's current general-purpose values
are:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns-0.com` |

If the Vercel dashboard displays project-specific values, use those instead.

## 4. Verify

Wait for Vercel to mark both domains as valid and provision HTTPS. DNS changes
usually appear quickly but can take up to 48 hours globally.

Confirm:

- `https://syedmubashirali.com`
- `https://syedmubashirali.com/portfolio`
- `https://syedmubashirali.com/packages`
- `https://syedmubashirali.com/projects`
- `https://syedmubashirali.com/contact`
- `https://www.syedmubashirali.com` redirects to the apex domain
