DOCKERHUB_REPO:=docker push adityadike1/node-application
DATABASE_URL:=postgres://aditya:adityasdatabase@db:5432/DockerPractice

TAG?=0


.PHONY: build
docker run -d \
		--name api-node:${TAG} \
		--network my-network \
		-e DATABASE_URL=${DATABASE_URL} \
		-p 3000:3000 \
		--restart unless-stopped \
		api-node

.PHONY: push
push:
	docker push ${DOCKERHUB_REPO}:${TAG}

# .PHONY: push-all
# push-all:
# 	for number in 0 1 2 3 4 5 6 7 8; do \
# 			N=$$number $(MAKE) push-N; \
# 	done