import "dotenv/config";
 const ENV = (process?.env || {});

export const DELETE_DATA_MESSAGE = "User deleted succesfully" ;
export const UPDATE_DATA_MESSAGE = "User updated succesfully" ;
export const INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";
export const POST_DATA_MESSAGE = "Data posted Succesfully";
export const GET_DATA_MESSAGE = "Data get Succesfully";

export default ENV;






