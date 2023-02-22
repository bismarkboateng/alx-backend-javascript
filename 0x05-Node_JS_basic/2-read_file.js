const { count } = require("console")
const fs = require("fs")


const countStudents = (path) => {
    try {
        const data = fs.readFileSync(path, "utf8").trim()
        const rows = data.split("\n").filter(row => row)
        const fields = {}
        let count = 0

        for (const row of rows) {
            const values = row.split(",")
            const field = values[values.length - 1].trim()

            if (!fields[field]) {
                fields[field] = {count: 0, students: [] }
            }

            if (values.length >= 2) {
                count++
                fields[field].count++
                fields[field].students.push(values[0])
            }
        }

        console.log(`Number of students: ${count}`)
        for (const field in fields) {
            const { count, students } = fields[field]
            console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`)
        }
    } catch (error) {
        console.error(`Cannot load the database ${error}`)
    }
}


module.exports = countStudents
