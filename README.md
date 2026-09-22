# Krishna Mullia

Personal research and engineering website at [krishnamullia.com](https://krishnamullia.com/), hosted with GitHub Pages.

## Local preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository and open http://127.0.0.1:8000. There are no packages to install and no build step.

## Editing

- `index.html` contains all content, including publications. Content is available without JavaScript.
- Keep the writing direct: a short introduction, a compact career narrative, public product examples, research, and mentorship and service. The About section comes immediately after the introduction to connect the research and production work. Avoid slogans, a job-by-job résumé, and repeated achievement summaries.
- All HTTP(S) links open a new tab with `noopener noreferrer`. Section links stay on the page; email links use the visitor’s mail application. Keep this behavior in the HTML rather than depending on JavaScript.
- `assets/css/site.css` defines the responsive layout, typography, and print styles. After changing it, update the stylesheet link’s `v` query parameter in `index.html` to the first eight characters of its SHA-256 hash so returning visitors receive the new styles.
- `assets/js/site.js` enhances section navigation, updates the footer year, and loads the existing analytics only on the public domain.
- `images/research/` contains optimized research imagery and the existing portrait. `images/social-preview.jpg` is the social sharing image.
- `CNAME` preserves the existing custom domain. `.nojekyll` serves the site as plain static files.

## Content sources

Career, contributions, mentorship, and service are based on `../resume/main.tex` (September 22, 2026). Publication metadata is based on the companion `publications.bib` and linked primary project pages. Existing intern and collaborator links are retained, with Ruben Wiersma’s name corrected.

The résumé is private and tailored to individual jobs. Do not add a résumé or CV file, download, or link to this website. The sibling résumé repository is a content reference only.

- [Generative Neural Materials](https://cseweb.ucsd.edu/~n2raghavan/webpage/gen_neumat.html): featured image is a still from the authors’ teaser video.
- [RNA: Relightable Neural Assets](https://krishnamullia.com/rna/): uses the existing research teaser.
- [Stochastic Ray Tracing for the Reconstruction of 3D Gaussian Splatting](https://xupaya.github.io/stoch3DGS/): the publication title links to the project page. Author order was verified against the final CVPR paper; it differs from the project page, earlier arXiv version, and résumé bibliography.
- [Uncertainty for SVBRDF Acquisition using Frequency Analysis](https://svbrdf-uncertainty.github.io/).

### Public product references

- Photoshop: [Rotate Object documentation](https://helpx.adobe.com/photoshop/desktop/crop-resize-transform/transform-manipulate-reshape/rotate-objects.html) and [Adobe Research’s feature overview](https://research.adobe.com/news/new-photoshop-feature-rotate-2d-objects-in-three-dimensions/) explain the 3D manipulation, Gaussian splat preview, and native renderer.
- Illustrator: [Adobe MAX 2021 announcement](https://blog.adobe.com/en/publish/2021/10/26/illustrator-updates-max-2021-announcements) describes the redesigned 3D tools, ray-traced renderer, and learned denoiser.
- Dimension: [GTC 2020 talk](https://www.nvidia.com/en-us/on-demand/session/gtcsj20-s22485/) is the technical presentation co-presented by Krishna.
- Substance 3D: [Adobe’s Stager 2.1 release post](https://blog.adobe.com/en/publish/2023/07/27/substance-3d-collection-july-release-news) documents the GPU denoiser in Stager. [Adobe’s December 2024 update](https://blog.adobe.com/en/publish/2024/12/20/substance-3d-updates-more-control-over-generated-marketing-images-better-collaboration-through-3d-viewer-more) identifies the other product as Substance 3D Viewer (beta). The page refers to Viewer historically because product names and status can change.

Public articles substantiate the features and their rendering technology. Statements about Krishna’s individual contribution come from the supplied résumé; the articles are not presented as individual credit or endorsements.

Research imagery belongs to the respective authors. The portrait is from the original website. DM Sans and Instrument Serif are self-hosted under the SIL Open Font License; licenses are in `assets/fonts/`.

The current page, stylesheet, and script are custom implementations. `LICENSE.txt` documents the earlier HTML5 UP template source.

## Publishing

Publish through the repository’s existing GitHub Pages configuration after reviewing the local preview. The redesign does not require changes to Cloudflare, DNS, or the custom domain. The `/rna/` project is linked with its existing absolute URL.

## Validation

The redesign was checked in the browser at 320, 375, 390, 560, 768, 1024, 1280, and 1440 pixels. Checks cover horizontal overflow, heading clipping, image loading, navigation, and keyboard operation of the intern disclosure. Local asset paths, fragment targets, unique IDs, image alternative text, structured data, sitemap XML, and JavaScript syntax were also checked. No résumé file is included in the site.
