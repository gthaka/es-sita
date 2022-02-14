const person = {
    name: 'Maria',
    walk() {
        console.log(this);
    }
};

person.walk(); // this returns the reference of the object

// const walk = person.walk;
// walk(); // will be undefined --global object -- strict mode is enabled by default

// We can bind to avoid the above
const walk = person.walk.bind(person);
walk();