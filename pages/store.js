// import Header from "@components/Header";
// import classNames from "classnames";
// import Footer from "@components/Footer";
// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import Head from "next/head";
// import Parallax from "parallax-js";
// import Marquee from "react-fast-marquee";
// import { Rnd } from "react-rnd";
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
// import axios from 'axios';

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// export default function PreviewPage({ products }) {
//   const direction = (i) => (i % 2 ? "" : "-");
//   const [displayed, setDisplayed] = React.useState([]);
//   const [cartShown, showCart] = React.useState(false);
//   const [playAnimation, setPlayAnimation] = React.useState(false);
//   const sceneEl = React.useRef(null);
//   const [cart, setCart] = React.useState([]);

//   const checkout = () => {
//     function openPostPage(url, data) {
//       var form = document.createElement("form");
//       document.body.appendChild(form);
//       form.target = "_blank";
//       form.method = "post";
//       form.action = url;
//       for (var name in data) {
//         var input = document.createElement("input");
//         input.type = "hidden";
//         input.name = name;
//         input.value = data[name];
//         form.appendChild(input);
//       }
//       form.submit();
//       document.body.removeChild(form);
//     }
//     openPostPage("/api/checkout_sessions", { items: JSON.stringify(cart) });
//   };

//   React.useEffect(() => {
//     const parallaxInstance = new Parallax(sceneEl.current, {});

//     parallaxInstance.enable();

//     return () => parallaxInstance.disable();
//   }, []);

//   React.useEffect(() => {
//     const onPageLoad = () => {
//       setPlayAnimation(true);
//     };

//     if (document.readyState === "complete") {
//       onPageLoad();
//     } else {
//       window.addEventListener("load", onPageLoad);
//       return () => window.removeEventListener("load", onPageLoad);
//     }
//   }, []);

//   React.useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);
//     if (query.get("success")) {
//       console.log("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       console.log(
//         "Order canceled -- continue to shop around and checkout when you’re ready."
//       );
//     }
//   }, []);

//   const formatterCAD = new Intl.NumberFormat("en-CA", {
//     maximumSignificantDigits: 4,
//     style: "currency",
//     currency: "CAD",
//   });

