#!/bin/bash

npm test > test.txt

hello="$(grep  ^Statements[[:space:]]*:[[:space:]]*[0-9]* test.txt)"

grep ^Statements[[:space:]]*:[[:space:]]*[0-9]*% test.txt > test2.txt

 sed -i 's/Statements[[:space:]]*:[[:space:]]*//gi' test2.txt 
 
 sed -i 's/%[[:space:]]*([[:space:]]*[0-9]*\/[0-9]*[[:space:]])//gi' test2.txt
 
output="$(cat test2.txt)"


if [ $output -gt 1000 ]
then
exit 0
else
exit 1
fi