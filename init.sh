branch=`git rev-parse --abbrev-ref HEAD`
echo "Your working branch is : $branch"
git status
git add .
echo "Enter your commit: "
read msg
git commit -m "$msg"
git pull origin $branch
git push origin $branch