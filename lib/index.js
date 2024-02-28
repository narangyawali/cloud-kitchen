import { chefs } from "@/data/items";

export const getChefName = (dish) => {
	// return chef name form dish
	// return dish.chefId;
	const chef = chefs.find((c) => c.chefId == dish.chefId).name;
	return chef;
};

// Javascript program for the haversine formula

function haversine(lat1, lon1, lat2, lon2) {
	// distance between latitudes
	// and longitudes
	let dLat = ((lat2 - lat1) * Math.PI) / 180.0;
	let dLon = ((lon2 - lon1) * Math.PI) / 180.0;

	// convert to radiansa
	lat1 = (lat1 * Math.PI) / 180.0;
	lat2 = (lat2 * Math.PI) / 180.0;

	// apply formulae
	let a =
		Math.pow(Math.sin(dLat / 2), 2) +
		Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
	let rad = 6371;
	let c = 2 * Math.asin(Math.sqrt(a));
	return rad * c;
}

const convertBase64 = async (file) => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			resolve(fileReader.result);
		};
		fileReader.onerror = () => {
			reject(fileReader.error);
		};
	});
};

function isEmail(emailAdress) {
	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (emailAdress.match(regex)) return true;
	else return false;
}
const fetcher = (arg) => fetch(arg).then((res) => res.json());

export { fetcher, haversine, convertBase64,isEmail };
