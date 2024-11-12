package main

import (
	"fmt"
	"time"
)

func main() {
	for {
		fmt.Print("\rHello, World!")
		time.Sleep(1 * time.Second)
		
		fmt.Print("\r                ")
		time.Sleep(1 * time.Second)
	}
}
