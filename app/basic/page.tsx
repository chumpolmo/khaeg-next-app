export function Profile() {
  return (
    <p className="flex justify-center items-center">
      <img
        src="/images/profile.jpg"
        alt="Chumpol Mokarat"
        style={{ width: '100px' }}
        className="rounded-full flex justify-center items-center"
      />
    </p>
  );
}

export default function FisrtJS() {

  // 1. Variables and Scope
  var name = "Chumpol Mokarat";
  var major = "Information Technology";
  let tel = "08xxxxxxxx";
  const position = "Assistant Professor";

  // Template Literal
  console.log(`Hello ${name}`);

  // 3. Object Destructuring
  const vehicles = ['mustang', 'f-150', 'expedition'];
  // const [car, truck, suv] = vehicles;
  const [car,, suv] = vehicles;

  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  // function myVehicle({type, color, brand, model}) {
  //   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  //   return message;
  // }

  const myVehicle = ({type, color, brand, model}) => {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    return message;
  }

  return (
    <div>
      <Profile />
      <h1>My Profile:</h1>
      <p>
        Name: {name}<br />
        Position: {position}<br />
        Major: {major}<br />
        Contact: {tel}<br />
      </p>
      <h1>Car Lists:</h1>
      <p>
        <strong>Car name:</strong> {car}<br />
        <strong>Suv name:</strong> {suv}<br />
        <strong>My Vehicle:</strong> {myVehicle(vehicleOne)}<br />
      </p>
    </div>
  );
}