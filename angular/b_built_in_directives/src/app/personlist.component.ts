import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector:"person-list",
	standalone:true,
	imports:[CommonModule],
	templateUrl:"./personlist.component.html"
})
export class PersonList {
	
	list = [
	{
		"firstname": "Drew",
		"lastname": "Cannon"
	},
	{
		"firstname": "Kerry",
		"lastname": "Kinney"
	},
	{
		"firstname": "Hillary",
		"lastname": "Mcpherson"
	},
	{
		"firstname": "Eleanor",
		"lastname": "Leonard"
	},
	{
		"firstname": "Salvador",
		"lastname": "Thompson"
	},
	{
		"firstname": "Chaney",
		"lastname": "Mcpherson"
	},
	{
		"firstname": "Eagan",
		"lastname": "Barton"
	},
	{
		"firstname": "Stuart",
		"lastname": "Duncan"
	},
	{
		"firstname": "Fredericka",
		"lastname": "Joyce"
	},
	{
		"firstname": "Miriam",
		"lastname": "Kramer"
	},
	{
		"firstname": "Debra",
		"lastname": "Nolan"
	},
	{
		"firstname": "Lois",
		"lastname": "Chandler"
	},
	{
		"firstname": "Porter",
		"lastname": "Bailey"
	},
	{
		"firstname": "Josephine",
		"lastname": "Rivas"
	},
	{
		"firstname": "Tallulah",
		"lastname": "Perkins"
	},
	{
		"firstname": "Hu",
		"lastname": "Mccullough"
	},
	{
		"firstname": "Caldwell",
		"lastname": "Dejesus"
	},
	{
		"firstname": "Nomlanga",
		"lastname": "Santana"
	},
	{
		"firstname": "Jaime",
		"lastname": "Schwartz"
	},
	{
		"firstname": "Astra",
		"lastname": "Mcintyre"
	},
	{
		"firstname": "Zeus",
		"lastname": "Keller"
	},
	{
		"firstname": "Clementine",
		"lastname": "Delacruz"
	},
	{
		"firstname": "Kiara",
		"lastname": "Woodard"
	},
	{
		"firstname": "Dalton",
		"lastname": "Noel"
	},
	{
		"firstname": "Stella",
		"lastname": "Herring"
	},
	{
		"firstname": "Benjamin",
		"lastname": "Gill"
	},
	{
		"firstname": "Zorita",
		"lastname": "David"
	},
	{
		"firstname": "Judith",
		"lastname": "Palmer"
	},
	{
		"firstname": "Simon",
		"lastname": "Sanders"
	},
	{
		"firstname": "Wing",
		"lastname": "Mcintosh"
	},
	{
		"firstname": "Yen",
		"lastname": "Rollins"
	},
	{
		"firstname": "Hamilton",
		"lastname": "Pearson"
	},
	{
		"firstname": "Alana",
		"lastname": "Castro"
	},
	{
		"firstname": "Rhonda",
		"lastname": "Mitchell"
	},
	{
		"firstname": "Kyle",
		"lastname": "Walter"
	},
	{
		"firstname": "Lacota",
		"lastname": "Hudson"
	},
	{
		"firstname": "Justin",
		"lastname": "Ewing"
	},
	{
		"firstname": "Samuel",
		"lastname": "Douglas"
	},
	{
		"firstname": "Amir",
		"lastname": "Hardy"
	},
	{
		"firstname": "Conan",
		"lastname": "Page"
	},
	{
		"firstname": "Serina",
		"lastname": "Weiss"
	},
	{
		"firstname": "Ferris",
		"lastname": "Gregory"
	},
	{
		"firstname": "Jenna",
		"lastname": "Koch"
	},
	{
		"firstname": "Blossom",
		"lastname": "Bauer"
	},
	{
		"firstname": "Amy",
		"lastname": "Hamilton"
	},
	{
		"firstname": "Indigo",
		"lastname": "Snyder"
	},
	{
		"firstname": "Carolyn",
		"lastname": "Lopez"
	},
	{
		"firstname": "Summer",
		"lastname": "James"
	},
	{
		"firstname": "Merrill",
		"lastname": "White"
	},
	{
		"firstname": "Drew",
		"lastname": "Mosley"
	},
	{
		"firstname": "Isaac",
		"lastname": "Huber"
	},
	{
		"firstname": "Janna",
		"lastname": "Conway"
	},
	{
		"firstname": "Bert",
		"lastname": "Wallace"
	},
	{
		"firstname": "Nadine",
		"lastname": "Fisher"
	},
	{
		"firstname": "Honorato",
		"lastname": "Mccray"
	},
	{
		"firstname": "Ray",
		"lastname": "Lang"
	},
	{
		"firstname": "Sonia",
		"lastname": "Wilkerson"
	},
	{
		"firstname": "Ryder",
		"lastname": "Walton"
	},
	{
		"firstname": "Yetta",
		"lastname": "Camacho"
	},
	{
		"firstname": "Neve",
		"lastname": "Hansen"
	},
	{
		"firstname": "Lyle",
		"lastname": "Moses"
	},
	{
		"firstname": "Aimee",
		"lastname": "Hardy"
	},
	{
		"firstname": "Perry",
		"lastname": "Harper"
	},
	{
		"firstname": "Alisa",
		"lastname": "Benton"
	},
	{
		"firstname": "Josiah",
		"lastname": "Romero"
	},
	{
		"firstname": "Wanda",
		"lastname": "Bolton"
	},
	{
		"firstname": "Hiram",
		"lastname": "Sims"
	},
	{
		"firstname": "Fletcher",
		"lastname": "Skinner"
	},
	{
		"firstname": "Fallon",
		"lastname": "Burks"
	},
	{
		"firstname": "Faith",
		"lastname": "Allen"
	},
	{
		"firstname": "Alexander",
		"lastname": "Ortiz"
	},
	{
		"firstname": "Haviva",
		"lastname": "Doyle"
	},
	{
		"firstname": "Lisandra",
		"lastname": "Marks"
	},
	{
		"firstname": "Jermaine",
		"lastname": "Harding"
	},
	{
		"firstname": "Nathaniel",
		"lastname": "Thornton"
	},
	{
		"firstname": "Colby",
		"lastname": "Waters"
	},
	{
		"firstname": "Echo",
		"lastname": "Montgomery"
	},
	{
		"firstname": "Nathaniel",
		"lastname": "Hardy"
	},
	{
		"firstname": "Destiny",
		"lastname": "Atkinson"
	},
	{
		"firstname": "Rae",
		"lastname": "Buckner"
	},
	{
		"firstname": "Ruby",
		"lastname": "Jones"
	},
	{
		"firstname": "Zahir",
		"lastname": "Mills"
	},
	{
		"firstname": "Leo",
		"lastname": "Medina"
	},
	{
		"firstname": "Graiden",
		"lastname": "Petersen"
	},
	{
		"firstname": "Dennis",
		"lastname": "Faulkner"
	},
	{
		"firstname": "Lawrence",
		"lastname": "Mendez"
	},
	{
		"firstname": "Cathleen",
		"lastname": "Porter"
	},
	{
		"firstname": "Scarlett",
		"lastname": "Mccarty"
	},
	{
		"firstname": "Allistair",
		"lastname": "Williams"
	},
	{
		"firstname": "Ferdinand",
		"lastname": "Stokes"
	},
	{
		"firstname": "Signe",
		"lastname": "Salinas"
	},
	{
		"firstname": "Tyrone",
		"lastname": "Adams"
	},
	{
		"firstname": "Camilla",
		"lastname": "Torres"
	},
	{
		"firstname": "Winifred",
		"lastname": "Wilder"
	},
	{
		"firstname": "Erica",
		"lastname": "Hartman"
	},
	{
		"firstname": "Stone",
		"lastname": "Nixon"
	},
	{
		"firstname": "Madeline",
		"lastname": "Wolf"
	},
	{
		"firstname": "Margaret",
		"lastname": "Whitehead"
	},
	{
		"firstname": "Joshua",
		"lastname": "Robinson"
	},
	{
		"firstname": "Sacha",
		"lastname": "Bernard"
	}
]
}