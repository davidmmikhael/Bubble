console.log('Three Strings');

//let quotes = "";												// Can use this string use to iterate through messages
//let quoteBlocks = []; 										// Can use this array to iterate through messages as well
																// Consider making it random + non-repeating
																// Edit the quotes, content + aesthetic

const messages_alpha = [
						"a. Wake up without an alarm",
						"b. Lights on: Spiritual Ritual: prayer & pledge",
						"c. Make Bed",
						"d. Use Restroom",
						"e. Medicate",
						"f. Brush Teeth",
						"g. Shave",
						"h. Shower - Warm Water behind ears too",
						"i. Underwear + Nasal Strip",
						"j. Shirt + Deoderant + Brush Hair",
						"k. Lotion on Face/Beard + Arms",
						"l. Shorts + Socks + Shoes",
						"m. Make Protein Shake, Milk + 2 Scoops of Pure Whey Protein",
						"n. 1 Cup of Sumatra Coffee, 2 Cream 2 Sugar",
						"o. Bring both drinks + water ",
						"p. Bring headphones + phone + keys + wallet",
						"q. Bring gym bag + backpack",
						"r. Drive to the gym",
						"s. Drink half the Protein Shake + Coffee",
						"t. Shoulders + Left Arm + Right Arm",
						"u. Pull Up App",
						"v. Check in to gym",
		];
const messages_numeral = [
						"i. 3 minute cardio warm-up: Elliptical or Stairmaster",
						"ii. Leg Day: Squats + Hack Squat + Leg Extensions + Leg Curls + Calf Raises",
						"iii. Chest: Decline + Flat Bench + Incline + Flies + 21 BiCurls + Reverse Curls/Hammer Curls Superset",
						"iv. Shoulders: Military Press + Upright Rows Superset + Straight Flies + Front Delt Rows + Angled Flies + Rear Delt Rows + Shoulder Shrug Superset + 16lb plate to toe Abs + Toe raises + Chin to ceiling ups + bicycle kicks Superset",
						"v. Back: Deadlifts then Rows + Pull-ups + Push Ups Superset + Tricep w/ Elbows back then w/ Rope: Tricep pull-downs + pull-outs + abs pull downs + oblique plate crunches ",
						"vi. Sauna Stretch Full-body + 30 second break + Sauna 10 mins",
						"vii. Hair Cut ",
						"viii. 3.5 mile run in the sand close to the water pier to pier and back.",
						"ix. Shower + Moisturize + Get Dressed + Nasal Strip",
						"x. Eat + Vitamins + Water",
	
	];

const messages_decimal = [
						" 1. When was the last time you got a new bed?",
						" 2. When was the last time you got a new pillow? ",
						" 3. How is the lighting where you are? Did you know lighting in offices is regulated to maximize productivity? You can find the exact specs.",
						" 4. Getting good sleep helps you git gud",
						" 5. Walking is an underrated exercise",
						" 6. Content creators/streams help when you're sad and alone",
						" 7. Drinking 16 ozes of water before breakfast speeds up your metabolism by 20%",
						" 8. Your skin is an organ. Your brain is an organ. If your brain were on the outside you would directly take better care of it.",
						" 9. Art of seeing: improving the way a thing functions improves that which functions.",
						" 10. smiling can improve your mood vs your mood making you smile",
						" 11. Meditating: following your in breath, out breath, keeping your mind silent helps calmness and focus",

	];

// You can add an array for each messaging group, push the random message to each, return/log that
// Add a button/ UI

//for(let i = 0; i < messages_alpha.length; i++) {
	console.log(messages_alpha[Math.floor(Math.random() * messages_alpha.length)]);
//}

//for(let i = 0; i < messages_numeral.length; i++) {
	console.log(messages_numeral[Math.floor(Math.random() * messages_numeral.length)]);
//}

//for(let i = 0; i < messages_decimal.length; i++) {
	console.log(messages_decimal[Math.floor(Math.random() * messages_decimal.length)]);
//}



