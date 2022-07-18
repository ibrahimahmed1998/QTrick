
// function setWithExpiry(key, value, ttl) {
// 	const now = new Date()

// 	// `item` is an object which contains the original value
// 	// as well as the time when it's supposed to expire
// 	const item = {
// 		value: value,
// 		expiry: now.getTime() + ttl,
// 	}
// 	localStorage.setItem(key, JSON.stringify(item))
// }

// function getWithExpiry(key) {
// 	const itemStr = localStorage.getItem(key)
// 	if (!itemStr) {
// 		return null
// 	}
// 	const item = JSON.parse(itemStr)
// 	const now = new Date()
// 	if (now.getTime() > item.expiry) {
// 		localStorage.removeItem(key)
// 		return null
// 	}
// 	return item.value
// }

// sec = getWithExpiry("sec")

// if(sec == null){
//     sec = prompt("كلمة السر في الوقت الحالي هي 1234 لكن لاحقا ستصبح ال cisco id ");
//     if(sec!="1234"){
//         alert("wrong id");
//         window.location.href = "null.html";
//     }
//     else{       // [1000]ml-sec * [60]sec * [30]min   ========> 30 min
//         setWithExpiry("sec",sec, 1000*60*30);
//         console.log("success",now.getTime());    
//     }

// }

// const now = new Date()
// console.log(now.getTime());

