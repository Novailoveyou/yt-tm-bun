// write files
// const data = 'I love JavaScript!'

// await Bun.write('output.txt', data)

// read files
const file = await Bun.file('output.txt')

// get file text
console.log(await file.text())

// get file size
console.log(await file.size)

// get contest as readable streams
console.log(await file.stream())

// get contest as array buffer
console.log(await file.arrayBuffer())
