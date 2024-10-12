function bornIn1500(inventors) {
    return inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
}

function getFullNames(inventors) {
    return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
}

function sortByAgeGrade(inventors) {
    return inventors.sort((a,b) => a.year - b.year);
}

function totalYearsLived(inventors) {
    return inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
}

function sortByYearsLived(inventors) {
    return inventors.sort((a, b) => {
        const yearsLivedA = a.passed - a.year;
        const yearsLivedB = b.passed - b.year;
        return yearsLivedA - yearsLivedB;
    });
}

function sortByLastName(inventors) {
    return inventors.sort((a, b) => {
        if(a.last < b.last) return -1;
        if(a.last < b.last) return 1;
        return 0;
    });
}

function objectKeys(obj) {
    const keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }

    return keys;
}

function objectValues(obj) {
    const keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }

    return values;
}



const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

console.log(bornIn1500s(inventors));
console.log(getFullNames(inventors));
console.log(sortByBirthYear(inventors));
console.log(totalYearsLived(inventors));
console.log(sortByYearsLived(inventors));
console.log(sortByLastName(inventors));

const sampleObject = {
  keyCode: 'JS',
  2: 'Program Paradigm',
  Target: 'Browser'
};

console.log(objectKeys(sampleObject)); // ['2', 'keyCode', 'Target']
console.log(objectValues(sampleObject)); // ['Program Paradigm', 'JS', 'Browser']
