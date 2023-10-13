package main

import (
	"fmt"
	"math"
)

func holaMundo(number string) {
	fmt.Println("Hola Mundo", number)
}

func returnValue(a int) int {
	return a * 2
} // para retornar 1 o más valores

func main() {
	holaMundo("1")

	var value int = returnValue(75)
	fmt.Println("Value:", value)
}

func areaCirculo(radio float64) float64 {
	return math.Pi * radio * radio
}
func areaRectangulo(base float64, altura float64) float64 {
	return base * altura
}

func areaTrapezoide(B float64, b float64, h float64) float64 {
	return h * (B + b) / 2
}

func calculo() {
	fmt.Printf("Circulo %.2f \n", areaCirculo(2))
	fmt.Printf("Rectangulo %.2f \n", areaRectangulo(5, 10))
	fmt.Printf("Trapezoide %.2f \n", areaTrapezoide(10, 5, 3))

}
