DOCKERHUB_REPO:=docker push adityadike1/golang-application
DATABASE_URL:=postgres://postgres:adityaspostgres@db:5432/dockerPractice

.PHONY: build
build:
	docker build -t api-golang .

.PHONY: run
run:
	docker run -d \
	--name db \
	--network backend \
	-v pgdata:/var/lib/postgresql/data \
	-e POSTGRES_PASSWORD=adityaspostgres \
	-e POSTGRES_DB=dockerPractice \
	-p 5432:5432 \
	--restart unless-stopped \
	ab8fb914369e

	docker run -d \
	--name api-golang \
	--network backend \
	-p 8080:8080 \
	-e DATABASE_URL=${DATABASE_URL} \
	--restart unless-stopped \
	api-golang

.PHONY: push-TAG
push-TAG:
	docker push ${DOCKERHUB_REPO}:${TAG}
