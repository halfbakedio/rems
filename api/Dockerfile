FROM devopsfaith/krakend:2.1.2

COPY krakend.json /etc/krakend/krakend.json

EXPOSE 8080

CMD ["/usr/bin/krakend", "run", "-c", "/etc/krakend/krakend.json"]
