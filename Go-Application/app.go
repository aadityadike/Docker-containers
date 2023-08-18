package main

import (
	"github.com/aadityadike/Docker-containers/tree/master/Go-Application/database"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"log"
	"os"
	"time"
)

func init() {
	godotenv.Load()

	databaseUrl := os.Getenv("DATABASE")

	if databaseUrl == "" {
		log.Fatal("error in getting database url")
	}

	errDB := database.InitDB(databaseUrl)

	if errDB != nil {
		log.Fatalf("⛔ Unable to connect to database: %v\n", errDB)
	} else {
		log.Println("DATABASE CONNECTED 🥇")
	}

}

func main() {
	r := gin.Default()
	var tm time.Time

	r.GET("/", func(ctx *gin.Context) {
		tm = database.GetTime(ctx)
		ctx.JSON(200, gin.H{
			"api": "golang",
			"now": tm,
		})
	})

	r.GET("/ping", func(ctx *gin.Context) {
		tm = database.GetTime(ctx)
		ctx.JSON(200, "ping")
	})

	r.Run() // listen and serve on 0.0.0.0:8080 (or "PORT" env var)
}
