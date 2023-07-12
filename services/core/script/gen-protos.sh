#!/usr/bin/env bash

set -e

grpc_tools_ruby_protoc --ruby_out=. --grpc_out=. lib/proto/core.proto

# the grpc tool is annoying and puts things in a place that isn't what it's
# being asked to do so we need to move files around and fix the require
# statements in the service files.

os="$(uname -s)"

mkdir -p lib/proto/rpc
mv lib/proto/core_*.rb lib/proto/rpc/

# if os is Darwin (macOS) then we need to use sed -i "" instead of just sed -i
if [ "$os" = "Darwin" ]; then
  sed -i "" "s/require .lib\/proto\/core_pb./require 'rpc\/core_pb'/" \
    lib/proto/rpc/core_services_pb.rb
else
  sed -i "s/require .lib\/proto\/core_pb./require 'rpc\/core_pb'/" \
    lib/proto/rpc/core_services_pb.rb
fi
