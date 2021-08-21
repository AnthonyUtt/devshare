#!/bin/bash

if [[ -z $1 ]]; then
    echo "Base branch cannot be empty!"
    exit 1
fi

if [[ -z $2 ]]; then
    echo "Commit ref cannot be empty!"
    exit 1
fi

if [[ -z $3 ]]; then
    echo "Change path cannot be empty!"
    exit 1
fi

BASE=$1
COMMIT=$2
PATH=$3

BRANCH_POINT_COMMIT=$(git merge-base $BASE $COMMIT)

echo "diff between $COMMIT and $BRANCH_POINT_COMMIT"
git diff --name-only $COMMIT..$BRANCH_POINT_COMMIT | sort -u | uniq | grep $PATH > /dev/null