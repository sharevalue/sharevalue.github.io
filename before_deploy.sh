#!/usr/bin/env sh

if [[ -d dist ]]; then
    echo "Removing dist dir"
    rm -rf dist
fi

git worktree add dist origin/deploy -fB deploy
