package main

import "fmt"

func main() {
	for i := 0; i <= 10; i++ {
		fmt.Println(i)
	}

	// For While
var i int = 0
for i <= 10 {
	fmt.Println(i)
	i++ // contador 
} 

// For Forever seguir iterando hasta la eternidad 
var l int = 0
for {
	fmt.Println(l)
	i++
}

// aqui solo debe utilizar For no se complica con nada más
}

// Operadores logicos y de comparacion 

price := 200
	fmt.Println("price =", price)

	// AND (&&) Operator
	if price > 10 && price < 1600 {
		fmt.Println("price > 10 && price < 1600 is 'true'")
	}

	// Operador AND (&&)
	if price > 10 && price < 200 {
		fmt.Println("price > 10 && price < 200 is 'true'")
	} else {
		fmt.Println("price > 10 && price < 200 is 'false'")
	}

	// Operador OR (||)
	if price > 10 || price < 1600 {
		fmt.Println("price > 10 || price < 1600 is 'true'")
	}

	// Operador OR (||)
	if price > 10 || price > 1600 {
		fmt.Println("price > 10 || price > 1600 is 'true'")
	}

	// Operador NOT (!)
	if !(price < 10) {
		fmt.Println("!(price < 10) is 'true'")
	}



