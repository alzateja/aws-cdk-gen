# Remove old build
rm -rf function.zip
# Build as a Linux file.
GOOS=linux go build main.go
# Zip up our code.
zip function.zip main
