/* Amplify Params - DO NOT EDIT
	API_CEEDESCRIPTION_GRAPHQLAPIENDPOINTOUTPUT
	API_CEEDESCRIPTION_GRAPHQLAPIIDOUTPUT
	API_CEEDESCRIPTION_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = async (event, context, callback) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     // return {
//         // statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//         // body: JSON.stringify('{ "name": "JJJJJ", "author": "kkk" }'),
//     // };
//     callback(null, { "id": "34", "name": "JJJJJ", "author": "kkk" });
// };
require('isomorphic-fetch');
const aws = require('aws-sdk');
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');

const listTempUserDatas = gql(`
 mutation MyMutation {
  createUser(input: {name: "hama"}) {
    id
    name
  }
}
`);

const url = process.env.API_CEEDESCRIPTION_GRAPHQLAPIENDPOINTOUTPUT
const region = process.env.REGION


const params =  {
  "name": "TEST"
}

exports.handler = async (params) => {

  console.log('event: ', params.event);

  const accessToken = params.event.headers.Authorization;

  const client = new AWSAppSyncClient({
    url: url,
    region: region,
    auth: {
      jwtToken: accessToken,
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    },
    disableOffline: true
  })

//   console.log('Reference Time：', new Date(referenceTime))
  console.log('Invoke.');

  try {
    const response = await client.mutate({
            mutation: listTempUserDatas,
            variables: params
        });

   console.log('Invoked.', response);
    return response.data.createUser;
  } catch (err) {
    console.log('error posting to appsync: ', err)

    return {
      id: "ddff",
      name: err,
    }
  }
}
