#!/usr/bin/env sh

# 에러가 발생될 경우 스크립트 실행을 중지
#set -e

# 빌드된 파일이 존재하는 dist 디렉터리로 이동
cd dist

# gitdir: C:/git/sharevalue.github.io/.git/worktrees/dist

git add .

today=`date "+%Y-%m-%d %H:%M:%S"`

git commit -m "deploy gh-pages $today"

# sharevalue.github.io 레포에 배포, gh-pages 브랜치 기준
#git push -f git@github.com:sharevalue/sharevalue.github.io.git master
git push -f origin deploy

cd -
