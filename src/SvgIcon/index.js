const requireAll = requireContext => requireContext.keys().map(requireContext)

 const req = require.context('./svg', false, /\.svg$/) 

 console.log("REQ",  requireAll(req))
 requireAll(req);

