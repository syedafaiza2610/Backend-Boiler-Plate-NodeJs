// service pehle db se uthaega phr filteration , function sub kuch service me hoga

import { getAll } from "../db/index.js";

const getData =  () =>{
    return getAll()

}
  

export default getData;