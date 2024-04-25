#!/bin/bash

url="http://localhost:3000/test"

for i in {1..200}; do
  curl "$url"
  sleep 1
done
