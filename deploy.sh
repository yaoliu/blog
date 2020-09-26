#!/usr/bin/env sh

# throw error
set -e

# build static
npm run build
cd .vuepress/dist
echo 'liuyao.me' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f "https://github.com/yaoliu/blog.git" master:gh-pages

cd -

rm -rf .vuepress/dist
