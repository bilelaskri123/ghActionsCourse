#!/bin/bash

# Run the test script
node src/test_greet.js
# Check the exit status of the test script
if [ $? -ne 0 ]; then
    echo "Tests failed."
    exit 1
else
    echo "All tests passed successfully."
    exit 0
fi