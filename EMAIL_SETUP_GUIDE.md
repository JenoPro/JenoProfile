# 📧 Email Setup Guide for Contact Form

This guide will help you set up EmailJS to receive emails from your contact form directly to your Gmail account: **laurentejeno73@gmail.com**

## 🚀 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 📋 Step 2: Set up Email Service

1. **Go to Email Services:**
   - In your EmailJS dashboard, click "Email Services"
   - Click "Add New Service"

2. **Choose Gmail:**
   - Select "Gmail" as your email service
   - Click "Connect Account"
   - Sign in with your Gmail account: **laurentejeno73@gmail.com**
   - Grant permissions to EmailJS

3. **Note your Service ID:**
   - After connecting, you'll see a Service ID (e.g., `service_abc123`)
   - **Copy this Service ID** - you'll need it later!

## 📝 Step 3: Create Email Template

1. **Go to Email Templates:**
   - Click "Email Templates" in your dashboard
   - Click "Create New Template"

2. **Configure Template:**
   - **Template Name:** "Portfolio Contact Form"
   - **From Name:** `{{from_name}}`
   - **From Email:** `{{from_email}}`
   - **To Email:** `laurentejeno73@gmail.com`
   - **Subject:** `New Portfolio Contact: {{subject}}`

3. **Email Content:**
   ```
   You have received a new message from your portfolio website!

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}

   ---
   This email was sent automatically from your portfolio contact form.
   Reply directly to this email to respond to {{from_name}}.
   ```

4. **Save Template:**
   - Click "Save"
   - **Copy your Template ID** (e.g., `template_xyz789`)

## 🔑 Step 4: Get Public Key

1. **Go to Integration:**
   - Click "Integration" or "Account" in your dashboard
   - Find your **Public Key** (e.g., `user_abc123def456`)
   - **Copy this Public Key**

## ⚙️ Step 5: Update Your Code

1. **Open your script.js file**
2. **Replace the placeholder values:**

   ```javascript
   // Replace 'YOUR_PUBLIC_KEY' with your actual public key
   emailjs.init('user_abc123def456'); // Your actual public key here

   // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID'
   emailjs.send('service_abc123', 'template_xyz789', templateParams)
   ```

3. **Final code should look like:**
   ```javascript
   emailjs.init('user_abc123def456');
   // ... later in the code ...
   emailjs.send('service_abc123', 'template_xyz789', templateParams)
   ```

## ✅ Step 6: Test Your Contact Form

1. **Open your website**
2. **Fill out the contact form:**
   - Enter a test name
   - Use your own email as sender
   - Add a test subject and message
   - Click "Send Message"

3. **Check your Gmail:**
   - You should receive the email within a few seconds
   - The email will be from the sender's email address
   - You can reply directly to respond to them

## 🔧 Troubleshooting

### Common Issues:

1. **"EmailJS is not defined" error:**
   - Make sure the EmailJS CDN is loaded before your script
   - Check browser console for loading errors

2. **Email not received:**
   - Check your spam folder
   - Verify all IDs are correct (Service ID, Template ID, Public Key)
   - Test with EmailJS dashboard test feature first

3. **Form shows error message:**
   - Check browser console for detailed error messages
   - Verify your EmailJS account is active
   - Ensure Gmail service is properly connected

### Test Template in EmailJS:

1. Go to your template in EmailJS dashboard
2. Click "Test it"
3. Fill in test values and send
4. Check if you receive the test email

## 📧 How It Works

1. **User fills form** → Form data is captured
2. **EmailJS processes** → Sends email using your Gmail account
3. **You receive email** → At laurentejeno73@gmail.com
4. **You can reply** → EmailJS preserves the sender's email for replies

## 🚀 Free Plan Limits

EmailJS free plan includes:
- **200 emails per month**
- **2 email services**
- **2 email templates**

This should be more than enough for a portfolio website!

---

**Need Help?** 
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Contact their support team if you encounter issues

**Your Configuration:**
- ✅ Service: Gmail (laurentejeno73@gmail.com)
- ✅ Template: Portfolio Contact Form
- ✅ Integration: Ready to use

Once you've completed these steps, your contact form will automatically send emails to your Gmail account whenever someone submits a message through your portfolio website!