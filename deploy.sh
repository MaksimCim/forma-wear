#!/bin/sh
# Пересборка сайта и публикация на GitHub Pages (ветка gh-pages)
set -e
cd "$(dirname "$0")"

echo "== build =="
npm run build

echo "== commit main =="
git add -A
git commit -qm "update: $(date '+%Y-%m-%d %H:%M')" || echo "(no changes)"
git push origin main

echo "== gh-pages =="
git worktree remove ../forma-ghpages --force 2>/dev/null || true
git worktree prune
git branch -D forma-ghpages gh-pages 2>/dev/null || true
git worktree add --no-checkout ../forma-ghpages
cd ../forma-ghpages
git switch --orphan gh-pages
cp -r ../forma/dist/* .
git add -A
git -c user.name="MaksimCim" -c user.email="maksim.semenov0202@bk.ru" commit -qm "deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages --force
cd ../forma
git worktree remove ../forma-ghpages --force

echo "== done: https://maksimcim.github.io/forma-wear/ =="
