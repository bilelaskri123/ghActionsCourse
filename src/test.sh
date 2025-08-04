#!/bin/bash
# This is a simple test script for the greet function

# src/test.sh
OUTPUT=$(node - e "require('./app').greet('Bilel')")
EXPECTED_OUTPUT="Hello, Bilel!"
if [ "$OUTPUT" == "$EXPECTED_OUTPUT" ]; then
  echo "Test passed!"
  exit 0
else
  echo "Test failed! Expected '$EXPECTED_OUTPUT' but got '$OUTPUT'."
  exit 1
fi