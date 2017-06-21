#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Production build
ng build --prod

# Copy prebuilt worker into our site
cp node_modules/@angualr/service-worker/bundles/worker-basic.min.js dist/

# Serve
cd dist
http-server
