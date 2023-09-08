DOCKERHUB_REPO:=docker push adityadike1/node-application
DATABASE_URL:=postgres://postgres:adityaspostgres@db:5432/dockerPractice

TAG=1.0


.PHONY: build
build:
	docker build . -t api-node:${TAG}


.PHONY: run
run:
	docker run -d \
		--name db \
		--network backend \
		-e POSTGRES_PASSWORD=adityaspostgres \
		-e POSTGRES_DB=dockerPractice \
		-v pgdata:/var/lib/postgresql/data \
		-p 5432:5432 \
		--restart unless-stopped \
		ab8fb914369e

	docker run -d \
		--name api-node \
		--network backend \
		-e DATABASE_URL=${DATABASE_URL} \
		-p 3000:3000 \
		--restart unless-stopped \
		api-node:${TAG}

	
.PHONY: push
push:
	docker push ${DOCKERHUB_REPO}:${TAG}


# .PHONY: push-all
# push-all:
# 	for number in 0 1 2 3 4 5 6 7 8; do \
# 			N=$$number $(MAKE) push-N; \
# 	done