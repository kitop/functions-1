exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World from somewhere new";

  return {
    statusCode: 200,
    body: `Hello, ${name} :)`
  };
};
