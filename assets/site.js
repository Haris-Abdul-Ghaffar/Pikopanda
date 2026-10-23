// ==========================================
// PIKOPANDA - Configuration & Product Data
// ==========================================

const CFG = {
    // 1. REPLACE THIS WITH YOUR ACTUAL WHATSAPP NUMBER 
    wa: "923001234567", 
    
    // 2. Your business hours
    hours: "Mon-Sat: 10:00 AM - 8:00 PM",
    
    // 3. Currency
    currency: "PKR",
    
    // 4. PRODUCT CATALOGUE (Extracted & Optimized from Markaz)
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
            desc: "Lightweight cotton tracksuit perfect for everyday play.",
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
            sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years"],
            badge: "Best Seller",
            desc: "Cozy fleece tracksuit for active boys.",
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
            sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years"],
            badge: "New",
            desc: "Soft, warm tracksuit for girls.",
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
            sizes: ["7-8 Years", "9-10 Years"],
            badge: "Winter Special",
            desc: "Printed hoodie tracksuit for winter.",
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
            sizes: ["1-2 Years", "3-4 Years"],
            badge: "Budget Pick",
            desc: "Versatile hoodie tracksuit for home or party.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Regular", season: "Winter" }
        },

        // ===== SETS (Shirt & Trouser) =====
        {
            id: 6,
            sku: "PP-GRL-SET-006",
            name: "Girls' Cotton Jersey Printed Shirt And Trouser Set",
            cat: "Sets",
            gender: "Girls",
            price: 1250,
            orig: 1020,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204114BYBR-768255001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years"],
            badge: "Budget Pick",
            desc: "Lightweight cotton jersey set for everyday play.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season" }
        },
        {
            id: 7,
            sku: "PP-GRL-SET-007",
            name: "Winter Collection 2 Pcs Girl's Funky Shirt And Trouser Set",
            cat: "Sets",
            gender: "Girls",
            price: 1250,
            orig: 1020,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204115BYBR-768259001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years"],
            badge: "Winter Special",
            desc: "Funky winter set for girls.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Comfort", season: "Winter" }
        },
        {
            id: 8,
            sku: "PP-BOY-SET-008",
            name: "2 Pcs Boy's Modren Stylish Shirt And Trouser Set",
            cat: "Sets",
            gender: "Boys",
            price: 1150,
            orig: 920,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204118BYBR-768306001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years"],
            badge: "Best Seller",
            desc: "Stylish shirt and trouser set for boys.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season" }
        },
        {
            id: 9,
            sku: "PP-UNX-SET-009",
            name: "2 Pcs Unisex Fleece Printed Shirt And Trouser Set",
            cat: "Sets",
            gender: "Unisex",
            price: 1050,
            orig: 869,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3225-35-MZ3225200001KSSPSP-769130001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: "Budget Pick",
            desc: "Versatile fleece set for boys and girls.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Relaxed", season: "Winter" }
        },
        {
            id: 10,
            sku: "PP-GRL-SET-010",
            name: "2 Pcs Girl's Fleece Printed Shirt And Trouser Suit",
            cat: "Sets",
            gender: "Girls",
            price: 1200,
            orig: 969,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3225-35-MZ3225200002KSSPSP-769186001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: null,
            desc: "Soft fleece set with playful prints.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Comfort", season: "Winter" }
        },
        {
            id: 11,
            sku: "PP-GRL-SET-011",
            name: "2 Pcs Girl's Fancy Shirt And Trouser Set Random Colour",
            cat: "Sets",
            gender: "Girls",
            price: 1250,
            orig: 999,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1119-35-MZ1119204133BYBR-772065001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: "Random Colour",
            desc: "Fancy set with assorted colour (confirmed on WhatsApp).",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season", note: "Random Colour" }
        },
        {
            id: 12,
            sku: "PP-GRL-SET-012",
            name: "2 Pcs Girl's Fleece Printed Shirt And Trouser Set",
            cat: "Sets",
            gender: "Girls",
            price: 1450,
            orig: 1169,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3225-35-MZ3225200025KSSPSP-771905001-product-1.webp",
            sizes: ["6-12 Months", "1-2 Years", "3-4 Years"],
            badge: null,
            desc: "Premium fleece set for girls.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Comfort", season: "Winter" }
        },
        {
            id: 13,
            sku: "PP-GRL-SET-013",
            name: "2 Pcs Girl's Fleece Printed Shirt And Trouser Suit",
            cat: "Sets",
            gender: "Girls",
            price: 2150,
            orig: 1699,
            img: "https://static.markaz.app/pakistan/thumbnails/products/2098-35-MZ2098204404DK-771872001-product-1.webp",
            sizes: ["1-2 Years", "3-4 Years", "5-6 Years", "7-8 Years"],
            badge: "Premium",
            desc: "High-quality fleece suit with detailed stitching.",
            details: { fabric: "Premium Fleece", pieces: "2-Piece", fit: "Regular", season: "Winter" }
        },
        {
            id: 14,
            sku: "PP-GRL-SET-014",
            name: "2 Pcs Girl's Jersey Printed Shirt & Pants Set",
            cat: "Sets",
            gender: "Girls",
            price: 2500,
            orig: 2069,
            img: "https://static.markaz.app/pakistan/thumbnails/products/1995-35-MZ1995200285GYKSCN-771185001-product-1.webp",
            sizes: ["1-2 Years", "3-4 Years", "5-6 Years", "7-8 Years"],
            badge: "New",
            desc: "Breathable jersey set for active girls.",
            details: { fabric: "Cotton Jersey", pieces: "2-Piece", fit: "Regular", season: "All-Season" }
        },

        // ===== HOODIES =====
        {
            id: 15,
            sku: "PP-BOY-HOD-015",
            name: "1 Pc Boy's Stitched Polyester Fleece Plain Hoodie",
            cat: "Hoodies",
            gender: "Boys",
            price: 1450,
            orig: 1200,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3347-156-MZ3347200015BISEPT-773309001-product-1.webp",
            sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years"],
            badge: null,
            desc: "Classic plain hoodie for boys.",
            details: { fabric: "Polyester Fleece", pieces: "1-Piece", fit: "Regular", season: "Winter" }
        },

        // ===== SLEEPWEAR =====
        {
            id: 16,
            sku: "PP-UNX-NIT-016",
            name: "Kids Unisex Stitched Fleece Plain Night Suit Winter Wear",
            cat: "Sleepwear",
            gender: "Unisex",
            price: 1850,
            orig: 1550,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3417-239-MZ3417200008ALRQ-771653001-product-1.webp",
            sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "8-10 Years"],
            badge: "Winter Essential",
            desc: "Soft fleece night suit for comfortable sleep.",
            details: { fabric: "Fleece", pieces: "2-Piece", fit: "Regular", season: "Winter" }
        },

        // ===== KURTAS & ETHNIC =====
        {
            id: 17,
            sku: "PP-BOY-KRT-017",
            name: "2 Pcs Boy's Wash And Wear Printed Kurta And Shalwar Suit",
            cat: "Kurtas",
            gender: "Boys",
            price: 3100,
            orig: 2570,
            img: "https://static.markaz.app/pakistan/thumbnails/products/3216-35-MZ3216200007BNSDSDDS-770602001-product-1.webp",
            sizes: ["3-4 Years", "5-6 Years"],
            badge: "Premium",
            desc: "Traditional kurta and shalwar set for special occasions.",
            details: { fabric: "Wash & Wear", pieces: "2-Piece (Stitched)", fit: "Traditional", season: "All-Season" }
        },

        // ===== FROCKS & DRESSES =====
        {
            id: 18,
            sku: "PP-GRL-FRK-018",
            name: "2 Pcs Frock And Trouser Set size (24, 26, 28)",
            cat: "Frocks",
            gender: "Girls",
            price: 3850,
            orig: 3200,
            img: "https://static.markaz.app/pakistan/thumbnails/products/2920-35-MZ2920200037SPSE-773848001-product-1.webp",
            sizes: ["7-8 Years", "8-10 Years", "11-12 Years"],
            badge: "Premium",
            desc: "Beautiful embroidered net frock with matching trousers.",
            details: { fabric: "Net (Embroidered)", pieces: "2-Piece", fit: "Traditional", season: "All-Season" }
        }
    ]
};
