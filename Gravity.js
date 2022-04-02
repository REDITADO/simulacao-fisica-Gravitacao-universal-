const canva = document.querySelector("canvas")
const ctx = canva.getContext("2d")

let Velx=5
let Vely=0
let ax=0
let ay =0
let g =0.5


let Earth = {
    mass:10000,
    positionx:500,
    positiony:500
}
const Body ={
    mass :1,
    positionx:400,
    positiony:400
}

function dinstanciaEntreDoisPontos(ex,ey,bx,by){
    const result = Math.sqrt(Math.pow((bx-ex),2)+Math.pow((by-ey),2))
    return result
}

function Main(){
ctx.fillStyle= "white"
ctx.fillRect(0,0,1000,1000)

ctx.fillStyle="red"    
ctx.fillRect(Body.positionx,Body.positiony,5,5)
ctx.fillRect(Earth.positionx, Earth.positiony,20,20)


let dinstancia = dinstanciaEntreDoisPontos(Body.positionx,Body.positiony,Earth.positionx,Earth.positiony)
let fG = g*((Earth.mass*Body.mass)/(dinstancia*dinstancia))
let cos = (Earth.positionx-Body.positionx)/dinstancia
let sin =  (Earth.positiony-Body.positiony)/dinstancia

let Fx = fG*cos
let Fy = fG*sin

ax = Fx/Body.mass
ay = Fy/Body.mass

Vely +=ay
Velx+=ax;
Body.positionx += Velx
Body.positiony+=Vely


console.log(fG,dinstancia,Velx,Vely,"\n",Fx," ",Fy)

}
setInterval(Main,100)