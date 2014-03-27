#!/bin/bash

GH=gh-pages
M=master

git checkout $GH
git merge $M 
git push origin $GH

git checkout $M 
