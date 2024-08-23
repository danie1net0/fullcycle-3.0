FROM node:latest

WORKDIR /home/app

COPY entrypoint.sh /usr/local/bin/entrypoint

RUN chmod +x /usr/local/bin/entrypoint

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/entrypoint"]
