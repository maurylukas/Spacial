function Vida ()
{
    this.vida = false;
    this.largura = canvas.width / 16; // original = 60
    this.altura = canvas.height / 12; // original = 50
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.centroX = this.largura / 2;
    this.centroY = this.altura / 2;
    this.raio = this.altura / 2;
    this.diferenca = canvas.height / 120; // original = 5
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'static/img/gloss.png';
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.largura, this.altura);
    };
    this.proximo = function ()
    {
        this.posicaoY -= this.diferenca;
        if (this.posicaoY <= -this.altura)
        {
            this.vida = false;
        }
    };
}