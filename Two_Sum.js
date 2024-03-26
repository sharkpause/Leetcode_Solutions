var twoSum = function(nums, target) {
    const seen = {};

    for(let i = 0; i < nums.length; ++i) {
        const remainder = target - nums[i];
        if(remainder in seen) return [i, seen[remainder]];
        seen[nums[i]] = i;
    }
};
