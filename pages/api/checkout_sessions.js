// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   const items = JSON.parse(req.body.items).reduce(
//     (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
//     new Map()
//   );
//   if (req.method === "POST") {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: Array.from(items.entries())
//           .map((e) => ({
//             price: e[0].price_id,
//             quantity: e[1],
//           }))
//           .filter((e) => e.price !== ""),
//         mode: "payment",
//         success_url: `${req.headers.origin}/store_confirm`,
//         cancel_url: `${req.headers.origin}/store`,
//         automatic_tax: { enabled: true },
//         ...(JSON.parse(req.body.items).some((e) => e.unlimited === false) && {
//           shipping_address_collection: {
//             allowed_countries: [
//               "US",
//               "CA",
//               "GB",
//               "IE",
//               "JP",
//               "FR",
//               "ES",
//               "PT",
//               "CH",
//               "IT",
//               "DE",
//               "PL",
//               "NO",
//               "SE",
//               "MX",
//             ],
//           },
//         }),
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
