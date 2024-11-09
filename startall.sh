#!/bin/bash

# legacy issue fix
export NODE_OPTIONS=--openssl-legacy-provider

# first of all running backend
cd backend
gleam run &
BACKEND_PID=$!

# running frontend while backend is fully rendered
cd ../frontend
npm start &
FRONTEND_PID=$!

wait $BACKEND_PID $FRONTEND_PID
