@echo off
echo 🚀 Deploying Portfolio to GitHub Pages...
echo.

echo ✅ Adding all files to git...
git add .

echo ✅ Committing changes...
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Update portfolio

git commit -m "%commit_message%"

echo ✅ Pushing to GitHub...
git push origin main

echo.
echo 🎉 Deployment complete!
echo Your portfolio will be live in 1-2 minutes at:
echo https://jenopro.github.io/JenoProfile/
echo.
pause