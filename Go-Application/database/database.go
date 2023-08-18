package database

import (
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"log"
	"time"
)

var connect *pgxpool.Pool

// InitDB initialize the database pool and returns error
func InitDB(connectionString string) {
	con, err := pgxpool.New(context.Background(), connectionString)

	if err != nil {
		return err
	}

	return nil
}

func GetTime(ctx *gin.Context) time.Time {
	var tm time.Time

	err := con.QueryRow(ctx, "SELECT NOW() as now;").Scan(&tm)

	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed:%v \n", err)
	}

	return tm
}
