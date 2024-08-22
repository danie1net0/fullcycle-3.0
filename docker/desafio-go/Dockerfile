FROM golang:1.23-alpine as BUILD

WORKDIR /usr/src/app

COPY go.mod main.go ./

RUN go build -o /usr/local/bin/app

FROM scratch as RUN

COPY --from=BUILD /usr/local/bin/app /usr/local/bin/app

ENTRYPOINT ["app"]
