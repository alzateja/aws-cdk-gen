rm -rf function.zip
GOOS=linux go build main.go
zip function.zip main