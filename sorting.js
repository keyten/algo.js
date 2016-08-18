/*
 * Performance: O(n^2) [ O(n); O(n^2) ]
 */
function bubbleSort(arr){
	// cloning the array
	arr = Array.prototype.slice.call(arr);
	
	for(var i = 0; i < arr.length - 1; i++){
		var swapped = false;
		for(var j = 0; j < arr.length - i - 1; j++){
			if(arr[j] > arr[j+1]){
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
				swapped = true;
			}
		}
		if(!swapped){
			break;
		}
	}
	return arr;
}
