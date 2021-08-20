#!/bin/bash

set -euo pipefail

SOURCE_DIR=$( dirname "${BASH_SOURCE[0]}" )
if $SOURCE_DIR/package-check.sh $TRAVIS_COMMIT_RANGE $TARGET; then
    echo "Running job for $TARGET..."
    cd $TARGET
    yarn
    yarn run build
else
    echo "No changes detected for $TARGET."
fi