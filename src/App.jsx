import React from "react";
import ReactDOM from "react-dom/client"
import Project from "./component/Project";
import Header from "./component/Header";
import Part from "./component/Part";
import Products from "./component/Products";
import Foodmenu from "./component/Foodmenu";
import Booking from "./component/Booking";
import Carousel from "./component/Carousel";
import Comman from "./component/Comman";
import Latest from "./component/Latest";
import About from "./component/About";
import Footer from "./component/Footer";








const App = () => {

    const logo = "../public/Image/Illustration/imgi_2_logo-removebg-preview.png"
    const links = ["Home", "Menu", "Blog", "Reservation", "Pages"];
    const icons = ["bi bi-list"];

    const carouselData = [
        {
            active: "carousel-item active",
            carouselh1: "QUALITY  FOODS",
            carouselpara: "HEALTHY FOOD FOR   HEALTHY BODY",
            carouselImg: "/public/Image/Illustration/imgi_22_pizza-banner-1-removebg-preview.png"
        },
        {
            active: "carousel-item ",
            carouselh1: "QUALITY FOODS",
            carouselpara: "HEALTHY FOOD FOR HEALTHY BODY",
            carouselImg: "/public/Image/Illustration/imgi_22_pizza-banner-1-removebg-preview.png"
        }];



    const Img = "/public/Image/Illustration/imgi_29_order-top-removebg-preview.png"



    const Items = [
        {
            itemPath: "/public/Image/Illustration/dish (1).png",
            itemHeading: "order your Food",
            itemPara: "Satisfy your cravings with just a few clicks! Order your favorite cuisine from a diverse menu, customized to your taste, and enjoy swift delivery or convenient pickup options. Indulge in a delightful dining experience, right at your fingertips."
        },
        {
            itemPath: "/public/Image/Illustration/delivery-truck.png",
            itemHeading: "DELIVERY OR PICK UP",
            itemPara: "Choose your preferred way to enjoy your meal! Opt for hassle-free delivery to your doorstep or quick and convenient pick-up, ensuring your culinary cravings are satisfied just the way you like."
        },
        {
            itemPath: "/public/Image/Illustration/pizza (1).png",
            itemHeading: "DELICIOUS RECIPES",
            itemPara: "Discover a world of flavors with our delicious recipes! From gourmet delights to quick and easy meals, explore a diverse range of culinary creations that will tantalize your taste buds and inspire your inner chef."
        }

    ];


    const Image = "/public/Image/Illustration/Screenshot_2025-09-27_022728-removebg-preview.png";

    const Product3 = "Fresh From Pizzon";
    const Product2 = "OUR SPECIALITY";
    const Btn4 = "ViewMore"


    const Product = [
        {
            Productimg: "/public/Image/Illustration/imgi_31_Burger-Stock.jpg",
            caption: "Burgers"
        },
        {
            Productimg: "/public/Image/Illustration/imgi_32_coffee-4648041_1920-e1697271404997.jpg",
            caption: "Deserts"
        },
        {
            Productimg: "/public/Image/Illustration/imgi_33_pizza-2589575_1920-e1697271289378.jpg",
            caption: "Pizza"
        }];

        const Specialone = "Fresh From Pizzon";
        const Special2 = "OUR SPECIAL MENU";

        const Special = ["ALL","BURGER","DESERT","DRINK","PIZZAS" ,"SALADS"];

        const Imageitemnone = "/public/Image/Illustration/imgi_134_customer-bottom-bg-1024x51.jpeg"

 const PopularFoodData=[
        {
            dish1Img:"/public/Image/Illustration/imgi_35_product-8-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Meat Salad",
            dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$30.00"
        },
        {
            dish1Img:"/public/Image/Illustration/imgi_36_drink-2-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Lemon Juice",
          dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$16.00"
        },
        {
            dish1Img:"/public/Image/Illustration/imgi_37_burger-4-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Sollow Burger",
          dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$71.00"
        },
        {
            dish1Img:"/public/Image/Illustration/imgi_38_salads-1-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Green Salad",
          dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$63.00"
        },
        {
            comment:"d-none d-md-block",
            dish1Img:"/public/Image/Illustration/imgi_39_salads-2-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Olive Salad",
          dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$52.00"
        },
        {
            dish1Img:"/public/Image/Illustration/imgi_40_drink-1-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Special drink",
           dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$31.00"
        },
         {
            dish1Img:"/public/Image/Illustration/imgi_41_product-7-1-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Gluten-Free Pasta",
           dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$31.00"
        },
         {
            dish1Img:"/public/Image/Illustration/imgi_42_burger-3-1-qepxtxwx3ddoi1xgthqqpk626ci875avwfxztiu4sw.jpeg",
            dish1Name:"Fresh Burger",
           dish1Fee:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus…",
            dish1Price:"$58.00"
        },
    ];


    const Bookingdetails = [
        {
            Specialone:"Fresh From Pizzon",
            heading:"BOOK ONLINE",
            bookingp:"Elevate your dining experience with ease! Reserve a table at our restaurant, where exquisite cuisine meets inviting ambiance. Enjoy impeccable service and create memorable moments with your loved ones, ensuring a delightful and unforgettable mealtime.",
             logo:"/public/Image/Illustration/smartphone (3).png",
             bookingnumber:"+ 91 123 456 789 0",
             heading2:"BOOK A TABLE",
             button55:"BOOKNOW"
          
        },
         
    ]
    const Imagecarousel =[
        {
            carouselimage:"/public/Image/Illustration/imgi_45_chef-2.jpg",
            Name:"Nigella Lawson",
            buttomname:"Sous Chef",
        },
        {
            carouselimage:"/public/Image/Illustration/imgi_46_chef-3.jpg",
            Name:"Thomas Keller",
            buttomname:"Sous Chef",
        },
        {
            carouselimage:"/public/Image/Illustration/imgi_47_chef-4.jpg",
            Name:"Julia Child",
            buttomname:"Sous Chef",
        },
        {
            carouselimage:"/public/Image/Illustration/imgi_48_chef-1.jpg",
            Name:"Alain Ducasse",
            buttomname:"Sous Chef",
        },
         {
            carouselimage:"/public/Image/Illustration/imgi_45_chef-2.jpg",
            Name:"Nigella Lawson",
            buttomname:"Sous Chef",
        },
          {
            carouselimage:"/public/Image/Illustration/imgi_47_chef-4.jpg",
            Name:"Julia Child",
            buttomname:"Sous Chef",
        },
    ];

     const Carousel1 = " Meet our experts";
    const Carousel2 = "OUR BEST CHEF";


    const Top2 = "Recent Events";
    const Buttom1="LATEST NEWS";

    const Costomer =[
        {
            costimg :"/public/Image/Illustration/imgi_116_bl-1-300x160.jpg",
            costa:"by pizadmin",
            costp:" 1 Comments",
            costh1:"Pizzon Where Crust Meets Creativity.",
            btn44:"Read More",
        },
         {
            costimg :"/public/Image/Illustration/imgi_120_bl-2-300x163.jpg",
            costa:"by pizadmin",
            costp:" 1 Comments",
            costh1:"Pizzon Where Crust Meets Creativity.",
            btn44:"Read More",
        },
         {
            costimg :"/public/Image/Illustration/imgi_124_bl-3-300x163.jpg",
            costa:"by pizadmin",
            costp:" 1 Comments",
            costh1:"Pizzon Where Crust Meets Creativity.",
            btn44:"Read More",
        },
    ]

    const Info="What Say Our Clients";
    const Info2="CUSTOMER REVIEWS";

    const Infomation =[
        {
            infoimg:"/public/Image/Illustration/imgi_54_customer-1.jpeg",
            infomation1:"What a fantastic pizza experience! The variety of pizzas on the menu is impressive, and I love how you can customize your own. The online ordering process was seamless, and the staff was friendly and accommodating. The pizza tasted amazing - it's evident they use high-quality ingredients. I'll definitely be ordering from here again!",
            infoname:"MARRY WILSON",
        },
        {
             infoimg:"/public/Image/Illustration/imgi_55_comment-img3.jpg",
            infomation1:"What a fantastic pizza experience! The variety of pizzas on the menu is impressive, and I love how you can customize your own. The online ordering process was seamless, and the staff was friendly and accommodating. The pizza tasted amazing - it's evident they use high-quality ingredients. I'll definitely be ordering from here again!",
            infoname:"TIMY JONES",
        },
        {
             infoimg:"/public/Image/Illustration/imgi_46_chef-3.jpg",
            infomation1:"What a fantastic pizza experience! The variety of pizzas on the menu is impressive, and I love how you can customize your own. The online ordering process was seamless, and the staff was friendly and accommodating. The pizza tasted amazing - it's evident they use high-quality ingredients. I'll definitely be ordering from here again!",
            infoname:"LANA SMITH",
        },

    ];



    const About23 =[
        {
            aboutname:"Delicious Restaurant",
            abouth1:"ABOUT PIZZON",
            aboutp:"Founded on a passion for delivering not just pizzas, but memorable moments, Pizzon is more than a pizza place—it’s a culinary journey. Join us in savoring the artistry of flavors, where every bite tells a story of quality, creativity, and devotion. Come, indulge in the pizza experience you deserve. Welcome to the home of extraordinary pizzas, where every slice is an invitation to culinary delight.",
            aboutimg:"/public/Image/Illustration/about-pizzon.png",
            aboutbuttom:"ViewMore"
        }
    ]


      const Footer45 =[
        {
            footerlogo:"/public/Image/Illustration/imgi_2_logo-removebg-preview.png",
            footerp:"20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F Alexandria, United Kingdom",
            footerphone:"PHONE – +91 123 456 789 0, +91 123 456 789 0",
            footera:"EMAIL – Info@gmail.com",
            footerh1:"OPENING HOURS",
            footerdate:"Mon – Tues :6.00 am – 10.00 pm",
            footerdate2:"Wednes – Thurs :6.00 am – 10.00 pm",
            footerdate3:"aunch :Everyday",
            footerdate4:"Sunday :",
            footerh2:"USEFUL LINKS",
            footerh3:"Pravicy Policy",
            footerh4:"Order Tracking",
            footerh5:"Warranty and Sevices",
            footerh6:"About us",
            footerh7:"Contact",
            footerh8:"My account",
        }
      ]
   


    return(
        <React.Fragment>
            <Project logos={logo} nav={links} icon={icons} />

            <Header slides={carouselData} image={Img} />

            <Part Imgitems={Items} img={Image} />

            <Products Products={Product} Product2={Product2} Product3={Product3} Btn={Btn4} />

            <Foodmenu Item1={Specialone} Item2={Special2} nav={Special} Food={PopularFoodData} Btn={Btn4} none={Imageitemnone}/>

            <Booking  Book={Bookingdetails} />

            <Carousel root={Imagecarousel}  new2={Carousel1} new1={Carousel2}/>

           < Comman  old2={Top2}  para33={Buttom1}  costom={Costomer}/>

           <Latest  Infov={Info} Infot={Info2} Infotech={Infomation}/>

           <About   many={About23} />

           <Footer  footer90={Footer45}  />

        </React.Fragment>
    );
};
export default App;