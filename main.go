package main

import (
	"flag"
	"log"
	"net/http"
)

var dir = flag.String("dir", "", "dir containing static files to serve")
var port = flag.String("port", "", "port on which to serve content")

func main() {
	flag.Parse()

	log.Printf("Launching...\ndir: %v\nport: %v\n", *dir, *port)
	fsHandler := http.FileServer(http.Dir(*dir))
	http.Handle("/", fsHandler)

	if err := http.ListenAndServe(":"+*port, nil); err != nil {
		log.Fatalf("server error: %v\nexiting...", err)
	}
}