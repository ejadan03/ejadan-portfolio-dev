# Erfan Jadan - Portfolio Website

A fully responsive, professional one-page portfolio website built with HTMX and Tailwind CSS.

## Features

- ✅ **HTMX-powered navigation** - No page reloads, smooth section transitions
- ✅ **Dark mode toggle** - Persistent theme preference with localStorage
- ✅ **Smooth animations** - Fade-in on scroll, slide transitions
- ✅ **Fully responsive** - Mobile-first design, works on all devices
- ✅ **Professional design** - Clean, modern UI suitable for a senior financial consultant
- ✅ **Semantic HTML** - Accessible and SEO-friendly

## File Structure

```
.
├── index.html              # Main HTML file with navigation
├── partials/               # HTMX partials for each section
│   ├── home.html
│   ├── about.html
│   ├── experience.html
│   ├── projects.html
│   ├── education.html
│   ├── skills.html
│   └── contact.html
├── js/
│   ├── darkmode.js        # Dark mode toggle functionality
│   └── animations.js      # Scroll animations and effects
├── images/
│   ├── hero_ai.jpg        # Hero section background (placeholder)
│   ├── about_ai.jpg       # About section portrait (placeholder)
│   └── projects/          # Project thumbnails (placeholders)
│       ├── ifrs9_monitoring.jpg
│       ├── lgd_redevelopment.jpg
│       ├── ifrs9_engine.jpg
│       └── excel_lgd.jpg
└── README.md
```

## Setup Instructions

1. **Replace placeholder images**
   - Replace all `.jpg` files in the `images/` directory with actual images
   - Recommended dimensions:
     - `hero_ai.jpg`: 1920x1080 (landscape)
     - `about_ai.jpg`: 800x1000 (portrait)
     - Project thumbnails: 800x600 (landscape)

2. **Update contact information**
   - Edit `partials/contact.html` to add your actual email and LinkedIn URL
   - Update the contact form endpoint if you have a backend

3. **Customize content**
   - All content is in the partial HTML files
   - Update experience, projects, and skills as needed

4. **Serve the website**
   - Use any static file server (e.g., Python's `http.server`, Node's `http-server`, or any web server)
   - For local development:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (if you have http-server installed)
     npx http-server
     ```
   - Open `http://localhost:8000` in your browser

## Technologies Used

- **HTMX** - For dynamic content loading without page reloads
- **Tailwind CSS** - For styling (via CDN)
- **Vanilla JavaScript** - For dark mode and animations
- **IntersectionObserver API** - For scroll-triggered animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Dark mode uses CSS `prefers-color-scheme` with fallback

## Customization

### Colors
The site uses Tailwind's default color palette with dark mode variants. To customize:
- Edit the Tailwind classes in HTML files
- Or configure Tailwind via CDN (see Tailwind docs)

### Animations
Animation timing and effects can be adjusted in:
- `js/animations.js` - Scroll animations
- CSS in `index.html` - Transition durations

### Adding New Sections
1. Create a new partial in `partials/`
2. Add a navigation link in `index.html`
3. Use HTMX `hx-get` to load the partial

## Notes

- The contact form currently shows a success message on submit. To make it functional, you'll need to:
  - Set up a backend endpoint at `/api/contact`
  - Or use a service like Formspree, Netlify Forms, etc.
  - Update the `hx-post` attribute in `partials/contact.html`

- All images are placeholders. Replace them with actual professional images.

## License

This portfolio template is created for Erfan Jadan. Customize as needed.

