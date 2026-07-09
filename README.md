# Lawctopus Online Academy - Course Landing Page

This repository contains a premium, modern, and highly conversion-optimized landing page designed for the Lawctopus practical legal training course. The page is built using Next.js, React, Tailwind CSS, and Framer Motion, adhering to strict design guidelines, performance principles, and accessibility standards.

## Project Overview

The objective of this project is to present a professional landing page that addresses common user objections, details the course syllabus, introduces the expert faculty, showcases social proof, and guides prospects toward enrollment. It features a sticky navigation tracking hook, interactive accordions, and custom carousels.

## Tech Stack

* **Framework**: Next.js 16.2.9 (App Router, Turbopack)
* **Library**: React 19.2.4
* **Styling**: Tailwind CSS 4.0
* **Animations**: Framer Motion 12.4.2
* **Icons**: Lucide React 1.21.0
* **Fonts**: Geist Sans & Geist Mono (Optimized via next/font)

## Features

* **Sticky Responsive Navbar**: Features scroll-based height shrinking (72px to 64px), opacity changes, and box-shadow triggers. Contains active-section visual highlighting managed through an IntersectionObserver.
* **Hero Banner**: Includes optimized Next.js Image rendering, floating statistics cards, and a subtle glowing backdrop.
* **Trusted Grid**: Staggered cards displaying value props (Certificate of Completion, Practical Assignments, and Student metrics).
* **Curriculum Accordion**: Accessible module syllabus breakdown displaying expanding lists, topics checklist, and custom height animations.
* **Faculty bios**: Clean expert showcases displaying designation, experience badge, and LinkedIn contact buttons.
* **Testimonials Carousel**: Custom-built autoplay sliding card reel that pauses on hover and allows manual prev/next button pagination.
* **Social Proof**: Detailed statistic cards utilizing spring zoom scales and slight icon rotation upon hover events.
* **Pricing Card**: Highlights inclusions, launch pricing, discount percentage, and trust badges (SSL checkout, verified certificate, and lifetime updates).
* **Controlled FAQ**: Accordion component displaying common inquiries. Configured to permit only one open question at a time to reduce scroll clutter.

## Project Structure

```text
├── app/
│   ├── globals.css        # Global CSS, Tailwind base layers, and utility classes
│   ├── layout.js          # Root layout defining document structure and SEO metadata
│   └── page.js            # Entry page rendering the sections in sequence
├── components/
│   ├── about/             # About Course & Enrollment sections
│   ├── benefits/          # Learning outcomes components
│   ├── common/            # Reusable UI elements (Badge, Button, Card, Container, SectionTitle)
│   ├── cta/               # Final conversion banner
│   ├── curriculum/        # Syllabus items and module accordions
│   ├── faculty/           # Faculty bios grid
│   ├── hero/              # Hero header and stats
│   ├── layout/            # Navbar header and Footer footer
│   ├── pricing/           # Pricing details and inclusions
│   ├── testimonials/      # Reviews, custom carousel, and social proof statistics
│   └── trusted/           # Trusted grid elements
├── data/
│   ├── benefits.js        # Benefits configuration
│   ├── curriculum.js      # Syllabus dataset
│   ├── faculty.js         # Expert profiles
│   ├── faq.js             # Detailed FAQ inquiries
│   └── testimonials.js    # Student reviews
├── public/
│   └── images/            # Static visual assets
├── utils/
│   └── cn.js              # Tailwind class merging utility
├── next.config.mjs        # Next.js configurations
└── tailwind.config.mjs    # Tailwind directives
```

## Installation

Ensure you have Node.js version 18 or above installed on your system. Clone the repository and install the project dependencies:

```bash
npm install
```

## Running Locally

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the active landing page.

To verify production builds:

```bash
npm run build
```

## Deployment

The application is fully optimized for deployment on the Vercel Platform. Since it relies on client-side routing, static prerendering, and optimized image processing, it requires zero backend API resources or environmental variables.

## Author

Developed for Lawctopus Online Academy.
