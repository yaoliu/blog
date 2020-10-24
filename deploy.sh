#!/usr/bin/env sh

# throw error
set -e

# build static
# liuyao.me
yarn docs:build
cd docs/.vuepress/dist
echo 'liuyao.me' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f "https://github.com/yaoliu/blog.git" master:gh-pages

cd -

rm -rf docs/.vuepress/dist
