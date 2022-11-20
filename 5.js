class Device{
  constructor(name, power, color){
  this.name = name
  this.power = power
  this.color = color|| "not given";
  }
  getInfo() {
    console.log(this.name + " is a big device. Power is " + this.power +" V. Сolor is " + this.color)
  } 
}

const device = new Device("Computer", 90, "blue");
device.getInfo();

class Things extends Device{
  constructor (isDeviceSmall, power, name, color){
    super (name, power, color);
    this.isDeviceSmall = isDeviceSmall;  
  }

getInfo (){
  if (this.isDeviceSmall){
    return this.name + " is a small device. Power is " + this.power+" V. Сolor is " + this.color
  } else {
    return super.getInfo()
  }
}
}
const lilDevice =new Things(true, 40, "Phone", "red")
console.log(lilDevice.getInfo());
const bigDevice =new Things(false, 60, "Laptop")
bigDevice.getInfo();