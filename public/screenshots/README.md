# Screenshots — How to Add App Screenshots

This folder is where you put **real app screenshots** for portfolio projects. The site will automatically use them if you reference them in `src/data/content.ts`.

## 2 Ways to Add Screenshots

### Option A — Local (Recommended for <20 images, <5MB total)
Best for recruiter speed, no external dependency, works offline, Vercel deploys instantly.

1. Create a subfolder per project under `public/screenshots/`:

```
public/screenshots/
  draftlee/
    1-main-inbox.webp
    2-drafting.webp
    3-voice-newsletter.webp
    thumb.webp
  eduflow/
    1-dashboard.webp
    2-cpd-tracking.webp
    thumb.webp
  oyster360/
    dashboard.png
    batches.png
  ygc/
    upload.png
    timeline.png
  medimind/
    dashboard.png
  ...
```

2. Optimize images:
   - Format: **WebP** preferred (smaller than PNG/JPG) — use https://squoosh.app/ or `sharp`
   - Size: max **1600px wide**, 500KB each max
   - Naming: `01-`, `02-` prefix for ordering

3. In `src/data/content.ts`, add to your project:

```ts
{
  title: "Draftlee — AI Email Assistant (Mortgage AI Toolkit)",
  ...
  screenshots: [
    "/screenshots/draftlee/1-main-inbox.webp",
    "/screenshots/draftlee/2-drafting.webp",
    "/screenshots/draftlee/3-voice-newsletter.webp"
  ],
  thumbnail: "/screenshots/draftlee/thumb.webp", // optional cover
}
```

4. The components `selected-work.tsx` and `work/page.tsx` will automatically show `thumbnail` or first screenshot instead of mock UI.

**Pros:** No external account, fastest loading, works in offline PWA, versioned in Git.
**Cons:** Increases Git repo size if many large PNGs. Keep optimized WebP.

---

### Option B — External CDN (Recommended for many large screenshots)

Use free CDN so Git repo stays small. Recruiter still sees images fast via CDN.

**Best options:**
1. **Cloudinary (Recommended, 25GB free)** — https://cloudinary.com/
   - Upload at https://console.cloudinary.com/ → Media Library
   - Copy URL like `https://res.cloudinary.com/dxxxx/image/upload/v123/draftlee/main.png`
   - Paste URL into `screenshots: [...]` — works directly, no code change

2. **Vercel Blob (if you deploy on Vercel)** — https://vercel.com/docs/storage/vercel-blob
   - `vercel blob` or dashboard upload
   - URL like `https://...public.blob.vercel-storage.com/draftlee-xxx.webp`

3. **Supabase Storage** — https://supabase.com/storage (you already use Supabase for medimind)
   - Create public bucket `screenshots` → upload → copy public URL

4. **Imgur / ImgBB** — quick but less professional, no optimization

**In `content.ts` then:**

```ts
screenshots: [
  "https://res.cloudinary.com/your-id/image/upload/v1/draftlee/main.webp",
  "https://res.cloudinary.com/your-id/image/upload/v1/draftlee/drafting.webp"
],
thumbnail: "https://res.cloudinary.com/your-id/image/upload/v1/draftlee/thumb.webp"
```

**Pros:** Repo stays tiny, you can upload many HD images, Cloudinary auto-optimizes WebP/AVIF, responsive.
**Cons:** Depends on external service.

---

### What to capture (per project)

Recruiters love to see:
- **Dashboard / main view** (with real data blurred if needed)
- **Core workflow** (e.g., Draftlee: inbox → draft generated → FCA check)
- **Mobile view** if responsive
- **Before/After** or **Empty vs Filled** states

For work projects (Mortgage AI Toolkit) where you can't share real customer data:
- Use demo account screenshots
- Blur sensitive info with Figma
- Or use marketing screenshots from mortgageaitoolkit.com product page (with permission)

### How components use screenshots

- `SelectedWorkSection` (`src/components/sections/selected-work.tsx`):
  - If `thumbnail` exists → shows it as cover (object-cover)
  - Else if `screenshots[0]` exists → shows first screenshot
  - Else → shows mock browser UI (current placeholder)

- `WorkPage` (`src/app/work/page.tsx`):
  - Same logic in card header + expanded view shows all screenshots as scrollable gallery

No need to change code after you add paths — it auto-detects.

### Example commit after adding screenshots

```bash
# Option A local
mkdir -p public/screenshots/draftlee
# copy your files there (WebP optimized)
# edit src/data/content.ts to add screenshots array
git add public/screenshots/draftlee src/data/content.ts
git commit -m "docs: add Draftlee real screenshots"
git push
```

### Need help optimizing?

Run:
```bash
npx sharp-cli -i ./raw.png -o ./public/screenshots/draftlee/1.webp --webp --quality 80 --resize 1600
```
Or use Squoosh.app drag & drop → WebP quality 80.

---
**Current status:** No screenshots yet — all cards show mock UI. Add at least 2 per S/A Tier project (YGC, Oyster360, BookWise, medimind, RouteIQ) + your 2 work projects (Draftlee, EduFlow) to make portfolio instantly credible for recruiters.
