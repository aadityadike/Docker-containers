package database

import (
	"context"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"os"
	"time"
)

var conn *pgxpool.Pool

// InitDB initializes the database pool and returns an error if any.
func InitDB(connString string) error {
	var err error
	conn, err = pgxpool.New(context.Background(), connString)
	if err != nil {
		return err
	}
	return nil
}

// GetTime retrieves the current time from the database.
func GetTime(ctx *gin.Context) time.Time {
	var tm time.Time

	err := conn.QueryRow(ctx, "SELECT NOW() as now;").Scan(&tm)
	if err != nil {
		fmt.Fprintf(os.Stderr, "QueryRow failed: %v\n", err)
		os.Exit(1)
	}
	return tm
}
