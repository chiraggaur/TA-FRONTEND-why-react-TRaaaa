import Head from "./Header";
import Hero from "./Hero";
import About from "./About";
import Blog from "./Blog";
import Footer from "./Footer";
function App() {
  return [<Head />, <Hero />, <About />, <Blog />, <Footer />];
}

export default App;

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Hydro | Assignment Level 1 | Adding Media</title>
//     <!-- Font Family -->
//     <link
//       href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
//       rel="stylesheet"
//     />

//     <!-- Font Awesome -->
//     <script
//       src="https://kit.fontawesome.com/8bc5acd820.js"
//       crossorigin="anonymous"
//     ></script>
//     <!-- CSS -->
//     <link rel="stylesheet" href="assets/stylesheet/style.css" />
//   </head>
//   <body>
//     <header class="navbar">
//       <div class="container flex">
//         <div class="flex">
//           <a class="brand" href="#">
//             <strong>Hydro</strong>
//           </a>
//           <nav>
//             <ul class="flex nav-menu nav-menu-primary">
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Blog</a>
//               </li>
//               <li>
//                 <a href="#">Our Work</a>
//               </li>
//               <li>
//                 <a href="#">Contacts</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <nav>
//           <ul class="flex nav-menu nav-menu-secondary">
//             <li class="social-media-item">
//               <a href="#"><i class="fab fa-facebook-square"></i></a>
//             </li>
//             <li class="social-media-item">
//               <a href="#"><i class="fab fa-twitter"></i></a>
//             </li>
//             <li class="social-media-item">
//               <a href="#"><i class="fab fa-instagram"></i></a>
//             </li>
//             <li>
//               <a class="btn btn-primary" href="#"> Sign in / Join </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//     <main>
//       <!-- Hero -->
//       <section class="hero">
//         <div class="container flex">
//           <div class="flex-48 hero-content">
//             <h1 class="hero-heading">
//               We make beautiful websites for all people
//             </h1>
//             <div class="flex justify-start">
//               <a class="btn btn-secondary" href="#">Start a project</a>
//               <p class="enquiry">
//                 CALL US (+66) 010-020-0340 <br />
//                 for any enquiry
//               </p>
//             </div>
//           </div>
//           <figure class="flex-48">
//             <iframe
//               width="100%"
//               height="400"
//               src="https://www.youtube.com/embed/AqcjdkPMPJA"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//             ></iframe>
//           </figure>
//         </div>
//       </section>
//       <!-- About -->
//       <section class="about padding">
//         <div class="container flex align-start">
//           <div class="flex-40">
//             <header class="sec-header">
//               <h2 class="heading">Let us introduce</h2>
//               <div class="dot-wrapper flex justify-start">
//                 <div class="dot"></div>
//                 <div class="dot"></div>
//                 <div class="dot"></div>
//               </div>
//             </header>

//             <p class="text">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Similique ut sequi voluptatibus beatae corporis repellat
//               asperiores fugit debitis corrupti nesciunt nam doloribus animi qui
//               illum, recusandae nisi neque iusto culpa!
//             </p>
//             <p class="text">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             </p>
//           </div>
//           <div class="flex-30 progress">
//             <div class="progress-item">
//               <div class="flex">
//                 <h3>Web Design</h3>
//                 <p>85%</p>
//               </div>
//               <progress value="85" max="100"></progress>
//             </div>
//             <div class="progress-item">
//               <div class="flex">
//                 <h3>Photography</h3>
//                 <p>90%</p>
//               </div>
//               <progress value="90" max="100"></progress>
//             </div>
//             <div class="progress-item">
//               <div class="flex">
//                 <h3>Content Marketing</h3>
//                 <p>75%</p>
//               </div>
//               <progress value="75" max="100"></progress>
//             </div>
//             <div class="progress-item">
//               <div class="flex">
//                 <h3>CMS Admin</h3>
//                 <p>70%</p>
//               </div>
//               <progress value="70" max="100"></progress>
//             </div>
//           </div>
//           <div class="flex-30">
//             <img
//               class="flexible-img about-img"
//               src="assets/media/about-image.jpg"
//               alt="About Image"
//             />
//           </div>
//         </div>
//       </section>
//       <!-- Blog -->
//       <section class="blog padding">
//         <div class="container">
//           <header class="sec-header text-center">
//             <h2 class="heading">Our Blog</h2>
//             <div class="dot-wrapper">
//               <div class="dot"></div>
//               <div class="dot"></div>
//               <div class="dot"></div>
//             </div>
//           </header>
//           <div class="flex wrap">
//             <article class="flex article flex-48">
//               <div class="flex-40 font-0">
//                 <img
//                   class="flexible-img"
//                   src="assets/media/blog-image1.jpg"
//                   alt="Blog image 1"
//                 />
//               </div>

//               <div class="flex-60 article-content">
//                 <time datetime="">
//                   <i class="far fa-clock"></i>
//                   December 22, 2017
//                 </time>
//                 <h3>How to find beautiful workspace?</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                 <a class="btn btn-tertiary" href="#">Read Article</a>
//               </div>
//             </article>
//             <article class="flex article flex-48">
//               <div class="flex-40 font-0">
//                 <img
//                   class="flexible-img"
//                   src="assets/media/blog-image2.jpg"
//                   alt="Blog image 1"
//                 />
//               </div>

//               <div class="flex-60 article-content">
//                 <time datetime="">
//                   <i class="far fa-clock"></i>
//                   December 18, 2017
//                 </time>
//                 <h3>Woman sportwear</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                 <a class="btn btn-tertiary" href="#">Read More</a>
//               </div>
//             </article>
//             <article class="flex article flex-48">
//               <div class="flex-40 font-0">
//                 <img
//                   class="flexible-img"
//                   src="assets/media/blog-image3.jpg"
//                   alt="Blog image 1"
//                 />
//               </div>

