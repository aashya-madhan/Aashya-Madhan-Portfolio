# Aashya Madhan - Portfolio

A premium, elegant developer portfolio built with Next.js, featuring a sophisticated black-and-champagne-gold theme. This portfolio showcases my projects, experience, skills, and achievements with interactive UI elements and smooth animations.

## ✨ Features

- **Premium Design**: Elegant black-and-champagne-gold color scheme with glassmorphism effects
- **Interactive Project Cards**: Clickable project cards with detailed modal popups
- **Responsive Layout**: Fully responsive design optimized for desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: Keyboard navigation, focus management, and ARIA labels
- **Dark Theme**: Eye-friendly dark mode design with subtle gold accents
- **Performance Optimized**: Built with Next.js 16 for optimal performance

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6 (with Turbopack)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.34.0
- **Icons**: Lucide React
- **Language**: TypeScript 5
- **Image Optimization**: Sharp

## 📂 Project Structure

```
portfolio-main/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles & theme
│   ├── components/
│   │   ├── effects/           # Visual effects (StarField, GradientOrb, etc.)
│   │   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/                # Reusable UI components
│   ├── data/                  # Content data (projects, experience, skills)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── package.json              # Dependencies & scripts
```

## 🎨 Key Sections

### Hero Section
- Champagne gold name with gradient effect
- Stats cards showing CGPA, projects, internships, and IEEE publication
- Social links (GitHub, LinkedIn)
- Available for opportunities badge

### About Section
- Personal biography
- Achievement statistics
- Building Tools card linking to projects

### Projects Section
- Interactive project cards with hover effects
- Detailed modal popups with:
  - Project descriptions
  - Problem statements
  - Technology stacks
  - Features and contributions
  - GitHub and live demo links
- Projects: SafePulse, PrepForge, VerifAura AI

### Experience Section
- Timeline-style layout with glowing gold line
- Research Co-Author - IEEE ICC-CNS Conference
- Full Stack Development Intern - Infosys Springboard
- Frontend Web Development Intern - IBM SkillsBuild

### Skills Section
- Categorized technology badges
- Frontend, Backend, Database, Tools & Deployment, AI/ML categories

### Contact Section
- Email card with mailto link
- Location information
- Social platform connections

## 🛠️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/aashya-madhan/portfolio.git
cd portfolio-main
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

4. **Build for production**
```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server on port 3002
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Color Palette

```css
--color-bg-primary: #080808      /* Main background */
--color-bg-section: #111111      /* Section background */
--color-bg-card: #181818         /* Card background */
--color-border: #2A2A2A          /* Default border */
--color-accent: #C5A568          /* Champagne gold */
--color-accent-hover: #DFC58F    /* Light gold */
--color-text-primary: #F5F1E8    /* Main text */
--color-text-body: #B8B5AE       /* Body text */
--color-text-muted: #858585      /* Muted text */
```

## 📸 Adding Project Content

To add screenshots and detailed content for projects:

1. **Add images**: Place project screenshots in `/public/projects/` folder
   - Example: `/public/projects/safepulse-1.jpg`

2. **Update project data**: Edit `src/data/projects.ts`
   - Update `screenshots` array with image paths
   - Expand `modalContent` with detailed descriptions
   - Add challenges, results, and additional features

## 🔧 Customization

### Update Personal Information
Edit `src/data/personal.ts` to update:
- Name, title, bio
- Email, location
- Social media links
- Resume URL

### Modify Projects
Edit `src/data/projects.ts` to:
- Add/remove projects
- Update descriptions and features
- Change technology stacks
- Add links

### Update Experience
Edit `src/data/experience.ts` to:
- Add new positions
- Update dates and descriptions
- Modify achievements

### Change Skills
Edit `src/data/skills.ts` to:
- Add/remove skills
- Update categories
- Change skill icons

## 🌐 Deployment

This portfolio can be deployed on:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **GitHub Pages** (with static export)
- Any Node.js hosting platform

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aashya Madhan**
- GitHub: [@aashya-madhan](https://github.com/aashya-madhan)
- LinkedIn: [Aashya Madhan](https://www.linkedin.com/in/aashya-madhan)
- Email: aashya05@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ Star this repository if you found it helpful!
