const months = [
	"Enero",
	"Febrero",
	"Marzo",
	"April",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
]

export default function dateInEnglish(date) {
	var dateArr = []
	dateArr = date.split("-")
	var dateInEnglish = `${parseInt(dateArr[2])} ${
		months[parseInt(dateArr[1]) - 1]
	}, ${dateArr[0]}`
	return dateInEnglish
}
