// Begin of asteroid function
function Astro ()
{
    this.tamanhoOrigem = 50;
    this.tamanhoDestino = canvas.height / 14.4; // original = 50
    this.origemX = 0;
    this.origemY = 0;
    this.destinoX = Math.floor (Math.random () * (canvas.width - this.tamanhoDestino));
    this.destinoY = canvas.height;
    this.centro = this.tamanhoDestino / 2;
    this.raio = this.tamanhoDestino / 2.777; // original = 18
    this.controle = 1;
    this.maximo = canvas.height / 120; // original = 6
    this.minimo = canvas.height / 180; // original = 4
    this.velocidade = Math.floor (Math.random () * (this.maximo - this.minimo + 1) + this.minimo);
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'static/img/asteroides.png';
    this.desenhar = function ()
    {
        // Drawing asteroid
        contexto.drawImage (this.imagem, this.origemX, this.origemY, this.tamanhoOrigem, this.tamanhoOrigem, this.destinoX, this.destinoY, this.tamanhoDestino, this.tamanhoDestino);
    };
    this.proximo = function ()
    {
        // Loading next frame
        this.origemX += this.tamanhoOrigem;
        if (this.controle % 5 == 0)
        {
            // Looping spritesheet
            this.origemX = 0;
            this.origemY += this.tamanhoOrigem;
        }
        else if (this.controle == 19)
        {
            // Resetting spritesheet
            this.origemX = 0;
            this.origemY = 0;
            this.controle = 0;
        }
        this.destinoY -= this.velocidade;
        if (this.destinoY <= -this.tamanhoDestino)
        {
            // Repositioning asteroid
            this.destinoY = canvas.height;
            this.destinoX = Math.floor (Math.random () * (canvas.width - this.tamanhoDestino));
        }
        this.controle++;
    };
    this.reinicio = function ()
    {
        // Resetting asteroid
        this.origemX = 0;
        this.origemY = 0;
        this.destinoY = canvas.height;
        this.destinoX = Math.floor (Math.random () * (canvas.width - this.tamanhoDestino));
        this.controle = 1;
        this.velocidade = Math.floor (Math.random() * (this.maximo - this.minimo + 1) + this.minimo);
    };
}
// End of asteroid function