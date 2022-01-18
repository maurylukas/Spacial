function Astro ()
{
    this.tamanhoOrigem = 50;
    this.tamanhoDestino = canvas.height / 12; // original = 50
    this.origemX = 0;
    this.origemY = 0;
    this.destinoX = Math.floor (Math.random () * (canvas.width - this.tamanhoDestino));
    this.destinoY = canvas.height;
    this.centro = this.tamanhoDestino / 2;
    this.raio = this.tamanhoDestino / 2.77; // original = 18
    this.controle = 1;
    this.maximo = canvas.height / 100; // original = 6
    this.minimo = canvas.height / 150; // original = 4
    this.velocidade = Math.floor (Math.random () * (this.maximo - this.minimo + 1) + this.minimo);
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'img/asteroides.png';
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.origemX, this.origemY, this.tamanhoOrigem, this.tamanhoOrigem, this.destinoX, this.destinoY, this.tamanhoDestino, this.tamanhoDestino);
    };
    this.proximo = function ()
    {
        this.origemX += this.tamanhoOrigem;
        if (this.controle % 5 == 0)
        {
            this.origemX = 0;
            this.origemY += this.tamanhoOrigem;
        }
        else if (this.controle == 19)
        {
            this.origemX = 0;
            this.origemY = 0;
            this.controle = 0;
        }
        this.destinoY -= this.velocidade;
        if (this.destinoY <= -this.tamanhoDestino)
        {
            this.destinoY = canvas.height;
            this.destinoX = Math.floor (Math.random () * (canvas.width - this.tamanhoDestino));
        }
        this.controle++;
    };
    this.reinicio = function ()
    {
        this.origemX = 0;
        this.origemY = 0;
        this.destinoY = canvas.height;
        this.destinoX = Math.floor (Math.random () * (canvas.width - this.tamanhoDestino));
        this.controle = 1;
        this.velocidade = Math.floor (Math.random() * (this.maximo - this.minimo + 1) + this.minimo);
    };
}