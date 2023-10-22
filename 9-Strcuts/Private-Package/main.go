package main

import (
	"fmt"
	"main/9-Strcuts/Private-Package/car"
)

func main() {
	var myCar car.Car // para importar se llama la carpeta y el automaticamente la importa sino se importa desde src
	myCar.Brand = "Ferrari"
	myCar.Year = 2020

	fmt.Println(myCar)

	car.PrintMessage("Funcion Publica")
}