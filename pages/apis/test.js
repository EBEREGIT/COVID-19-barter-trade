import dbConnect from "../../utils/dbConnect.js"

dbConnect();

export default ((request, response) => {
    return('Done')
});