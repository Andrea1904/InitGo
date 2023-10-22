// o clases

package main

import "fmt"

type car struct { // tipo de dato
	brand   string
	year    int
	seating int
	color   string
	owner   string
}

func main() {
	myCar := car{brand: "Ford", year: 2018, seating: 10, color: "Rojo", owner: "Eliaz Bobadilla"}
	fmt.Println("Los Datos del carro son:", myCar)

	var myOtherCar car
	myOtherCar.brand = "Toyota"
	fmt.Println(myOtherCar)

}
