package car

import "fmt"
// se tiene en cuenta las mayusculas y las minusculas 
// My Public Car
type Car struct {
	Brand string
	Year  int
}

type carPrivate struct {
	brand string
	year  int
}

// PrinteMessage es para imprimir un mensaje
func PrintMessage(text string) {
	fmt.Println(text)
}

func printMessage(text string) {
	fmt.Println(text)
}