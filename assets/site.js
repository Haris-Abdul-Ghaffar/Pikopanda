// ==========================================
// PIKOPANDA - Complete Product Catalogue
// All products from Markaz (Kids only)
// ==========================================

const CFG = {
    wa: "923001234567",
    hours: "Mon-Sat: 10:00 AM - 8:00 PM",
    currency: "PKR",
    
    P: [
        // ===== TRACKSUITS =====
        {
            id: 1,
            sku: "PP-GRL-TRK-001",
            name: "Girls' Cotton Printed Tracksuit",
            cat: "Tracksuits",
            gender: "Girls",
            price: 700,
            orig: 549,
            img: "https://static.markaz.app/pakistan/thumbnails/products/2433-207-MZ2433200020PESS-773055001-product-1.webp",
            sizes: ["Extra Small - Small"],
            badge: "Budget Pick",
            desc: "Lightweight cotton tracksuit perfect for everyday play. Features vibrant prints and comfortable fit.",
            details: { fabric: "Cotton", pieces: "2-Piece", fit: "Regular", season: "All-Season" }
        },
        {
            id: 2,
            sku: "PP-BOY-TRK-002",
            name: "Boys' Fleece Printed Tracksuit",
            cat: "Tracksuits",
            gender: "Boys",
            price: 1900,
            orig: 1570,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3130-207-MZ3130200027SR-771665001-product-1.webp",
            sizes: ["3-4 Years", "4-5 Years", "5-6 Years", "6-7 Years", "7-8 Years", "8-9 Years", "9-10 Years", "10-11 Years", "11-12 Years"],
            badge: "Best Seller",
            desc: "Cozy fleece tracksuit for active boys. Warm, durable, and perfect for winter play.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Relaxed", season: "Winter" }
        },
        {
            id: 3,
            sku: "PP-GRL-TRK-003",
            name: "Girls' Fleece Printed Tracksuit",
            cat: "Tracksuits",
            gender: "Girls",
            price: 1900,
            orig: 1570,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3130-207-MZ3130200029SR-771750001-product-1.webp",
            sizes: ["3-4 Years", "4-5 Years", "5-6 Years", "6-7 Years", "7-8 Years", "8-9 Years", "9-10 Years", "10-11 Years", "11-12 Years"],
            badge: "New",
            desc: "Soft, warm tracksuit for girls. Perfect for school mornings and park afternoons.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Regular", season: "Winter" }
        },
        {
            id: 4,
            sku: "PP-BOY-TRK-004",
            name: "Winter Boy's Printed Hoodie Tracksuit (5-10 Year)",
            cat: "Tracksuits",
            gender: "Boys",
            price: 1500,
            orig: 1250,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-207-MZ1119204147BYBR-773420001-product-1.webp",
            sizes: ["5-6 Years", "7-8 Years", "9-10 Years"],
            badge: "Winter Special",
            desc: "Printed hoodie tracksuit with cozy fleece lining. Perfect for active winter days.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Relaxed", season: "Winter" }
        },
        {
            id: 5,
            sku: "PP-GRL-TRK-005",
            name: "Kids Girls Winter Hoodie's Tracksuit Home Party Wear",
            cat: "Tracksuits",
            gender: "Girls",
            price: 1100,
            orig: 899,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-207-MZ1119204137BYBR-773407001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: "Budget Pick",
            desc: "Versatile hoodie tracksuit perfect for home wear or casual outings. Soft against sensitive skin.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Regular", season: "Winter" }
        },

        // ===== SHIRT & TROUSER SETS =====
        {
            id: 6,
            sku: "PP-GRL-SET-006",
            name: "Girls' Cotton Jersey Printed Shirt And Trouser Set",
            cat: "Shirt & Trouser Sets",
            gender: "Girls",
            price: 1250,
            orig: 1020,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204114BYBR-768255001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years"],
            badge: "Budget Pick",
            desc: "Lightweight cotton jersey set perfect for everyday play. Features vibrant prints.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season" }
        },
        {
            id: 7,
            sku: "PP-GRL-SET-007",
            name: "Winter Collection 2 Pcs Girl's Funky Shirt And Trouser Set",
            cat: "Shirt & Trouser Sets",
            gender: "Girls",
            price: 1250,
            orig: 1020,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204115BYBR-768259001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years"],
            badge: "Winter Special",
            desc: "Funky winter set with beautiful detailing. Perfect for home or casual wear.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Comfort", season: "Winter" }
        },
        {
            id: 8,
            sku: "PP-BOY-SET-008",
            name: "2 Pcs Boy's Modren Stylish Shirt And Trouser Set",
            cat: "Shirt & Trouser Sets",
            gender: "Boys",
            price: 1150,
            orig: 920,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204118BYBR-768306001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years"],
            badge: "Best Seller",
            desc: "Stylish shirt and trouser set for boys. Smart choice for family gatherings.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season" }
        },
        {
            id: 9,
            sku: "PP-UNX-SET-009",
            name: "2 Pcs Unisex Fleece Printed Shirt And Trouser Set",
            cat: "Shirt & Trouser Sets",
            gender: "Unisex",
            price: 1050,
            orig: 869,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3225-35-MZ3225200001KSSPSP-769130001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: "Budget Pick",
            desc: "Versatile fleece set for both boys and girls. Ultra-soft with playful prints.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Relaxed", season: "Winter" }
        },
        {
            id: 10,
            sku: "PP-GRL-SET-010",
            name: "2 Pcs Girl's Fleece Printed Shirt And Trouser Suit",
            cat: "Shirt & Trouser Sets",
            gender: "Girls",
            price: 1200,
            orig: 969,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3225-35-MZ3225200002KSSPSP-769186001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: null,
            desc: "Soft fleece set with playful prints. Designed for maximum comfort.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Comfort", season: "Winter" }
        },
        {
            id: 11,
            sku: "PP-GRL-SET-011",
            name: "2 Pcs Girl's Fancy Shirt And Trouser Set Random Colour",
            cat: "Shirt & Trouser Sets",
            gender: "Girls",
            price: 1250,
            orig: 999,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204133BYBR-772065001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: "Random Colour",
            desc: "Fancy set with assorted colour. Colour confirmed on WhatsApp before ordering.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season", note: "Random Colour" }
        },
        {
            id: 12,
            sku: "PP-BOY-SET-012",
            name: "2 Pcs Boy's Fleece Printed Shirt And Trouser Suit",
            cat: "Shirt & Trouser Sets",
            gender: "Boys",
            price: 1650,
            orig: 1369,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3225-35-MZ3225200010KSSPSP-769344001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: null,
            desc: "Comfortable and durable fleece set for active boys. Features elastic waistband.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Relaxed", season: "Winter" }
        },
        {
            id: 13,
            sku: "PP-GRL-SET-013",
            name: "2 Pcs Girl's Fleece Printed Shirt And Trouser Set",
            cat: "Shirt & Trouser Sets",
            gender: "Girls",
            price: 1650,
            orig: 1369,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3225-35-MZ3225200020KSSPSP-770623001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: null,
            desc: "Premium fleece set for girls. Soft, warm, and stylish.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Comfort", season: "Winter" }
        },
        {
            id: 14,
            sku: "PP-GRL-SET-014",
            name: "2 Pcs Girl's Jersey Printed Shirt & Pants Set",
            cat: "Shirt & Trouser Sets",
            gender: "Girls",
            price: 2500,
            orig: 2069,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1995-35-MZ1995200285GYKSCN-771185001-product-1.webp",
            sizes: ["1-2 Years", "3-4 Years", "5-6 Years", "7-8 Years", "8-10 Years"],
            badge: "New",
            desc: "Breathable jersey set for active girls. Easy to wash and maintains shape.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season" }
        },
        {
            id: 15,
            sku: "PP-GRL-SET-015",
            name: "Winter 2 Pcs Girl's Fancy Shirt And Trouser Set",
            cat: "Shirt & Trouser Sets",
            gender: "Girls",
            price: 1250,
            orig: 999,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204152BYBR-773425001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: "Winter Special",
            desc: "Fancy winter set with beautiful detailing. Perfect for special occasions.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "Winter" }
        },

        // ===== HOODIES =====
        {
            id: 16,
            sku: "PP-BOY-HOD-016",
            name: "1 Pc Boy's Stitched Polyester Fleece Plain Hoodie",
            cat: "Hoodies",
            gender: "Boys",
            price: 1450,
            orig: 1200,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3347-156-MZ3347200015BISEPT-773309001-product-1.webp",
            sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years", "13-14 Years"],
            badge: null,
            desc: "Classic plain hoodie for boys. Warm, durable, and easy to style.",
            details: { fabric: "Polyester Fleece", pieces: "1-Piece", fit: "Regular", season: "Winter" }
        },

        // ===== SLEEPWEAR =====
        {
            id: 17,
            sku: "PP-UNX-NIT-017",
            name: "Kids Unisex Stitched Fleece Plain Night Suit Winter Wear",
            cat: "Sleepwear",
            gender: "Unisex",
            price: 1850,
            orig: 1550,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3417-239-MZ3417200008ALRQ-771653001-product-1.webp",
            sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "8-10 Years"],
            badge: "Winter Essential",
            desc: "Soft fleece night suit for comfortable sleep. Gentle against sensitive skin.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Regular", season: "Winter" }
        },

        // ===== KURTAS & ETHNIC =====
        {
            id: 18,
            sku: "PP-BOY-KRT-018",
            name: "2 Pcs Boy's Wash And Wear Printed Kurta And Shalwar Suit",
            cat: "Kurtas & Ethnic",
            gender: "Boys",
            price: 3100,
            orig: 2570,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3216-35-MZ3216200007BNSDSDDS-770602001-product-1.webp",
            sizes: ["3-4 Years", "5-6 Years"],
            badge: "Premium",
            desc: "Traditional kurta and shalwar set for special occasions. Easy-care wash & wear fabric.",
            details: { fabric: "Wash & Wear", pieces: "2-Piece (Stitched)", fit: "Traditional", season: "All-Season" }
        },

        // ===== FROCKS & DRESSES =====
        {
            id: 19,
            sku: "PP-GRL-FRK-019",
            name: "2 Pcs Frock And Trouser Set size (24, 26, 28)",
            cat: "Frocks & Dresses",
            gender: "Girls",
            price: 3850,
            orig: 3200,
            img: "https://static.markaz.app/pakistan/thumbnails/products/2920-35-MZ2920200037SPSE-773848001-product-1.webp",
            sizes: ["7-8 Years", "8-10 Years", "11-12 Years", "13-14 Years"],
            badge: "Premium",
            desc: "Beautiful embroidered net frock with matching trousers. Perfect for weddings and Eid.",
            details: { fabric: "Net (Embroidered)", pieces: "2-Piece", fit: "Traditional", season: "All-Season" }
        }
    ]
};
