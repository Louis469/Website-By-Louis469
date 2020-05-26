git add .
git commit -m $1
echo "commited and saved files."
git push origin
git push heroku master
heroku open
