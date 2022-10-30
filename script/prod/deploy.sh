#!/bin/bash -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_DIR="${SCRIPT_DIR}/../.."

function __deploy_proxy {
  pushd services/proxy/
  fly deploy --local-only
  popd
}

function __deploy_api {
  pushd services/api/
  fly deploy --local-only
  popd
}

function __deploy_tasks {
  pushd services/tasks/
  fly deploy --local-only
  popd
}

cd $PROJECT_DIR

__deploy_proxy
__deploy_api
__deploy_tasks

exit 0
