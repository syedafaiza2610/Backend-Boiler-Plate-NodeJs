import { getAggregate } from "../db/index.js";



const getData = (query) => {
    console.log("query===>" , query)
    const { pageSize, pageNumber } = query;
    const skip = (pageNumber - 1) * pageSize;

    return getAggregate([
        {
            $match: {
                title: {
                    $in: ['fashion1', 'fashion 5']
                }
            }
        },
        {
            $facet: {
                "data": [
                    { $skip: Number(skip) },
                    { $limit: Number(pageSize) }
                ],
                "metadata": [
                    { $count: "total" }
                ]
            }
        }
    ]);
 }

export default getData;
