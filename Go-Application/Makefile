DOCKERHUB_REPO:=docker push adityadike1/golang-application

TAG?=0
.PHONY: build
build:
	docker build --f ./Dockerfile \
		-t api-golang \

.PHONY: push-TAG
push-TAG:
	docker push ${DOCKERHUB_REPO}:${TAG}
