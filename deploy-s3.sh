#!/bin/sh

aws s3 rm s3://vue-view/ --recursive
aws s3 cp dist s3://vue-view/ --recursive