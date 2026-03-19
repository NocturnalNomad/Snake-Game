# Nocturnal Nomad — Game Hub

A browser-based game platform with cyberpunk/neon UI.

## 🎮 Live Games
- **Hungry Snake** — `games/snake.html`
- **Tetris** — `games/tetris.html`
- **2048** — `games/2048.html`

## 📁 Structure
```
nocturnal-nomad/
├── index.html          ← Game hub homepage
├── projects.html       ← Portfolio page
├── contact.html        ← Feedback / contact form
├── CNAME               ← Custom domain config
├── css/
│   └── style.css       ← Global cyberpunk theme
└── games/
    ├── snake.html
    ├── tetris.html
    └── 2048.html
```

## 🚀 Deployment (GitHub Pages)

1. Push all files to your GitHub repo (main branch)
2. Go to **Settings → Pages → Deploy from branch → main → / (root)**
3. Your site is live at `https://username.github.io/repo-name`

## 🌐 Custom Domain (nocturnalnomad.me)

DNS records to add in **Cloudflare**:

| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | yourusername.github.io  |

Then in GitHub: **Settings → Pages → Custom Domain** → enter `nocturnalnomad.me` → Enable HTTPS.

## 📩 Feedback Form
Using Formspree: `https://formspree.io/f/mnjgwrqy`
Submissions go directly to your email.
