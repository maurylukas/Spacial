function Tiro ()
{
    this.tiro = false;
    this.largura = canvas.width / 68.57; // original = 14
    this.altura = canvas.height / 31.58; // original = 19
    this.posicaoX = nave.posicao + (nave.largura - this.largura) / 2;
    this.posicaoY = nave.altura;
    this.centroX = this.largura / 2;
    this.centroY = this.altura / 2;
    this.raio = this.largura / 2;
    this.diferenca = canvas.height / 120; // original = 5
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'static/img/tiro2.png';
    this.atirar = function ()
    {
        this.tiro = true;
        this.posicaoX = nave.posicao + (nave.largura - this.largura) / 2;
        this.posicaoY = nave.altura;
    };
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.largura, this.altura);
    };
    this.proximo = function ()
    {
        this.posicaoY += this.diferenca;
        if (this.posicaoY >= canvas.height)
        {
            this.tiro = false;
        }
    };
}