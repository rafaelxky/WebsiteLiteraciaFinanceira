#!/bin/bash

cp -r $(pwd)/../Frontend/dist/* /usr/share/nginx/html/
nginx -c "$(pwd)/nginx.conf"