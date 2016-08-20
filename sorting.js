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

/*
 * Performance: O(n^2) [ O(n); O(n^2) ]
 */
function gnomeSort(arr){
	// cloning the array
	arr = Array.prototype.slice.call(arr);
	
	var i = 0;
	while(i < arr.length){
		if(i === 0 || arr[i - 1] <= arr[i]){
			i++;
		} else {
			[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
			i--;
		}
	}
	return arr;
}

/*
 * Performance: O(n^2) [ O(n); O(n^2) ]
 */
function insertionSort(arr){
	// cloning the array
	arr = Array.prototype.slice.call(arr);
	
	for(var i = 1; i < arr.length; i++){
		var key = arr[i];
		var j = i - 1;
		while(j > 0 && arr[j] > key){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = key;
	}
	return arr;
}

/*
 * Performance: O(n^2)
 */
function selectionSort(arr){
	// cloning the array
	arr = Array.prototype.slice.call(arr);
	
	for(var min = 0; min < arr.length - 1; min++){
		var least = min;
		for(var j = min + 1; j < arr.length; j++){
			if(arr[j] < arr[least]){
				least = j;
			}
		}
		[arr[min], arr[least]] = [arr[least], arr[min]];
	}
	return arr;
}
