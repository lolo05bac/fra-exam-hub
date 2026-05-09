# Sharing your FRA Exam Hub

The site is 100% static — HTML/CSS/JS — so any free static host works.

## Easiest: Netlify Drop (no account needed for trial)

1. Open https://app.netlify.com/drop
2. Drag this entire `exam-app` folder onto the drop zone
3. Copy the public URL it gives you

## Vercel (one command)

```bash
cd "/Users/laurensbac/Desktop/FInancial reporting/exam-app"
npx vercel --prod
```

Follow the prompts (sign up free, accept defaults). You'll get a `.vercel.app` URL.

## GitHub Pages (most permanent)

```bash
cd "/Users/laurensbac/Desktop/FInancial reporting/exam-app"
git init
git add .
git commit -m "Initial commit"
gh repo create fra-exam-hub --public --source=. --push
gh repo edit --enable-pages --pages-branch main
```

Then visit `https://<your-username>.github.io/fra-exam-hub/`.

## Quick local preview only (just you on this machine)

```bash
cd "/Users/laurensbac/Desktop/FInancial reporting/exam-app"
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Share with people on the same WiFi

```bash
cd "/Users/laurensbac/Desktop/FInancial reporting/exam-app"
python3 -m http.server 8000
# then check your local IP:
ipconfig getifaddr en0
# others on the same WiFi visit: http://<that-IP>:8000
```
