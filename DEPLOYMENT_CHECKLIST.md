# ✅ Pre-Deployment Checklist

## 🔧 Required Setup Before Going Live

### 1. EmailJS Configuration (CRITICAL!)
- [ ] Create EmailJS account at https://emailjs.com
- [ ] Connect Gmail account: laurentejeno73@gmail.com  
- [ ] Get Public Key, Service ID, and Template ID
- [ ] Update Script/script.js with real credentials (replace YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID)
- [ ] Test contact form locally

### 2. Repository Setup
- [ ] Create GitHub repository (public)
- [ ] Repository name: `JenoProfile` or similar
- [ ] Initialize with main branch

### 3. Content Review
- [ ] All project images are optimized and loading
- [ ] All project links are working
- [ ] Social media links are correct
- [ ] Email address is correct (laurentejeno73@gmail.com)
- [ ] Phone number is correct (+639473430196)

## 🚀 Deployment Steps

### Step 1: Push to GitHub
```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial portfolio deployment"

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/JenoPro/JenoProfile.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Source: "Deploy from a branch"
5. Branch: "main"
6. Folder: "/ (root)"
7. Click "Save"

### Step 3: Wait for Deployment
- ⏱️ Initial deployment: 5-10 minutes
- 🌐 Your site will be available at: `https://jenopro.github.io/JenoProfile/`

## 🧪 Post-Deployment Testing

### Test on Live Site:
- [ ] Website loads properly
- [ ] All animations work
- [ ] Projects section displays correctly
- [ ] Images load on all devices
- [ ] Contact form works (sends actual emails)
- [ ] Mobile responsiveness
- [ ] All external links work

### Contact Form Testing:
1. [ ] Fill out contact form with test data
2. [ ] Check for loading animation
3. [ ] Check for success message
4. [ ] Verify email received at laurentejeno73@gmail.com
5. [ ] Test error handling (try with invalid email)

## 📱 Performance Optimization

### Recommended Checks:
- [ ] Test loading speed (should be < 3 seconds)
- [ ] Test on different devices (mobile, tablet, desktop)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check console for any JavaScript errors

## 🔄 Update Process

For future updates:
```bash
# Make your changes
git add .
git commit -m "Update description"
git push origin main
```

Or use the included deploy.bat script:
```bash
deploy.bat
```

## 🚨 Troubleshooting

### Common Issues:

**Site not loading:**
- Check GitHub Pages is enabled
- Ensure index.html exists in root
- Wait 5-10 minutes for initial deployment

**Contact form not working:**
- Verify EmailJS credentials are updated
- Check browser console for errors
- Test EmailJS template directly

**Images not showing:**
- Verify image paths use `./Image/filename.jpg`
- Check image files are committed to git
- Ensure proper file extensions

**Styles not applying:**
- Check CSS file paths are relative
- Clear browser cache
- Check for CSS syntax errors

## 📧 Support

If you need help:
1. Check GitHub Pages documentation
2. Review EmailJS setup guide
3. Check browser developer console for errors

---

## 🎯 Quick Commands Reference

**Deploy for first time:**
```bash
git init
git add .
git commit -m "Initial deployment"
git remote add origin https://github.com/JenoPro/JenoProfile.git
git push -u origin main
```

**Update existing deployment:**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

**Your Live URL:**
`https://jenopro.github.io/JenoProfile/`

---

✅ **Complete this checklist before deployment to ensure everything works perfectly!**