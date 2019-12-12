class Player {
    public xPos: number;
    public yPos: number;
    private xVel: number;
    private yVel: number;
    private keyboardListener: KeyboardListener;

    constructor(
        xPos: number,
        yPos: number,
        xVel: number,
        yVel: number,
        keyboardListener: KeyboardListener
        ) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVel = xVel;
        this.yVel = yVel;
        this.keyboardListener = keyboardListener;
    }
    public move(canvas:HTMLCanvasElement){
        if(this.keyboardListener.isKeyDown(KeyboardListener.KEY_RIGHT) && this.xPos !== 482){
            this.xPos += this.xVel;
        }
        if(this.keyboardListener.isKeyDown(KeyboardListener.KEY_LEFT)){
            this.xPos -= this.xVel;
        }
        if(this.keyboardListener.isKeyDown(KeyboardListener.KEY_UP)){
            this.yPos -= this.yVel;
        }
        if(this.keyboardListener.isKeyDown(KeyboardListener.KEY_DOWN)){
            this.yPos += this.yVel;
        }
    }
    public draw(ctx: CanvasRenderingContext2D){
    const x = 15;
    const y = 15;
    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.rect(this.xPos,this.yPos,x,y);
    ctx.closePath();
    ctx.fill();
    }
}