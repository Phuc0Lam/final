numbers = [
  {
    number: 1,
    bgColor: "	#d1fae5",
    color: "	#10b981",
  },
  {
    number: 2,
    bgColor: "	#fee2e2",
    color: "#ef4444",
  },
  {
    number: 3,
    bgColor: "	#dbeafe",
    color: "	#3b82f6",
  },
  {
    number: 4,
    bgColor: "	#ede9fe",
    color: "	#8b5cf6",
  },
  {
    number: 5,
    bgColor: "	#fce7f3",
    color: "	#ec4899",
  },
  {
    number: 6,
    bgColor: "	#fef9c3",
    color: "	#eab308",
  },
  {
    number: 7,
    bgColor: "	#e0e7ff",
    color: "	#6366f1",
  },
  {
    number: 8,
    bgColor: "	#f3f4f6",
    color: "	#6b7280",
  },
  {
    number: 9,
    bgColor: "	#d1fae5",
    color: "#10b981",
  },
  {
    number: 10,
    bgColor: "	#fef3c7",
    color: "	#f59e0b",
  },
  {
    number: 11,
    bgColor: "	#ecfccb",
    color: "#84cc16",
  },
  {
    number: "",
    bgColor: "black",
    color: "black",
  },
];
renderdata(numbers);

function deletedata(){
    const container = document.getElementById("container-content");
    container.innerHTML="";
}
function renderdata(numbers) {
  const container = document.getElementById("container-content");
  for (let item of numbers) {
    console.log(item.number);
    container.innerHTML += `<div style="color: ${item.color}; background-color: ${item.bgColor} ;" class="number">${item.number} </div>`;
  }
  
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function start() {
    const startbt=document.getElementById("start")
    const endbt =document.getElementById("end")
    let shuffleNumbers = numbers
    startbt.style.display = "none";
    endbt.style.display="block";
  for (let i = 0; i < 100; i++) {
    shuffle(shuffleNumbers);
  }
  deletedata();
  renderdata(shuffleNumbers);
}
