console.log("Hello World");

// Current Date for Title
const dateElement = document.getElementById('date'); // Fixed the typo in "getElememt"

console.log(dateElement);

let currentDate = new Date();

console.log(currentDate);

 
let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };


dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// Rapid API code to retrieve trending twitter topics 

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'facaf21c02msh8f15acbe870b542p13b1fajsnb818aaca05c6',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// // Dummy Data
// let myPost = {
// 	name:"#AlwaysToYouHannie",
// 	query:"%23AlwaysToYouHannie",
// 	url:"search?q=%23AlwaysToYouHannie",
// 	volume:98800,
// 	volumeShort:"97.9K",
// 	domainContext:"Korean music",
// 	groupedTrends:[]
// }

// console.log(myPost);
// // dot notation - to access a property or method of an object
// console.log(myPost.name);
// console.log(myPost.url);
// console.log(myPost.volume);

// // Array of Objects
// let graphData = [
// 	{
// 		name:"2ne1",
// 		query:"2ne1",
// 		url:"search?q=2ne1",
// 		volume:394000,
// 		volumeShort:"394K",
// 		domainContext:"K-pop",
// 		groupedTrends:[]
// 	},
// 	{
// 		name:"#FudgeeBarrxBINI",
// 		query:"%23FudgeeBarrxBINI",
// 		url:"search?q=%23FudgeeBarrxBINI",
// 		volume:23200,
// 		volumeShort:"22.6K",
// 		domainContext:"",
// 		groupedTrends:[]

// 	}
// 	];

// console.log(graphData);
// // Array uses "index" to select the position of an element.

// console.log(graphData[0]);

// // using dot notation to get specific line
// console.log(graphData[0].name);

// console.log(graphData);

// // push() method - add element at the end of an array.
// graphData.push(myPost);

// console.log(graphData);

// // End of dummy data to Comment out 
let graphData = [];

// Fetch Request

fetch(url, options)
.then(res=> res.json())
.then(data=>{
	console.log(data);
	console.log(graphData.length);


for(let i = 0; i < 25; i++){
	graphData.push(
		{
			"name": data.trends[i].name,
			"volume": data.trends[i].volume
		}
	)
}

// map method is used to loop through all elements/items of an array and execute some code
// it creates a new array.

//This will create a topics variable that contain the "object.name".
let topics = graphData.map(object =>{
	console.log(object);
	console.log(object.name);
	return object.name;
});

console.log(topics);

// This will create volumes variable that will contain "object.volume" property values
let volumes = graphData.map(object =>{
	return object.volume;
})
console.log(volumes);

const myChart = document.getElementById('myChart');

  let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volumes,
        borderWidth: 2,
         backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(201, 203, 207, 0.2)'
	   		 ],
	        borderColor: [
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(201, 203, 207)'
	   		 ],
	        hoverBackgroundColor: [
	    		'rgb(255, 99, 132)',
	    		'rgb(255, 159, 64)',
	    		'rgb(255, 205, 86)',
	    		'rgb(75, 192, 192)',
	    		'rgb(54, 162, 235)',
	    		'rgb(153, 102, 255)',
	    		'rgb(201, 203, 207)'
	  		  ]
	      }]
 	 },
     options: {
	    	indexAxis: 'y',
	      scales: {
	        y: {
	          beginAtZero: true
	        }
	      }
	    }
	  });

});

// // Copy Paste to Fetch Request 

// console.log(graphData.length);

// // console.log(graphData[0]);
// // console.log(graphData[0].name);
// // console.log(graphData[0].volume);
// // console.log(graphData[1]);
// // console.log(graphData[1].name);
// // console.log(graphData[1].volume);

// // Loops are used to do repetitive tasks
// // Print each individual element in the graphData
// // Syntax: for(initial; conditionl increment/decrement)
// // 1st iteration 0 < 2 (true)
// // 2nd iteration 1 < 2 (true)
// // 3rd iteration 2 < 2 (false)

// for(let i = 0; i < 2; i++){
// 	console.log(graphData[i]);
// 	console.log(graphData[i].name);
// 	console.log(graphData[i].volume);

// }

// // map method is used to loop through all elements/items of an array and execute some code
// // it creates a new array.

// //This will create a topics variable that contain the "object.name".
// let topics = graphData.map(object =>{
// 	console.log(object);
// 	console.log(object.name);
// 	return object.name;
// });

// console.log(topics);

// // This will create volumes variable that will contain "object.volume" property values
// let volumes = graphData.map(object =>{
// 	return object.volume;
// })
// console.log(volumes);

// const myChart = document.getElementById('myChart');

//   let barChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//       labels: topics,
//       datasets: [{
//         label: '# of tweets/xeets',
//         data: volumes,
//         borderWidth: 2
//         backgroundColor: [
// 		'rgba(255, 99, 132, 0.2)',
// 		'rgba(255, 159, 64, 0.2)',
// 		'rgba(255, 205, 86, 0.2)',
// 		'rgba(75, 192, 192, 0.2)',
// 		'rgba(54, 162, 235, 0.2)',
// 		'rgba(153, 102, 255, 0.2)',
// 		'rgba(201, 203, 207, 0.2)'
// 		],
// 		borderColor: [
// 		'rgb(255, 99, 132)',
// 		'rgb(255, 159, 64)',
// 		'rgb(255, 205, 86)',
// 		'rgb(75, 192, 192)',
// 		'rgb(54, 162, 235)',
// 		'rgb(153, 102, 255)',
// 		'rgb(201, 203, 207)'
// 		],
// 		hoverBackgroundColor: [
//     	'rgb(255, 99, 132)',
//     	'rgb(255, 159, 64)',
//     	'rgb(255, 205, 86)',
//     	'rgb(75, 192, 192)',
//     	'rgb(54, 162, 235)',
//     	'rgb(153, 102, 255)',
//     	'rgb(201, 203, 207)'
//     	]
//       }]
//     },
//     options: {
//     	indexAxie: 'y',
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

//   // End of Copy Paste to Fetch Request