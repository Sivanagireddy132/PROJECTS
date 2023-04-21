var Datastore = require("nedb")
var db = new Datastore({ filename: "data", autoload: true });
var doc = [
		{ problem:"Liver Infection",
			medicine:"Medicine : Milk Thistle",
			drug:"Drug : Silymarine",
			usage:"Usage : 3 Pill/day",
			cost:"Cost : 500mg bottle-1100/-",
			link:"https://5.imimg.com/data5/JM/CE/MY-7744421/milk-thistle_logos-500x500.jpg","_id":"2PlaJS9Ttyip8tVN"
		},
	  { problem:"Cold",
	    medicine:"Medicine : CHESTON Cold",
	    drug:"Drug : Cetirizine,Paracetamol,Pheylephrine",
	    usage:"Usage : 1 Pill/day",
	    cost:"Cost : 43/- (10 TAB)",
	    effect:"Effect : sleepiness & Drowsiness",
	    link:"https://www.netmeds.com/images/product-v1/600x600/303853/cheston_cold_tablet_10s_3_0.jpg","_id":"EudXtOzf5G49fUg1"
	  },
		{ problem:"Body pains",
		  medicine:"Medicine : Crocin",
		  drug:"Drug : Acetaminophen & Caffine",
		  usage:"Usage : 1 Pill/day",
		  cost:"Cost : 65/- (10 TAB)",
		  link:"https://5.imimg.com/data5/SELLER/Default/2021/5/CU/SL/WY/33567294/crocin-advance-tablet-500x500.jpg","_id":"JoQzPZz6JTRIjkiE"
		},
	  { problem:"Headache",
	    medicine:"SARIDON",
	    drug:"Drug : Paracetamol,Caffine",
	    usage:"Usage : 1 Pill for every 9hrs",
	    cost:"Cost : 41/- (10 TAB)",
	    links:"https://cdn01.pharmeasy.in/dam/products_otc/156565/saridon-headache-relief-tablet-strip-of-10-tablets-2.1-1641398744.jpg","_id":"MSyVC0yZPF7zkiAb"
	  },
		{ problem:"Motions",
		  medicine:"Medicine : Loperamide hydrochloride / diaraheal plus",
		  drug:"Drug : Loperamide hydrochloride, Lactose monohydrate,sodium / Metronidazole",
		  usage:"Usage : 1 Pill/day",
		  cost:"Cost : 50/- (10 TAB)",
		  link:"https://5.imimg.com/data5/SELLER/Default/2021/10/XF/TU/FK/51257137/diaraheal-plus-500x500.jpg","_id":"T4yudM6uifuuzsB1"
		},
		{ problem:"Throat Infection",
		  medicine:"Medicine : Augmentin-625",
		  drug:"Drug : Amoxicillin & clavulanic",
		  usage:"Usage : 1 Pill/day",
		  cost:"Cost : 20/- (10 TAB)",
		  link:"https://newassets.apollo247.com/pub/media/catalog/product/a/u/aug0004_2.jpg","_id":"ZG3ugXDWi3ueA3uk"},
		{ problem:"BP",
		  medicine:"Medicine : Diovan 80",
		  drug:"Drug : Valsartan, hydrochlorothiazide",
		  usage:"Usage : 80-160mg twice a day(6 - 16years) , 80-320mg once a day(adult and above)",
		  cost:"Cost : 260/- (10 TAB)",
		  link:"https://newassets.apollo247.com/pub/media/catalog/product/d/i/dio0007.jpg","_id":"aCP6Kh96FiSpD8rY"},
		{ problem:"Eye Infection",
		  medicine:"Medicine : Azithral-500",
		  drug:"Drug : Azithromycine",
		  usage:"Usage : 1 Pill/day",
		  cost:"Cost : 25/- (10 TAB)",
		  link:"https://www.stayhappi.com/uploads/product/main/img_16427582930.png","_id":"iMhu4IegWuxMDnyp"},
		{ problem:"Kidney Infection",
		  medicine:"Medicine : Trimenthoprim/ sulfamethoxazole",
		  drug:"Drug : Urinary anti-infectives",
		  usage:"Usage : 50mg/5ml",
		  cost:"Cost : 20/- (10 TAB)",
		  link:"https://5.imimg.com/data5/NQ/XL/MY-24119759/trimethoprim-500x500.jpg","_id":"oDhirjgNWhB6Kmei"},
		{ problem:"Diabetics",
		  medicine:"Medicine : Metformin",
		  drug:"Drug : Insulin,Glipizide,Glimepiride,Invokana",
		  usage:"Usage : 1 pill/day",
		  cost:"Cost : 12/-",
		  link:"https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323128/metformin-tablet-box.jpg","_id":"tankcANhoAy6DE7f"},
		{ problem:"Fever",
		  medicine:"Medicine : Asozen forte",
		  drug:"Drug : Aceclofenac + paracetamol + chlorzoxazone",
		  usage:"Usage : 2 pills/day",
		  cost:"Cost : 20/- (10 TAB)",
		  link:"https://zeelabpharmacy.com/public/uploads/files/MW5fa67bdbc368c.jpg","_id":"vG5g942ztfVkgwVB"}
];

db.insert(doc, function (err, newDoc) { 

console.log("Inserted");
  
});