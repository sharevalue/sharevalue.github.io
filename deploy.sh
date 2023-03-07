#!/usr/bin/env sh

# 에러가 발생될 경우 스크립트 실행을 중지
set -e

# 빌드된 파일이 존재하는 dist 디렉터리로 이동
cd dist

# CNAME 파일을 이용해 커스텀 도메인을 지정할 수도 있습니다.
# echo 'www.sharevaluecorp.com' > CNAME

today=`date +%Y-%m-%d`

git init

git switch branch master

git checkout -b deploy$today
git rebase --onto master deploy$today

git add -A
git commit -m "deploy gh-pages $today"

git remote add origin https://github.com/sharevalue/sharevalue.github.io.git

# sharevalue.github.io 레포에 배포, gh-pages 브랜치 기준
#git push -f git@github.com:sharevalue/sharevalue.github.io.git master
git push -f origin deploy$today

cd -