//   return (
//     <>
//       <Head>
//         <title>Shop - Reciprocal Ltd.</title>
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@reciprocal-ltd" />
//         <meta name="twitter:title" content="Reciprocal Ltd." />
//         <meta
//           name="twitter:description"
//           content="Obtain high-quality, high-impact samsara."
//         />
//         <meta
//           name="description"
//           content="Reciprocal is an interactive design and development studio based out of Vancouver, Canada. We create interactive media, video games, and provide full development service and management to external clients."
//         />
//         <meta
//           name="twitter:image"
//           content="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.10..00.00.45-store-2.jpg"
//         />
//         <meta name="theme-color" content="blue" />
//       </Head>
//       <Header black />
//       <div className="fixed h-screen w-screen" ref={sceneEl}>
//         <video
//           mute
//           autoPlay
//           playsInline
//           loop
//           className="w-full h-full -z-10 object-cover"
//           data-depth="0.05"
//         >
//           <source
//             src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.10..00.00.26-bg.mp4"
//             type="video/mp4"
//           ></source>
//         </video>
//       </div>
//       <div className="absolute w-screen h-screen overflow-hidden">
//         <div
//           className={classNames(
//             "fixed -top-4 -right-2 text-8xl steps mix-blend-difference text-white hidden md:block",
//             {
//               portfolio: playAnimation,
//               "opacity-0": !playAnimation,
//             }
//           )}
//         >
//           <h2>ZERO</h2>
//           <h2>{cart.length > 0 ? "ONE" : "STORE"}</h2>
//           <h2>{cart.length > 1 ? "TWO" : "STORE"}</h2>
//           <h2>{cart.length > 2 ? "THREE" : "STORE"}</h2>
//           <h2>{cart.length > 3 ? "FOUR" : "STORE"}</h2>
//           <h2>{cart.length > 4 ? "FIVE" : "STORE"}</h2>
//           <h2>{cart.length > 5 ? "SIX" : "STORE"}</h2>
//           <h2>{cart.length > 6 ? "SEVEN" : "STORE"}</h2>
//           <h2>{cart.length > 7 ? "EIGHT" : "STORE"}</h2>
//           <h2>{cart.length > 8 ? "NINE" : "STORE"}</h2>
//           <h2>{cart.length > 9 ? "TEN" : "STORE"}</h2>
//           <h2>STORE</h2>
//           <h2>STORE</h2>
//         </div>
//         <div className="z-10 absolute flex w-screen h-screen justify-center items-center font-sans">
//           <div className="bg-[#0000ff] shadow-[8px_8px_0_1px] shadow-[#00ff00] text-white max-w-screen-md w-full p-4 rotate-3 after:shadow-[8px_8px_0_1px] after:shadow-[#ff0000] after:-rotate-3 after:-z-10 z-10 after:w-full after:h-full after:absolute after:top-0 after:-left-2 after:bg-black relative">
//             {cartShown && (
//               <Rnd
//                 style={{
//                   zIndex: 30,
//                   background: "#004d9c",
//                   border: "4px solid #004d9c",
//                   boxShadow: "2px 2px 0px 0px #000000",
//                   maxWidth: "300px",
//                 }}
//                 className="text-white font-topaz antialiased overflow-y-auto overflow-x-hidden no-scrollbar"
//                 key="cart"
//                 default={{
//                   width: 350,
//                   height: "fit-content",
//                   x: 4 * 100,
//                   y: 4 * 100,
//                 }}
//               >
//                 <div
//                   className="w-full bg-white px-1 flex justify-between sticky top-0 z-10"
//                   style={{ color: "#004d9c" }}
//                 >
//                   cart
//                   <span
//                     className="cursor-pointer"
//                     onTouchEnd={() => showCart(false)}
//                     onClick={() => showCart(false)}
//                   >
//                     x
//                   </span>
//                 </div>
//                 <div className="pt-4">
//                   {cart.length > 0 ? (
//                     cart.map((product, i) => {
//                       return (
//                         <div className="flex items-center justify-between bg-white text-[#004d9c] p-1 mb-1">
//                           <p>
//                             <img
//                               src={product.image}
//                               className="h-8 w-8 inline mr-2 "
//                             />
//                             {product.name}
//                           </p>
//                           <div>
//                             {product.price}
//                             <a
//                               className="ml-2 cursor-pointer"
//                               onTouchEnd={() => setCart([...cart.slice(0, i), ...cart.slice(i + 1)])}
//                               onClick={() =>
//                                 setCart([
//                                   ...cart.slice(0, i),
//                                   ...cart.slice(i + 1),
//                                 ])
//                               }
//                             >
//                               x
//                             </a>
//                           </div>
//                         </div>
//                       );
//                     })
//                   ) : (
//                     <p className="pb-4">There is nothing in your cart.</p>
//                   )}
//                 </div>
//                 {
//                   <p className="bg-white text-black text-right mt-4 pr-2">
//                     Total:
//                     {" " +
//                       formatterCAD.format(
//                         cart
//                           .map((e) => Number(e.price.slice(1)))
//                           .reduce((partialsum, a) => partialsum + a, 0) || 0
//                       )}
//                   </p>
//                 }
//               </Rnd>
//             )}
//             {displayed.map((e, i) => (
//               <Rnd
//                 style={{
//                   zIndex: i + 2,
//                   background: "#004d9c",
//                   border: "4px solid #004d9c",
//                   boxShadow: "2px 2px 0px 0px #000000",
//                   maxWidth: "100vw",
//                 }}
//                 className="text-white font-topaz antialiased overflow-y-auto overflow-x-hidden no-scrollbar"
//                 key={e.name}
//                 default={{
//                   width: "max(500px, 100vw)",
//                   height: "fit-content",
//                   x: (i + 1) * 100,
//                   y: (i + 1) * 100,
//                 }}
//               >
//                 <div
//                   className="w-full bg-white px-1 flex justify-between sticky top-0 z-10"
//                   style={{ color: "#004d9c" }}
//                 >
//                   {e.name}
//                   <span
//                     className="cursor-pointer"
//                     onTouchEnd={() => setDisplayed(displayed.filter((prompt) => prompt !== e))}
//                     onClick={() =>
//                       setDisplayed(displayed.filter((prompt) => prompt !== e))
//                     }
//                   >
//                     x
//                   </span>
//                 </div>
//                 <img
//                   className="mx-auto h-24 w-24 mt-4 rounded-xl border-double border-4"
//                   src={e.image}
//                 />
//                 <ReactMarkdown
//                   className="markdown my-4"
//                   children={e.description}
//                   linkTarget="_blank"
//                   rehypePlugins={[rehypeRaw]}
//                 ></ReactMarkdown>
//                 <a
//                   className="steps bg-white text-black uppercase p-1 border rounded-sm cursor-pointer hover:text-[#0049dc]"
//                   onTouchEnd={() => setCart([...cart, e])}
//                   onClick={() => setCart([...cart, e])}
//                 >
//                   4dd 70 c4r7
//                 </a>
//               </Rnd>
//             ))}
//             <img
//               src="https://s3.us-east-1.amazonaws.com/haddefsigwen1/reciprocal/2023.7.10..00.01.08-vendor_lowfi-2.png"
//               className="absolute top-[-12rem] right-[-11rem] -z-10 hidden md:block"
//               style={{
//                 height: "480px",
//                 width: "480px",
//                 transform: "skew(-7deg, 11deg)",
//               }}
//             />
//             <p className="absolute p-3 bg-white rounded-sm steps text-black top-[-3rem] right-[4rem] invisible md:visible">
//               {cart.length > 0 ? "Nice choice!" : "Welcome back!"}
//             </p>
//             <div className="flex w-full steps pb-8">
//               <Marquee
//                 gradient={false}
//                 speed={250}
//                 style={{ overflow: "hidden" }}
//               >
//                 <h2 className="truncate text-6xl pr-4">
//                   BUY BUY BUY BUY BUY BUY BUY BUY BUY BUY BUY BUY BUY BUY BUY
//                   BUY BUY BUY BUY BUY BUY BUY BUY BUY BUY
//                 </h2>
//               </Marquee>
//             </div>
//             <div className="grid grid-cols-2 gap-4 pb-8">
//               {products.map((product) => (
//                 <div
//                   onTouchEnd={() => setDisplayed([...displayed, product])}
//                   onClick={() => setDisplayed([...displayed, product])}
//                   className="flex flex-col p-2 border-white border-double border-4 rounded-xl w-fit cursor-pointer hover:text-[#ff0000] hover:border-[#ff0000]"
//                 >
//                   <img
//                     className="max-h-36 object-contain"
//                     src={product.image}
//                   />
//                   <p className="xanh">{product.name}</p>
//                   <p className="steps">{product.price}</p>
//                 </div>
//               ))}
//             </div>
//             <a
//               className="steps bg-white text-black uppercase p-1 mr-4 border rounded-sm hover:border-[#ff0000] hover:bg-[#ff0000] text-2xl"
//               href="#"
//               onTouchEnd={() => showCart(true)}
//               onClick={() => showCart(true)}
//             >
//               c4r7 {cart?.length > 0 && `(${cart.length})`}
//             </a>
//             {cart?.length > 0 && (
//               <a
//                 className="steps bg-white text-black uppercase p-1 border rounded-sm hover:border-[#ff0000] hover:bg-[#ff0000] text-2xl"
//                 href="#"
//                 onClick={() => checkout()}
//               >
//                 ch3ck 0u7
//               </a>
//             )}
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const products = await axios.get("https://sitden.reciprocal.ltd:4242/product").then((res) => res.data);

//   return { props: products }
// }