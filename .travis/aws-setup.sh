#!/bin/bash

set -euo pipefail

SOURCE_DIR=$( dirname "${BASH_SOURCE[0]}" )

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
cp awscliv2.zip $SOURCE_DIR/
cd $SOURCE_DIR
unzip awscliv2.zip > /dev/null

ABS_PATH=$(pwd)

$ABS_PATH/aws/install --install-dir $ABS_PATH --bin-dir $ABS_PATH/bin

echo "$ABS_PATH/bin/aws" > awspath