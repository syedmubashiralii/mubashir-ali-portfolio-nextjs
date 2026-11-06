# syedmubashirali.com

Portfolio of Syed Mubashir Ali, senior Flutter and AI-native product engineer. Built with Next.js 15 (App Router), React 19, and Tailwind CSS 4, and deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

## Check

```bash
npm test
npm run lint
npm run build
```

## Where things live

| What | Where |
| --- | --- |
| Experience, projects, skills, contact details | `app/data/portfolio.ts` |
| Services, FAQ, packages, navigation | `app/data/site.ts` |
| Titles, descriptions, keywords, JSON-LD, `llms.txt` | `app/data/seo.ts` |
| Colors and fonts | `app/globals.css` (`@theme`) |

## Brand palette

| Token | Hex | Use |
| --- | --- | --- |
| `pine-950` | `#08201B` | Dark surfaces and text on light |
| `volt` | `#C9F24D` | Primary action and highlights |
| `bone` | `#F5F4EC` | Page background |
| `coral` | `#FF6B4A` | Color block, with pine text |
| `sun` | `#FFC23C` | Color block, with pine text |
| `lilac` | `#CDBDFF` | Color block, with pine text |

## Deploy

Pushing to `main` deploys to production through Vercel. See [docs/deployment/custom-domain.md](docs/deployment/custom-domain.md) for the GoDaddy DNS setup.
