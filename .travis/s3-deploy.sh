#!/bin/bash

set -euo pipefail

BUILD_DIR="./build"
PUBLIC_DIR="./public"

SOURCE_DIR=$( dirname "${BASH_SOURCE[0]}" )

if [ ! -f "$SOURCE_DIR/awspath" ]; then
    echo "Cannot find AWS CLI implementation!"
    exit 2
else
    AWS=$(cat $SOURCE_DIR/awspath)
fi

if $SOURCE_DIR/package-check.sh $TRAVIS_COMMIT_RANGE $TARGET; then
    echo "Running job for $TARGET..."
    cd $TARGET
    if [ ! -d "$BUILD_DIR" ] && [ ! -d "$PUBLIC_DIR" ]; then
        echo "No build artifacts detected!"
        exit 1
    else
        echo "Deploying to S3..."
        if [ -d "$BUILD_DIR" ]; then
            cd $BUILD_DIR
        else
            cd $PUBLIC_DIR
        fi
        echo "Changed directory to $(pwd)"
        $AWS s3 sync . $BUCKET --delete
    fi
else
    echo "No changes detected for $TARGET."
fi