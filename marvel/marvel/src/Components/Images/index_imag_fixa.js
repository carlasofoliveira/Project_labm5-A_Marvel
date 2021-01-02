/*import Luffy from "./Luffy.png";
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
export default class Images {
}*/

/*import Luffy from "./Luffy.png";
import Sanji from "./Sanji.png";
import Usopp from "./Usopp.png";
import Zorro from "./zorro.png";
import Nami from "./Nami.png";
import Brooks from "./brooks.png";
import onePiece from "./onepiece.png";
import api_marvel from "../../api/api_marvel";


//buscar imagens atraves do endpoint
const resp = api_marvel.get('characters');
let response_results;
resp.then((response) => {
	response_results = response.data.data.results;
	console.log(response_results);
	console.log(response_results[14].thumbnail.path + '/portrait_small.' + response_results[14].thumbnail.extension);
}, (error) => {
	console.log(error);
});
// processar o json e fazer uma lista com as imagens

// retirar o url das imagens do json e guardar num array com 7 posicoes

export let images = [
	{
		name: "Luffy",
		pic: response_results[14].thumbnail.path + '/portrait_small.' + response_results[14].thumbnail.extension,
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
export default class Images {
} */

import {Table} from "reactstrap";
import React from "react";

<Table responsive>
	<thead>
	<tr>
		<th>#</th>
		<th>Imagem</th>
		<th>Nome</th>
		<th>Descrição</th>
		<th>Links videos</th>

	</tr>
	</thead>
	<tbody>
	<tr>
		<th scope="row">1</th>
		<td>Table cell</td>
		<td>Table cell</td>
		<td>Table cell</td>
		<td>Table cell</td>

	</tr>
	<tr>
		<th scope="row">2</th>
		<td>Table cell</td>
		<td>Table cell</td>
		<td>Table cell</td>
		<td>Table cell</td>

	</tr>
	<tr>
		<th scope="row">3</th>
		<td>Table cell</td>
		<td>Table cell</td>
		<td>Table cell</td>
		<td>Table cell</td>

	</tr>
	</tbody>
</Table>