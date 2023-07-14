/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Your code here
function createEmployeeRecord(array){
    let employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(arrays){
    let records = []
    for (const i of arrays){
        records.push(createEmployeeRecord(i))
    };
    return records
}

function createTimeInEvent(time) {
    const dateTime = time.split(' ')
    const newObj = {
        type: "TimeIn",
        hour: Number(dateTime[1]),
        date: dateTime[0]
    }
    this.timeInEvents.push(newObj)
    return this
}

function createTimeOutEvent(time) {
    const dateTime = time.split(' ')
    const newObj = {
        type: "TimeOut",
        hour: Number(dateTime[1]),
        date: dateTime[0]
    }
    this.timeOutEvents.push(newObj)
    return this
}

function hoursWorkedOnDate(day){
    let hoursWorked = 0
    this.timeInEvents.forEach(element => {
        if (element.date === day){
            this.timeOutEvents.forEach(elem => {
                if (elem.date === day){
                    hoursWorked = (elem.hour - element.hour)/100
                }
            })
        }
    })
    return hoursWorked
}

function wagesEarnedOnDate(day){
    return hoursWorkedOnDate.call(this,day) * this.payPerHour
}

// function allWagesFor(object){
//     const dates = []
//     const dayWage = []
//     object.timeInEvents.forEach(element => dates.push(element.date))
//     dates.forEach(elem => dayWage.push(wagesEarnedOnDate(object,elem)))
//     return dayWage.reduce((accumulator,value) => accumulator + value)
// }


function calculatePayroll(array){
    const total = []
    array.forEach(element => total.push(allWagesFor.call(element)))
    return total.reduce((accumulator,value) => accumulator + value)
}

function findEmployeeByFirstName(array,name){
    return array.find(elem => elem.firstName === name)
}




