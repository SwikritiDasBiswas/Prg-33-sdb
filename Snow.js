class Snow{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var snowPos=this.body.position;	
		push()
		translate(snowPos.x, snowPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		noStroke();
		fill("white")
		imageMode(CENTER);
		ellipseMode(RADIUS);
		ellipse(0,0,this.r,this.r);
		pop()
 }
}