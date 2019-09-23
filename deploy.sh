#!/usr/bin/env sh

# throw error
set -e

if [[  -z "$GITHUB_TOKEN" ]]; then
  exit 0
fi

# build static
npm run build
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f "https://github.com/yaoliu/blog.git" master:gh-pages

cd -

rm -rf .vuepress/dist