//               <div class="flex-60 article-content">
//                 <time datetime="">
//                   <i class="far fa-clock"></i>
//                   December 14, 2017
//                 </time>
//                 <h3>New creative fashion</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                 <a class="btn btn-tertiary" href="#">Read Article</a>
//               </div>
//             </article>
//             <article class="flex article flex-48">
//               <div class="flex-40 font-0">
//                 <img
//                   class="flexible-img"
//                   src="assets/media/blog-image4.jpg"
//                   alt="Blog image 1"
//                 />
//               </div>

//               <div class="flex-60 article-content">
//                 <time datetime="">
//                   <i class="far fa-clock"></i>
//                   December 10, 2017
//                 </time>
//                 <h3>Minimalist design trend in 2018</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
//                 <a class="btn btn-tertiary" href="#">View Detail</a>
//               </div>
//             </article>
//           </div>
//         </div>
//       </section>
//       <!-- Work -->
//       <section class="work padding">
//         <div class="container">
//           <header class="sec-header text-center">
//             <h2 class="heading">Our Work</h2>
//             <div class="dot-wrapper">
//               <div class="dot"></div>
//               <div class="dot"></div>
//               <div class="dot"></div>
//             </div>
//           </header>
//           <div class="flex">
//             <div class="flex-23">
//               <img
//                 class="flexible-img"
//                 src="assets/media/work-image1.jpg"
//                 alt="Work Image 1"
//               />
//             </div>
//             <div class="flex-23">
//               <img
//                 class="flexible-img"
//                 src="assets/media/work-image2.jpg"
//                 alt="Work Image 1"
//               />
//             </div>
//             <div class="flex-23">
//               <img
//                 class="flexible-img"
//                 src="assets/media/work-image3.jpg"
//                 alt="Work Image 1"
//               />
//             </div>
//             <div class="flex-23">
//               <img
//                 class="flexible-img"
//                 src="assets/media/work-image4.jpg"
//                 alt="Work Image 1"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <!-- Contact -->
//       <section class="contact padding">
//         <div class="container">
//           <header class="sec-header text-center">
//             <h2 class="heading">Contact Us</h2>
//             <div class="dot-wrapper">
//               <div class="dot"></div>
//               <div class="dot"></div>
//               <div class="dot"></div>
//             </div>
//           </header>
//           <div class="flex">
//             <form class="flex-60" action="index.html" method="post">
//               <fieldset>
//                 <div class="flex">
//                   <input
//                     class="form-control flex-48"
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                   />
//                   <input
//                     class="form-control flex-48"
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                   />
//                 </div>
//                 <div class="flex">
//                   <input
//                     class="form-control flex-48"
//                     name="number"
//                     type="tel"
//                     placeholder="Your Phone"
//                   />
//                   <select class="form-control flex-48" name="budget">
//                     <option value="Budget Level">Budget Level</option>
//                     <option value="Budget Level1">Budget Level1</option>
//                     <option value="Budget Level2">Budget Level2</option>
//                     <option value="Budget Level3">Budget Level3</option>
//                   </select>
//                 </div>
//                 <textarea
//                   class="form-control"
//                   name="requirements"
//                   placeholder="Your Requirements"
//                   id=""
//                   rows="6"
//                 ></textarea>
//               </fieldset>
//               <input
//                 type="submit"
//                 value="Send Message"
//                 class="btn btn-primary"
//               />
//             </form>
//             <div class="flex-40 map">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9195155713787!2d76.35140991561741!3d32.206399320166405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b530e24726e0d%3A0x71ff0cae0784712d!2sAltCampus%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1600510560646!5m2!1sen!2sin"
//                 frameborder="0"
//                 style="border: 0"
//                 allowfullscreen=""
//                 aria-hidden="false"
//                 tabindex="0"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
// <footer class="footer padding">
//   <div class="container">
//     <div class="flex align-start">
//       <div class="flex-40">
//         <h3>Hydro Company</h3>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
//           veniam autem illo recusandae sit velit adipisci ab perspiciatis
//           voluptate. Eos fuga soluta necessitatibus provident ad culpa
//           explicabo quod error maxime!
//         </p>
//       </div>
//       <div class="flex-20">
//         <h3>Company</h3>
//         <nav>
//           <ul>
//             <li>
//               <a href="#">About us</a>
//             </li>
//             <li>
//               <a href="#">Join our team</a>
//             </li>
//             <li>
//               <a href="#">Read blog</a>
//             </li>
//             <li>
//               <a href="#">Press</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div class="flex-20">
//         <h3>Services</h3>
//         <nav>
//           <ul>
//             <li>
//               <a href="#">Pricing</a>
//             </li>
//             <li>
//               <a href="#">Documentation</a>
//             </li>
//             <li>
//               <a href="#">Support</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div class="flex-20">
//         <h3>Find Us</h3>
//         <address>
//           AltCampus, Thehr, Khaniyara,
//           <br />
//           Kangra, Himachal Pradesh, 176218
//         </address>
//       </div>
//     </div>
//     <hr />
//     <div class="flex footer-additional-info">
//       <small> Copyright &copy; 2017 Your Company </small>
//       <div class="flex">
//         <p>Call us (+66) 010-020-0340</p>
//         <nav>
//           <ul class="flex">
//             <li class="social-media-item">
//               <a href="#"><i class="fab fa-facebook-square"></i></a>
//             </li>
//             <li class="social-media-item">
//               <a href="#"><i class="fab fa-twitter"></i></a>
//             </li>
//             <li class="social-media-item">
//               <a href="#"><i class="fab fa-instagram"></i></a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   </div>
// </footer>
//   </body>
// </html>
