import React from 'react';
import { Table } from 'reactstrap';
//import api_marvel from "../../api/api_marvel";
//import axios from "axios";

const Characterscards = (props) => {
	return (
		<Table responsive>
			<thead>
			<tr>
				<th>#</th>
				<th>Imagem</th>
				<th>Nome</th>
				<th>Descrição </th>
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
	);
}



export default Characterscards;