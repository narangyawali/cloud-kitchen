
import { chefs } from "@/data/items"

export const getChefName=(dish)=>{
	// return chef name form dish 
    // return dish.chefId;
   const chef= chefs.find((c)=> c.chefId == dish.chefId ).name
   return chef
    
}

