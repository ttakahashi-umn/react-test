FROM ubuntu:latest
LABEL authors="mmashiko"

ENTRYPOINT ["top", "-b"]
