#!/bin/bash -e

GO_BIN="$(go env GOPATH)"/bin

function __cmd_check {
  ! command -v "$1" &>/dev/null
}

if __cmd_check "$GO_BIN"/golangci-lint; then
  curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh \
    | sh -s -- -b "$GO_BIN" v1.50.1
fi

if __cmd_check "$GO_BIN"/air; then
  go install github.com/cosmtrek/air@latest
fi

