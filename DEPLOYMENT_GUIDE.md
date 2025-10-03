# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages and make it live on the internet!

## 📋 Prerequisites

- [x] GitHub account
- [x] Git installed on your computer
- [x] Your portfolio files ready

## 🔧 Step 1: Prepare Your Repository

### 1.1 Initialize Git Repository (if not already done)
```bash
cd C:\Users\Jeno\JenoPortFolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### 1.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository" (+ icon)
3. Repository name: `jenoprofile` or `jeno-portfolio`
4. Description: "Professional Portfolio Website"
5. Make it **Public** (required for free GitHub Pages)
6. ✅ Do NOT initialize with README (you already have one)
7. Click "Create repository"

### 1.3 Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/JenoPro/your-repo-name.git
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click "Settings" tab**
3. **Scroll down to "Pages" section** (left sidebar)
4. **Source**: Deploy from a branch
5. **Branch**: Select `main`
6. **Folder**: Select `/ (root)`
7. **Click "Save"**

🎉 **Your site will be available at**: `https://jenopro.github.io/your-repo-name/`

## 📧 Step 3: Configure EmailJS (IMPORTANT!)

Your contact form needs EmailJS setup to work on the live site:

### 3.1 Set up EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create free account
3. Connect your Gmail: **laurentejeno73@gmail.com**

### 3.2 Get Your Credentials
You need these 3 values:
- **Public Key** (e.g., `user_abc123`)
- **Service ID** (e.g., `service_gmail`)
- **Template ID** (e.g., `template_contact`)

### 3.3 Update Your Code
Edit `Script/script.js` and replace these placeholders:

```javascript
// Line ~5: Replace YOUR_PUBLIC_KEY
emailjs.init('user_abc123def456'); // Your actual public key

// Line ~65: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('service_gmail_123', 'template_contact_456', templateParams)
```

### 3.4 Email Template Setup
In EmailJS, create template with:
- **To Email**: `laurentejeno73@gmail.com`
- **Subject**: `New Portfolio Contact: {{subject}}`
- **Content**:
```
New message from your portfolio:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

Sent at: {{timestamp}}
```

## 🔄 Step 4: Deploy Updates

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Changes will be live in 1-2 minutes!

## ✅ Step 5: Verification Checklist

### Before Going Live:
- [ ] EmailJS configured with real credentials
- [ ] All images loading properly
- [ ] Contact form tested and working
- [ ] All links working correctly
- [ ] Mobile responsive design tested
- [ ] All animations working smoothly

### After Deployment:
- [ ] Visit your live URL
- [ ] Test contact form with real email
- [ ] Check on mobile devices
- [ ] Test all project links
- [ ] Verify social media links

## 🔗 Your Live URLs

After deployment, your portfolio will be accessible at:
- **Primary**: `https://jenopro.github.io/your-repo-name/`
- **Custom Domain** (optional): You can later add a custom domain

## 🚨 Common Issues & Solutions

### Issue: "404 - File not found"
- ✅ **Solution**: Make sure your main file is named `index.html`

### Issue: Contact form not working
- ✅ **Solution**: Configure EmailJS with real credentials (not placeholders)

### Issue: Images not loading
- ✅ **Solution**: Use relative paths (./Image/filename.jpg)

### Issue: Styles not applying
- ✅ **Solution**: Check CSS file paths are relative (./Style/filename.css)

### Issue: Site not updating
- ✅ **Solution**: Wait 1-2 minutes, or check GitHub Actions for build status

## 🎯 Final Steps

1. **Deploy to GitHub** ✅
2. **Configure EmailJS** ✅  
3. **Test everything** ✅
4. **Share your portfolio** 🎉

## 📱 Sharing Your Portfolio

Once live, you can share:
- On LinkedIn profile
- In email signatures  
- On business cards
- With potential employers
- On social media

---

**🎉 Congratulations!** Your professional portfolio is now live on the internet!

**Need help?** Check GitHub Pages documentation or EmailJS support.

**Your next steps:**
1. Complete EmailJS setup
2. Test the live site thoroughly
3. Share your amazing portfolio with the world! 🌟