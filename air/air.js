var seats=[[true,true,true,true,true,true,true],
			[true,true,true,true,true,true,true],
			[true,true,true,true,true,true,true],
			[true,true,true,true,true,true,true]];	
	
function initSeats() {
	var position;
	var seat_id;
	for (var i = 0;i < seats.length; i++){
		var numOfSeatsInThisRow = seats[i].length;
			if (seats[i][j]) {
				position = i * numOfSeatsInThisRow + j;
				seat_id = "seat" + position;
				document.getElementById(seat_id).src = "available.png";
				document.getElementById(seat_id).alt = "Available seat";
			}
			else {
				document.getElementById(seat_id).src="selected.png";
				document.getElementById(seat_id).alt="Unavailable seat";
			}
	}
}
function selectSeats (selectI) {
	if (document.getElementById(selectI).alt == "Available seat") {
		document.getElementById(selectI).src = "yourseat.png";
		document.getElementById(selectI).alt="Your seat";
	}
	else if (document.getElementById(selectI).alt == "Your seat") {
		document.getElementById(selectI).src="available.png";
		document.getElementById(selectI).alt="Available seat";
	}		
}	
function submitSeats () {
	var selectedRIndex = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
	var selectedColIndex = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
	var a = 0;
	var position;
	var seat_id;
	total_rows = seats.length;
	for (var i = 0;i < total_rows;i++) {
		var numOfSeatsInThisRow = seats[i].length;
		for (var j = 0;j < numOfSeatsInThisRow;j++) {
			position = i * numOfSeatsInThisRow + j;
				seat_id = "seat" + position;				
			if (document.getElementById(seat_id).alt == "Your seat") {
				selectedRIndex[a] = i;
				selectedColIndex[a] = j;
				a++;
				console.log(seat_id + ": R" + i + "C" + j);
			}
			else {continue;}
		}
	}
		
	if (a == 0) {
		alert("You need to choose at least one seat to submit ;)");
	}
	else {
			var accept = confirm("You will book "+ a +" seats. Accept?");
		if (accept) {
			for (var k = 0; k < a; k++) {
				i = selectedRIndex[k];
				j = selectedColIndex[k];
				position = i * seats[i].length + j;	
				seat_id = "seat" + position;
				console.log("seat" + position);
				console.log("Row&Column Index:" + k);
				console.log("selectedRIndex[" + k + "]:"+ i);
				console.log("selectedColIndex[" + k + "]:"+ j);					
				document.getElementById(seat_id).src ="selected.png";
				document.getElementById(seat_id).alt ="Unavailable seat";
			}
			finished = true;
		}
	}
}