#!/bin/bash

set -euo pipefail

SOURCE_DIR=$( dirname "${BASH_SOURCE[0]}" )

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
cp awscliv2.zip $SOURCE_DIR/
cd SOURCE_DIR
unzip awscliv2.zip
$SOURCE_DIR/aws/install --install-dir $SOURCE_DIR --bin-dir $SOURCE_DIR/bin

export AWS=$SOURCE_DIR/bin/aws