#!/bin/bash -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_DIR="${SCRIPT_DIR}/../.."
COMPOSE_FILES="-f ${PROJECT_DIR}/docker-compose.yml"
CONTAINERS="db"
DOCKER_HOST_IP=""
OVERMIND_SERVICES="app,admin,properties"

DOCKER_HOST_IP=${DOCKER_HOST_IP} \
  docker compose ${COMPOSE_FILES} up -d ${CONTAINERS}

PGHOST=${DB_HOST} PGUSER=${DB_USER} PGPASSWORD=${DB_PASSWORD} PGPORT=${DB_PORT} \
  $PROJECT_DIR/script/wait-for-db.sh

OVERMIND_SERVICES=${OVERMIND_SERVICES} overmind start -f ${PROJECT_DIR}/Procfile
