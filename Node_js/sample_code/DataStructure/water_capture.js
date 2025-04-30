/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let prevMaxH = { index: 0, val: 0 }
    let capture_water = []
    let final_capture_water = 0;
    let start = true

    height.forEach((item, index) => {

        if (prevMaxH.val <= item && prevMaxH.index != index + 1 && start) {
            console.log(`###prevMaxH ${prevMaxH.val} item ${item},index ${index}`)

        }
        if (!start) {
            console.log(`capture_water ${item} , index ${index}`)
            capture_water.push({ count: item, index: index })
        }

        if (prevMaxH.val <= item && prevMaxH.val != 0) {
            console.log(`prevMaxH ${prevMaxH.val} item ${item},index ${index}`, capture_water)
            const low = prevMaxH.val > item ? item : prevMaxH.val
            capture_water.forEach((water_data, cindex) => {
                console.log(`Cindex ${cindex},  ${capture_water.length - 1}  `)
                if (cindex != 0 && cindex != capture_water.length - 1) final_capture_water += low - water_data.count
            })
            console.log(`final_capture_water ${final_capture_water}, Low ${low}`)
            capture_water=capture_water.slice(capture_water.length-1)
        }
        if (prevMaxH.val <= item) {
            prevMaxH.val = item
            prevMaxH.index = index

            if (prevMaxH.index != index + 1) {
                start = false
            }
        }

    })
    console.log(final_capture_water)

};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
