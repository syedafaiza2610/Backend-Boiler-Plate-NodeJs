// service pehle db se uthaega phr filteration , function sub kuch service me hoga

import { getAll, getAllPopulated} from "../db/index.js";

const getData =  () =>{
    return getAllPopulated("category")

}
  

export default getData;