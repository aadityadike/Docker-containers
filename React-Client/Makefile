DOCKERHUB_REPO:=docker push adityadike1/react-client

TAG?=0
.PHONY: build
build-TAG:
	docker build -f ./Dockerfile\
		-t client-react \
		./

.PHONY: run
run:
	docker run --rm -it --name client client-react

.PHONY: push-TAG
push-TAG:
	docker push ${DOCKERHUB_REPO}:${TAG}