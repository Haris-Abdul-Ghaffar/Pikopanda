// PikoPanda Configuration
const CFG = {
    // REPLACE THIS WITH YOUR ACTUAL WHATSAPP NUMBER (No +, no spaces, e.g., "923001234567")
    wa: "923001234567", 
    hours: "Mon-Sat: 10AM - 8PM",
    currency: "PKR",
    
    // YOUR PRODUCTS LIST
    // Add your real products here. Put photos in an "images/" folder and set img: "images/photo.jpg"
    P: [
        {
            id: 1,
            sku: "PP-GRL-FLC-001",
            name: "Girls' Printed Fleece 2-Piece Set",
            cat: "Fleece",
            gender: "Girls",
            price: 1990,
            orig: 2290,
            img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop",
            sizes: ["2-3Y", "4-5Y", "6-7Y"],
            badge: "New",
            desc: "Ultra-soft fleece, playful prints, and a fit made for active little ones. A cosy two-piece set for the winter season.",
            details: { fabric: "Fleece", pieces: "2-piece set", fit: "Regular", season: "Winter" }
        },
        {
            id: 2,
            sku: "PP-BOY-TRK-002",
            name: "Boys' Cosy Fleece Tracksuit",
            cat: "Tracksuits",
            gender: "Boys",
            price: 1850,
            orig: null,
            img: "https://images.unsplash.com/photo-1519457431-7b2a4f59ed60?w=600&auto=format&fit=crop",
            sizes: ["3-4Y", "5-6Y", "7-8Y"],
            badge: "Winter Pick",
            desc: "Designed for active little boys! This cozy fleece tracksuit offers maximum comfort with an elastic waistband and soft inner lining.",
            details: { fabric: "Fleece", pieces: "2-piece", fit: "Relaxed", season: "Winter" }
        },
        {
            id: 3,
            sku: "PP-UNX-NIT-003",
            name: "Unisex Fleece Night Suit",
            cat: "Sleepwear",
            gender: "Unisex",
            price: 1750,
            orig: 1950,
            img: "https://images.unsplash.com/photo-1522771753035-1a5b656c63b4?w=600&auto=format&fit=crop",
            sizes: ["2-3Y", "4-5Y", "6-8Y"],
            badge: null,
            desc: "Sweet dreams start here. This plain, stitched fleece night suit is incredibly soft against sensitive skin.",
            details: { fabric: "Fleece", pieces: "2-piece", fit: "Regular", season: "Winter" }
        },
        {
            id: 4,
            sku: "PP-GRL-KRT-004",
            name: "Girls' Embroidered Kurta Set",
            cat: "Kurtas",
            gender: "Girls",
            price: 2490,
            orig: null,
            img: "https://images.unsplash.com/photo-1583391733958-e04e9f65f950?w=600&auto=format&fit=crop",
            sizes: ["4-5Y", "6-7Y", "8-9Y"],
            badge: "Staff Pick",
            desc: "Beautiful embroidered design perfect for special occasions, Eid, and family gatherings.",
            details: { fabric: "Cotton blend", pieces: "2-piece", fit: "Regular", season: "All-season" }
        },
        {
            id: 5,
            sku: "PP-INF-BAB-005",
            name: "Infant Cotton Onesie Set",
            cat: "Infants",
            gender: "Infants",
            price: 1290,
            orig: 1490,
            img: "https://images.unsplash.com/photo-1522771930-78848dc92939?w=600&auto=format&fit=crop",
            sizes: ["0-3M", "3-6M", "6-12M"],
            badge: "New",
            desc: "Gentle, breathable cotton perfect for delicate newborn skin. Easy snap closures for quick changes.",
            details: { fabric: "100% Cotton", pieces: "3-piece set", fit: "Snug", season: "All-season" }
        }
    ]
};
