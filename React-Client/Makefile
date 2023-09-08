DOCKERHUB_REPO:=docker push adityadike1/react-client

.PHONY: build
build:
	docker build -t client-react-nginx .

.PHONY: run
run:
	docker run -d \
	--network backend \
	--name client-nginx \
	-p 80:8080 \
	--restart unless-stopped \
	client-react-nginx

.PHONY: push-TAG
push-TAG:
	docker push ${DOCKERHUB_REPO}:${TAG}