import Luffy from "./Luffy.png";
import Sanji from "./Sanji.png";
import Usopp from "./Usopp.png";
import Zorro from "./zorro.png";
import Nami from "./Nami.png";
import Brooks from "./brooks.png";
import onePiece from "./onepiece.png";
import api_marvel from "../../api/api_marvel";

//buscar imagens atraves do endpoint
const resp = api_marvel.get('characters');
resp.then((response) => {
	console.log(response);
}, (error) => {
	console.log(error);
});
// processar o json e fazer uma lista com as imagens

// retirar o url das imagens do json e guardar num array com 7 posicoes
//

export let images = [
	{
		name: "Luffy",
		pic: Luffy,
		flipped: false,
	},
	{
		name: "Sanji",
		pic: Sanji,
		flipped: false,
	},
	{
		name: "Usopp",
		pic: Usopp,
		flipped: false,
	},
	{
		name: "Zorro",
		pic: Zorro,
		flipped: false,
	},
	{
		name: "Nami",
		pic: Nami,
		flipped: false,
	},
	{
		name: "Brooks",
		pic: Brooks,
		flipped: false,
	},
	{
		name: "Luffy",
		pic: Luffy,
		flipped: false,
	},
	{
		name: "Sanji",
		pic: Sanji,
		flipped: false,
	},
	{
		name: "Usopp",
		pic: Usopp,
		flipped: false,
	},
	{
		name: "Zorro",
		pic: Zorro,
		flipped: false,
	},
	{
		name: "Nami",
		pic: Nami,
		flipped: false,
	},
	{
		name: "Brooks",
		pic: Brooks,
		flipped: false,
	},
];

export const blankCard = onePiece;
