function Explosao ()
{
    this.explosao = false;
    this.tamanhoOrigem = 64;
    this.tamanhoDestino = canvas.height / 9.375; // original = 64
    this.origemX = 0;
    this.origemY = 0;
    this.destinoX = 0;
    this.destinoY = 0;
    this.centro = this.tamanhoDestino / 2;
    this.controle = 1;
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'static/img/explosao.png';
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.origemX, this.origemY, this.tamanhoOrigem, this.tamanhoOrigem, this.destinoX, this.destinoY, this.tamanhoDestino, this.tamanhoDestino);
    };
    this.proximo = function ()
    {
        this.origemX += this.tamanhoOrigem;
        if (this.controle == 16)
        {
            this.origemX = 0;
            this.origemY = 0;
            this.controle = 0;
            this.explosao = false;
        }
        else if (this.controle % 4 == 0)
        {
            this.origemX = 0;
            this.origemY += this.tamanhoOrigem;
        }
        this.controle ++;
    };
}