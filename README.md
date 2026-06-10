# Capstone Project — TS Academy Group 19

### Solar System Data Explorer

A React web application that explores our solar system through data. Built as a capstone project for the TS Academy Frontend Development course(Pheonix Cohort).

## Table of Contents

- [Live Demo](#-live-demo)
- [Project Summary](#-project-summary)
- [Team Members](#-team-members)
- [Components & Contributors](#-components--contributors)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)
- [Deployment](#-deployment)

---

## Live Demo

> Deployment Link: _Update this once deployed to Netlify/Vercel_

---

## Project Summary

This application recreates a provided mockup as a fully working React web app. It fetches real planet data from an external API and displays it in a responsive grid of planet cards. It also includes a comparative NASA data table and a validated contact form. The project demonstrates HTML, CSS and JavaScript fundamentals, React component architecture, the Fetch API, responsive design, and collaborative Git workflows — all skills covered throughout the TS Academy Frontend Development course.

---

## Team Members

| # | Name | GitHub |
|---|------|--------|
| 1 | Doro Roland _(Team Lead)_ | https://github.com/Dororoland |
| 2 | Joan Ikwen _(Assistant Team Lead)_ | https://github.com/jojoIK |
| 3 | Ijeoma Ejeh | https://github.com/ijeomagodspower |
| 4 | Odunayo Ajayi| https://github.com/Odunayo1-code |
| 5 | Abiodun Ojo | https://github.com/Abbeyboyz54 |
| 6 | Ogundeyi Joshua | https://github.com/Bossboygod |
| 7 | Emmanuel Benjamin | https://github.com/BiBenjiudo |
| 8 | Raodat Oshoala | https://github.com/oshoalaraodat-gif | 
| 9 | Mohammed Olamilekan | https://github.com/mohola1 |
| 10 | Annointing Ola | https://github.com/ola71656-sudo |
| 11 | Favour Gabriel | https://github.com/gabfav3898 |
| 12 | Ikechukwu Iroegbu | https://github.com/Iykestine |
| 13 | Gbenga Taiwo |https://github.com/GeeTee100 |
| 14 | Emereonye Armstrong |https://github.com/Armzy2 |

---

## Components & Contributors

| Component      | Description                                  | Worked on by                                                |
| -------------- | -------------------------------------------- | ----------------------------------------------------------- |
| `Header`       | Hero section, CTA buttons, scroll logic      | Joan Ikwen                                                  |
| `VideoSection` | Autoplay looping planet video + text         | Joshua Ogundeyi, Abiodun Ojo, Emereonye Armstrong  , Gbenga Taiwo                             |
| `Gallery`      | API fetch, planet cards with figure elements | Doro Roland, Ikechukwu Iroegbu, Anointing Ola               |
| `Table`        | NASA planetary facts comparative table       | Raodat Oshoala, Mohammed Olamilekan                         |
| `Form`         | Contact form with validation + submission    | Odunayo, Ijeoma Ejeh                                        |
| `Footer`       | About section, links, copyright              | Emmanuel Benjamin, Favour Gabriel                           |
| `App.jsx`      | Root component, section layout               | Doro Roland, Joan Ikwen                                     |

---

## Prerequisites

You must have the following installed:

1. **Node.js** (v18+) and **npm**
2. **Git**
3. A **GitHub account** linked to your editor (see README.md)

---

## 💡 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Dororoland/TS-Academy-Group-19-Project.git

# 2. Navigate into the project folder path
cd TS-Academy-Group-19-Project/CapstoneProject

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) 

---

## 🤝 Contributing

### Quick Reference — Git Commands (VS Code Terminal)

**Check out your branch from main:**

```bash
git checkout main
git pull origin main
git checkout -b feat/your-branch-name
```

**Fetch latest from main and merge into your branch:**

```bash
git fetch origin
git merge origin/main
```

**Stage, commit, and push:**

```bash
git add .
git commit -m "feat: describe what you did"
git push origin feat/your-branch-name
```

### Branch & Commit Naming

| Type     | Branch                | Commit                                    |
| -------- | --------------------- | ----------------------------------------- |
| New work | `feat/header`         | `feat: add hero section with CTA buttons` |
| Bug fix  | `fix/form-validation` | `fix: correct email validation logic`     |

### Pull Request Rules

- Every push must have a PR created on GitHub
- Tag **all reviewers for your section found in the task delegation file shared on the group**including the Team Lead
- Notify tagged reviewers in the group chat
- **Only the Team Lead merges to main**
- **Never push directly to main from your local machine**
- After your PR is merged, checkout to main before starting new work — even for a fix

### PR Description Template

## Description

Brief summary of what this PR does and which section it covers.

---

## Changes Made

- `ComponentName.jsx` — describe what was added or changed
- `ComponentName.css` — describe styles added or changed
- `App.jsx` — describe any changes made here if applicable

---

## Section

_e.g. Header / Gallery / Form_

## Related Task

_Link to the GitHub Issue this PR closes — e.g. Closes #4_

---

## Motivation & Context

Why this work was needed and how it fits into the overall project.

---

## How Has This Been Tested?

_Describe how you verified your work before opening this PR:_

- Checked on desktop (Chrome / Firefox)
- Checked on mobile view (DevTools responsive mode)
- CTA buttons scroll to correct sections
- Fetch returns data and renders correctly
- Form validation triggers as expected
- No console errors

---

## Type of Change

- [ ] New feature — new section/component added
- [ ] Bug fix — something was broken and is now fixed
- [ ] UI fix — styling or layout correction

---

## Checklist

- [ ] My code follows the agreed folder structure and naming conventions
- [ ] My branch is named correctly (`feat/` or `fix/` prefix)
- [ ] My commits are named correctly (`feat:` or `fix:` prefix)
- [ ] I have read the README.md file
- [ ] I have tested my work on both desktop and mobile view
- [ ] There are no console errors or warnings
- [ ] I have tagged at least all fore mentioned reviewers including the team lead.
- [ ] I have notified the tagged reviewers in the group chat
- [ ] I am NOT merging this PR myself

---

## Meta & Attribution

The `index.html` file contains the following tag in the `<head>`:

```html
<meta name="author" content="TS Academy Group 19" />
```

---

## Deployment

The completed project must be deployed and publicly accessible before the deadline.

> Live link: _Update this before 6 June 2026 deadline_

Recommended free hosting platforms:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

For more on expanding the ESLint configuration for production, see the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and [`typescript-eslint`](https://typescript-eslint.io).
