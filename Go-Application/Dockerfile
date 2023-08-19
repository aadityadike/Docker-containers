# Use the base image 'golang:1.21-bookworm' as the starting point for building our image.
FROM golang:1.21-bookworm as build

# Set the working directory inside the container to /app.
WORKDIR /app

# Create a user with user ID 1001 named 'aditya'.
RUN useradd -u 1001 aditya

# Copy the go.mod and go.sum files from the current directory into the container's /app directory.
COPY go.mod go.sum ./

# Use the 'go mod download' command to download the dependencies specified in go.mod.
# This step leverages caching to speed up the dependency download process.
RUN --mount=type=cache,target=/go/pkg/mod \
    --mount=type=cache,target=/root/.cache/go-build \
    go mod download

# Copy the rest of the application source code from the current directory into the container's /app directory.
COPY . .

# Build the Go application inside the container using the 'go build' command.
# Several flags are provided to control the build process:
# -ldflags: Set linker flags, including making the binary externally linked and using static libraries.
# -tags: Include additional build tags, in this case, 'netgo'.
# -o: Specify the name of the output binary as 'golang-api'.
RUN go build \
    -ldflags="-linkmode external -extldflags -static" \
    -tags netgo \
    -o golang-api

# Start a new stage of the Dockerfile using the 'scratch' base image.
FROM scratch

# Set an environment variable 'GIN_MODE' to 'release'.
# This environment variable will affect the behavior of the GIN web framework used in the application.
ENV GIN_MODE release

# Copy the '/etc/passwd' file from the 'build' stage to the current stage.
# This is needed to include user information in the final image.
COPY --from=build /etc/passwd /etc/passwd

# Copy the 'golang-api' binary from the 'build' stage into the current stage's root directory.
COPY --from=build /app/golang-api golang-api

# Set the user context to 'aditya' (the user created in the 'build' stage).
USER aditya

# Expose port 8080. This is a hint for users of the image to know which port the application listens on.
EXPOSE 8080

# Specify the command to run when a container based on this image is started.
# In this case, it's running the 'golang-api' binary.
CMD [ "./golang-api" ]
