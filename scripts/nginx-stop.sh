#!/usr/bin/env sh
set -eu

PROJECT_ROOT="/home/daniel/Documents/literaciafinanceira"
NGINX_CONF="$PROJECT_ROOT/nginx/nginx.conf"

nginx -p "$PROJECT_ROOT/" -c "$NGINX_CONF" -s stop
