# Variables
GO_CMD=go
GO_BUILD=$(GO_CMD) build
GO_CLEAN=$(GO_CMD) clean
GO_TEST=$(GO_CMD) test
GO_GET=$(GO_CMD) get
GO_RUN_DEV=$(GO_CMD) run
BINARY_NAME=harmony

# Default target
all: build

# Build the executable
build:
	$(GO_BUILD) -o $(BINARY_NAME) -v

# Clean up generated files
clean:
	$(GO_CLEAN)
	rm -f $(BINARY_NAME)

# Run the executable
run:
	$(GO_BUILD) -o $(BINARY_NAME) -v ./
	./$(BINARY_NAME)

# Run development
rd:
	$(GO_RUN_DEV) ./main.go

# Install dependencies
deps:
	$(GO_GET) -v ./

# Run tests
test:
	$(GO_TEST) -v ./

# Run 'go fmt' on all go files
fmt:
	$(GO_CMD) fmt ./...

# Run 'go vet' to check for common mistakes
vet:
	$(GO_CMD) vet ./

vet:
	$(GO_CMD) vet ./
#  "docs_gen": "./swag init -g main.go",
# Run all checks
check: fmt vet test




# Shortcuts
.PHONY: build clean run deps test fmt vet check
