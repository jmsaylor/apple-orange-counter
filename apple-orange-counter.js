function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var AppleCount = 0
    var OrangeCount = 0

    apples.forEach(apple => {
        AppleCount = a + apple >= s && a + apple <= t ? AppleCount += 1 : AppleCount;
    })
    oranges.forEach(orange => {
        OrangeCount = b + orange >= s && b + orange <= t ? OrangeCount += 1: OrangeCount;
    })
    console.log(AppleCount)
    console.log(OrangeCount)

}
