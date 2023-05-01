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

if __cmd_check "$GO_BIN"/pop; then
  go install github.com/gobuffalo/pop/v6/soda@latest
fi

if __cmd_check "$GO_BIN"/grift; then
  go install github.com/gobuffalo/grift@latest
fi

# create databases
pushd services/properties
soda create -e development
soda create -e test
popd
