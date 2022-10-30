#!/bin/bash -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_DIR="${SCRIPT_DIR}/../.."

function __prepare_db {
  echo "preparing a database is not implemented..."
  # TODO:
  #  - create postgres
  #  - create databases for services
  #  - seed data or recover from backup
}

function __prepare_service {
  fly apps list | grep rems-$1 &>/dev/null
  if [[ $? -eq 0 ]]; then
    pushd services/$1/
    fly apps create --name rems-$1
    popd
  fi
}

cd $PROJECT_DIR

__prepare_db

__prepare_service "proxy"
__prepare_service "api"
__prepare_service "tasks"

exit 0
