FROM devopsfaith/krakend:2.1.2

COPY ./config/krakend/krakend.prod.json /etc/krakend/krakend.json

EXPOSE 8080

CMD ["run", "-c", "/etc/krakend/krakend.json"]
