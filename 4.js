function Device(name){
  this.condition = 'works'
  this.name = name
  }
Device.prototype.getPower = function(power){
   console.log(`Power is ${power} V`)
}
function SmallDevice (name, color, size){
  this.name = name,
  this.color = color,
  this.size = size
}

function BigDevice (name, color, size, brand){
  this.name = name,
  this.color = color,
  this.size = size
  this.brand = brand
}
SmallDevice.prototype = new Device()
SmallDevice.prototype.getPower = function(power){
   console.log(`Small device power is ${power} V `)
}
BigDevice.prototype = new Device()
BigDevice.prototype.getPower = function(power){
   console.log(`Big device power is ${power} V`)
}

const lamp = new SmallDevice("lamp", "pink", "small");
const laptop = new BigDevice("laptop", "yellow", "big", "Lenovo");

lamp.getPower(40)
laptop.getPower(80)
// console.log(laptop)
// console.log(lamp)