# Engineering Portfolio

A fast, navigable portfolio website for showcasing mechanical engineering projects, with focus on Robotics and CAD designs.

## Features

- 🖼️ **Image Gallery**: Display multiple images per project with optimized loading
- 🔍 **Category Filtering**: Filter projects by category (Robotics, CAD, Mechanical Design, etc.)
- 🔎 **Lightbox Viewer**: Click any image to view full-size with navigation
- ⚡ **Fast Performance**: Optimized images, lazy loading, and efficient rendering
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Clean UI**: Modern, professional design with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your project images:
   - Place images in `public/projects/[project-name]/`
   - Update `data/projects.ts` with your project information

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Your Projects

1. **Organize Images**:
   ```
   public/
     projects/
       robot-1/
         image1.jpg
         image2.jpg
       arm-1/
         image1.jpg
         image2.jpg
   ```

2. **Update `data/projects.ts`**:
   ```typescript
   {
     id: 'unique-id',
     title: 'Project Title',
     category: 'Robotics' | 'CAD' | 'Mechanical Design',
     description: 'Brief description of the project',
     images: [
       '/projects/robot-1/image1.jpg',
       '/projects/robot-1/image2.jpg',
     ],
     technologies: ['SolidWorks', 'MATLAB'],
     date: '2024-01-15',
   }
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Deploy to Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## Image Optimization Tips

- Use WebP format for better compression
- Recommended image sizes:
  - Thumbnails: 800x600px
  - Full-size: 1920x1080px max
- Next.js automatically optimizes images, but starting with optimized images helps

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **yet-another-react-lightbox**: Lightbox component for image viewing
- **Next.js Image**: Automatic image optimization

## Customization

- Update colors in `tailwind.config.ts`
- Modify layout in `app/layout.tsx`
- Change gallery behavior in `components/ProjectGallery.tsx`
- Update categories in `types/index.ts`

## License

MIT

