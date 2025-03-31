function mincost(arr)
{ 
//write your code here
// return the min cost
	    let heap = [...arr];
    heap.sort((a, b) => a - b); // Sort to simulate a min-heap

    let totalCost = 0;

    while (heap.length > 1) {
        // Extract the two smallest ropes
        let first = heap.shift();
        let second = heap.shift();

        // Calculate the cost to combine them
        let cost = first + second;
        totalCost += cost;

        // Insert the new rope back into the heap
        heap.push(cost);
        heap.sort((a, b) => a - b); // Re-sort to maintain the min-heap property
    }

    return totalCost;

  
}

module.exports=mincost;
